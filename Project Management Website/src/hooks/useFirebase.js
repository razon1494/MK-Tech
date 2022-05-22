import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeFirebase from "../Firebase/firebase.initialize";
//initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [person, setPerson] = useState({});

  const googleProvider = new GoogleAuthProvider();

  //register user
  const registerUser = (email, password, history, name) => {
    setIsLoading(true);
    console.log("From register user", email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        //send name to firebase after creation
        setUser(newUser);
        //save user to the database
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          logout2();
          Swal.fire(
            "Congratulations!",
            "Your Registration is complete, Please sign in with email and password",
            "success"
          );
        });
        history.replace("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Sorry...Rejected",
          text: `${authError.slice(22)}`,
        });
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from admin finder");
        setAdmin(data.admin);
      });
  }, [user.email, checkAdmin]);
  //sign in
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //location set
        //to redirect admin dashboard
        console.log("from user cr", admin);
        if (admin) {
          const destination = location.state?.from || "/dashboard";
          history.replace(destination);
        } else {
          console.log("else");
          const destination = location.state?.from || "/";
          history.replace(destination);
        }
        // Signed in
        setAuthError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.code, "s", error.message, "d");
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // alert(authError.slice(22))
        Swal.fire({
          icon: "error",
          title: "Sorry...Rejected",
          text: `${authError.slice(22)}`,
        });
      })
      .finally(() => setIsLoading(false));
  };

  //google sign in
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location.state?.from || "/";
        history(destination, { replace: true });
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // Get the member
  useEffect(() => {
    fetch(`http://localhost:5000/member/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, [user]);
  const GetPerson = (email) => {
    useEffect(() => {
      fetch(`http://localhost:5000/getuser/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setPerson(data);
        });
    }, [email]);
  };
  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {});
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  //admin check for admin route
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data.admin);
      });
  }, [user.email]);
  //user check for user route
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from db");
        setIsUser(data.user);
      });
  }, [user.email]);

  //log out
  const logout = (history) => {
    history.push("/");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError(error.message);
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  //log out for register user again login
  const logout2 = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError(error.message);
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //save user function
  const saveUser = (email, displayName, method) => {
    const role = "user";
    const user = { email, displayName, role };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  console.log(isUser);
  return {
    user,
    admin,
    isLoading,

    isUser,
    signInWithGoogle,
    registerUser,
    loginUser,
    authError,
    person,
    checkAdmin,
    GetPerson,
    setCheckAdmin,
    setIsLoading,
    logout,
  };
};

export default useFirebase;

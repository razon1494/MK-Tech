const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;
//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yug9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("project_management");
    const projectCollection = database.collection("projects");
    const usersCollection = database.collection("users");
    //GET API to check mongo db is working fine or not *
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
    // Register user and add user ondatabase*
    app.post("/users", async (req, res) => {
      const user = req.body;
      user.application = [];
      const result = await usersCollection.insertOne(user);
      res.json(result);
    });
    // Getting all projects
    app.get("/manageprojects", async (req, res) => {
      const cursor = projectCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    //set admin
    app.put("/users/admin", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const updateDoc = { $set: { role: "admin" } };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.json(result);
    });
    //finding admin
    //find admin
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });
    //find user
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isUser = false;
      console.log(user, "hi");
      if (user?.role === "user") {
        isUser = true;
      }
      res.json({ user: isUser });
    });
    // get specific member
    app.get("/member/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      res.json(user);
    });
    // Update user
    app.put("/member/:id", async (req, res) => {
      const id = req.params.id;
      const application = req.body.application;
      const projectId = req.body.projectId;
      const applied = req.body.applied;
      const filter = { _id: ObjectId(id) };
      const updateDoc = {
        $set: {
          application: application,
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      const filter1 = { _id: ObjectId(projectId) };
      const updateDoc1 = {
        $set: {
          applied: applied,
        },
      };
      const result1 = await projectCollection.updateOne(filter1, updateDoc1);
      console.log(result1);

      res.json(result);
    });

    // Create Project
    app.post("/createproject", async (req, res) => {
      const service = req.body;
      const result = await projectCollection.insertOne(service);
      res.json(result);
    });

    // my orders
    app.get("/myorder/:email", async (req, res) => {
      const result = await ordersCollection
        .find({
          email: req.params.email,
        })
        .toArray();
      res.send(result);
    });
    //GET Single Project *
    app.get("/projects/:id", async (req, res) => {
      const id = req.params.id;
      console.log("got specific id", id);
      const query = { _id: ObjectId(id) };
      const service = await projectCollection.findOne(query);
      res.json(service);
    });
    //update project Status
    app.put("/projects/:id", async (req, res) => {
      const id = req.params.id;
      console.log(req.body.status);
      const currentStatus = req.body.status;
      let changedStatus = "";
      if (currentStatus == "open") {
        changedStatus = "in Progress";
      } else if (currentStatus == "in Progress") {
        changedStatus = "completed";
      } else {
        changedStatus = "completed";
      }

      const filter = { _id: ObjectId(id) };
      const updateDoc = {
        $set: {
          status: changedStatus,
        },
      };
      const result = await projectCollection.updateOne(filter, updateDoc);

      res.json(result);
    });
    //DELETE order from database
    app.delete("/deleteproject/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) };
      console.log(query);
      const result = await projectCollection.deleteOne(query);
      res.json(result);
    });
    //DELETE product from database
    app.delete("/deleteproduct/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) };
      console.log(query);
      const result = await projectCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

//for checking database is working or not
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

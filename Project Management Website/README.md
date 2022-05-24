# Project Management
## A pproject management website by MERN (MongoDB, Express JS, React, Node)
## There are some front end special css tasks also in the home page
## To see our live website please click the link below
## https://project-management-f232a.web.app/

### This project has 3 major parts
* Home
* Supervisor's management
* Member's portal
### Details Given Below
### Login Credentials
#### for Supervisor login :
#### email: admin@admin.com
#### password: 123123
#### &
#### for User login :
#### email: user@user.com
#### password: 123123

### To run this project on your local machine by cloning the repo you need two env file, one for website part and another for server side
### If you need I will provide a .env.local file for website part.
### You just copy them to the respective project folder.
### Then you need to run the command 'npm install'.
### and then go to website folder, as you have already added env.local file here and run the command 'npm i' now you just need to run the command 'npm start'
### DONE!!!!! Project is Running

### Home
- This is the landing page of our website and a front end task is completed.
- Mouse scrolling will scroll horizontally instead of vertical scrolling
- Side Navbar is is fixed here
- There are 5 section user can explore.
- Added a bit animation.

#### We kept login simple by using only email password base sign in so that user can login very easily without hassel.

- But after registration user will be redirected to login page.
- Here user should login giving his/her registered email and password.
- This extra process is just for security purpose

## User Part

- User can see all the projects and can apply for the open projects.

### Supervisor Part

- Supervisor will see all projects in "Manage Projects" Tab
- Supervisor can filter projects
- Can change there status only if 3 or more member applied
- Can edit project name
- can create another project in the 'Add Project' Tab
- Can promote other member in 'Make Supervisor' Tab


## API Details

### This server side completed all CRUD operations
### CREATE
- User can create new projects
- By this server the created product will be added to the display for further use
- while user sign up then that user will be created in DB by rest API


### READ
- Server has get method to fetch all the data from database and send to the client side
- By using this we can show projects/users easily.

### UPDATE
- Server has some funtionality to update existing data.
- We can update project name.
- Making supervisor is none other than update the role of the member

### DELETE
- Deleting is another funtionality we have been implemented in this server
- Admin also can delete projects from Database via this server API

************* Thank You For Reading **************************
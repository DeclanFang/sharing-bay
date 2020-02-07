# sharing-bay

SharingBay is a fully functional NodeJS web application for people to share and discover experience around the world. 

The project also combined with another project [BlogModel](https://github.com/DeclanFang/blog-model). From that people can add friends and view friends' posts only, which make the application into social networking oriented. 

![image](https://github.com/DeclanFang/sharing-bay/blob/master/readme/homepage.png)

For now what the application has achieved was creating, editing, deleting any posts and comments by user-self, and users are not allowed to change others' posts and comments. Also, people are free to view others' profile after sign in or sign up. 

![image](https://github.com/DeclanFang/sharing-bay/blob/master/readme/demo%20posts.png)

## Getting Started

### Prerequisites

1. **Node.js** for running server-side JavaScript. You can find instructions on how to download and install Node.js for your computer [here](https://nodejs.org/en/download/)

2. **MongoDB** (Community Edition preferrably) to store data. Instructions on downloading and installing MongoDB on your computer can be found [here](https://docs.mongodb.com/manual/installation/)

### Installing

Once you have Node.js and MongoDB installed on your computer,

1. [download](https://github.com/HarishTeens/yelpcamp/archive/master.zip) the project or clone it to your computer by running `git clone https://github.com/HarishTeens/yelpcamp.git` on your Git terminal.
2. In the directory of the folder `sharing-bay` containing the files of the repositiory, open up the terminal and run `npm install`
3. Once installation is complete, run `npm start` on the same terminal.
4. Open your web browser and visit the address `localhost:3000` and voila!
5. Sign up to use the awesome features of the app!

## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for
  modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

## Update log

- v2.0.1 add geocoder with Google's API to display location of posts in Google Map (check through branch [geocoder](https://github.com/DeclanFang/sharing-bay/tree/geocoder), not merge yet)

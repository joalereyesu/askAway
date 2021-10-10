const express = require("express");
const app = express(); 
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

//ROUTES
//create a user

app.get('/', function(req, res) {

  });


app.post("/signup", async(req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = await pool.query("INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *", [username, email, password]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});
//See all users

app.get("/users", async(req,res)=>{
    try {
       const allUsers = await pool.query("SELECT * FROM users");
       res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Select a user
app.get("/users/:username", async(req, res) => {
    try {
      const {username}=req.params;
      const user = await pool.query("SELECT * FROM users WHERE username=$1", [username]);
      res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//Update info
app.put("/users/:id", async(req, res)=>{
    try {
       const {id} = req.params;
       const {username, email, password}=req.body;
       const updateUser = await pool.query("UPDATE users SET username=$1, email=$2, password=$3 WHERE user_id=$4", [username, email, password, id]); 
       res.json("User was updated");
    } catch (error) {
       console.log(error.message); 
    }
})
//Delete user

app.delete("/users/:id", async(req, res)=>{
   try {
      const {id}=req.params;
      const deleteUser= await pool.query("DELETE FROM users WHERE user_id=$1",[id]);
      res.json("User was deleted");
   } catch (error) {
       console.log(error.message);
   } 
});


app.listen(5000, () => {
    console.log("The server has started on port 5000");
});



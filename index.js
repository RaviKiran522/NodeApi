const express = require('express');
const app = express();
const router = express.Router();
const connectDb = require('./db/db.js');
const user = require('./api/user.js');
const admin = require('./api/admin.js');
const errorMiddleware = require('.//middleware/error.js');
const dotenv = require('dotenv');
dotenv.config();

connectDb();
app.use(express.json({ extended: false }));
app.use('/api/usermodel/', user);

app.use('/api/adminmodel/', admin);


app.get('/temp/',(req,res)=>{
  res.json({name: "ravi"})
})

app.all('*',(req,res)=>{
  res.json({
    success: false,
    message: `${req.url} route is not found`
  })
})

app.use(errorMiddleware);

app.listen(5000, () => {
  console.log("Server listening to the port 5000");
});

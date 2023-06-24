const express = require('express');
const app = express();
const path = require('path');



app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create a route for admin/admin.html
app.get('/admin/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
});
//create a route for admin/createproduct.html
app.get('/admin/createproduct', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'createproduct.html'));
});
//create a route for admin/editproduct.html
app.get('/admin/editproduct', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'editproduct.html'));
});
//create a route for admin/createuser.html
app.get('/admin/createuser', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'createuser.html'));
});
//create a route for admin/edituser.html
app.get('/admin/edituser', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'edituser.html'));
});
//create a route for user/user.html
app.get('/user/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'user', 'user.html'));
});
//create a route for user/payment.html
app.get('/user/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'user', 'payment.html'));
});
//create a route for user/cart.html
app.get('/user/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'user', 'cart.html'));
});
//create a route for user/confirmation.html
app.get('/user/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'user', 'confirmation.html'));
});
//create a route for login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
//create a route for register.html
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});


// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
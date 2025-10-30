const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));




app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// about page route that sends the HTML file
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

//contact page routes that sends the html file
app.get('/contact', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public/contact.html'));
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

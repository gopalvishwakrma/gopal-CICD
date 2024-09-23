const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'DevOps Project Showcase', 
    name: 'Gopal Vishwakarma'
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About the Project',
    projectDescription: "This project automates the process of building and deploying a web application using tools that streamline software development. Imagine you're creating a website; instead of manually writing code, testing it, and then setting it up on a server every time there's a change, this system does it all automatically. Jenkins, the automation tool, pulls the latest code from a storage place (like GitHub), builds it into a complete package, and runs it in a controlled environment (called Docker). This means every update to the website is quickly tested and deployed without manual intervention, ensuring the website is always up-to-date and working smoothly."
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

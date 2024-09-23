const express = require('express');
const app = express();
const port = 3000;

// Serve static files (e.g., CSS) from 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gopal Vishwakarma - DevOps</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header>
        <h1>Hello, World!</h1>
      </header>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>
      <main>
        <section>
          <h2>Welcome to my simple Node.js web application!</h2>
          <p>Feel free to explore the project description in the About section.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Gopal Vishwakarma</p>
      </footer>
    </body>
    </html>
  `);
});

app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About the Project</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header>
        <h1>About the Project</h1>
      </header>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>
      <main>
        <section>
          <h2>Project by Gopal Vishwakarma - DevOps Enthusiast</h2>
          <p>This project automates the process of building and deploying a web application using tools that streamline software development.</p>
          <p>Imagine you're creating a website; instead of manually writing code, testing it, and then setting it up on a server every time there’s a change, this system does it all automatically.</p>
          <p>Jenkins, the automation tool, pulls the latest code from a storage place (like GitHub), builds it into a complete package, and runs it in a controlled environment (called Docker).</p>
          <p>This ensures every update to the website is quickly tested and deployed without manual intervention, ensuring the website is always up-to-date and working smoothly.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Gopal Vishwakarma</p>
      </footer>
    </body>
    </html>
  `);
});

// Static CSS for better styling
app.get('/style.css', (req, res) => {
  res.type('text/css');
  res.send(`
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    header {
      background-color: #333;
      color: white;
      padding: 10px 0;
      text-align: center;
    }
    nav {
      margin: 20px;
      text-align: center;
    }
    nav a {
      text-decoration: none;
      margin: 0 10px;
      color: #333;
      font-weight: bold;
    }
    main {
      margin: 20px;
    }
    section {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    footer {
      text-align: center;
      margin: 20px;
      padding: 10px 0;
      background-color: #333;
      color: white;
    }
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

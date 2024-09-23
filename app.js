<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Project Showcase - Gopal Vishwakarma</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #4a90e2;
            color: white;
            text-align: center;
            padding: 1em;
            border-radius: 5px;
        }
        h1 {
            margin-bottom: 0;
        }
        .subtitle {
            font-style: italic;
            margin-top: 0.5em;
        }
        section {
            margin-top: 2em;
        }
        h2 {
            color: #4a90e2;
        }
        .code-block {
            background-color: #f4f4f4;
            border-left: 4px solid #4a90e2;
            padding: 1em;
            margin: 1em 0;
            overflow-x: auto;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 0.5em;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <header>
        <h1>DevOps Project Showcase</h1>
        <p class="subtitle">By Gopal Vishwakarma</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>I'm Gopal Vishwakarma, a passionate DevOps engineer dedicated to streamlining software development processes and improving deployment efficiency.</p>
    </section>

    <section>
        <h2>Project Overview</h2>
        <p>This project demonstrates an automated CI/CD pipeline for a web application. It showcases the seamless integration of various DevOps tools to achieve continuous integration and deployment.</p>
        <p class="highlight">The system automates the process of building and deploying a web application, ensuring quick testing and smooth deployment of every update without manual intervention.</p>
    </section>

    <section>
        <h2>Key Components</h2>
        <ul>
            <li><strong>Jenkins:</strong> Automates the build and deployment process</li>
            <li><strong>Docker:</strong> Provides a controlled environment for running the application</li>
            <li><strong>GitHub:</strong> Stores and manages the source code</li>
        </ul>
    </section>

    <section>
        <h2>The Application</h2>
        <p>The web application being deployed is a simple Node.js server using Express. Here's a snippet of the code:</p>
        <div class="code-block">
            <pre><code>
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is a simple Node.js web application.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
            </code></pre>
        </div>
    </section>

    <section>
        <h2>Benefits of this Approach</h2>
        <ul>
            <li>Faster development cycles</li>
            <li>Reduced manual errors</li>
            <li>Consistent deployment process</li>
            <li>Improved collaboration between development and operations teams</li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2024 Gopal Vishwakarma. All rights reserved.</p>
    </footer>
</body>
</html>

## ---------------- Complete Student Guide: Coffee Orders RESTful API Lab -------------

Welcome to the Coffee Orders RESTful API Lab! This guide walks you through setting up your backend   environment, building an API with Express.js, testing your routes, and understanding key development concepts.


## -------------------- 1.Node.js and Express.js Installation -------------------------

## What is Node.js?
Node.js is a runtime environment that lets you run JavaScript outside of the browser which is perfect for building backend APIs.

## What is Express.js?
Express.js is a web framework for Node.js that simplifies routing and server-side development.


## --------------------------------- Installation Steps --------------------------------

## Step 1: Install Node.js
1. Go to (https://nodejs.org)
2. Download the **LTS version** for your OS
3. Follow the installation instructions
4. Verify installation:
    -- Open New Terminal and Write
      node -v
      npm -v


## Step 2: Set Up Your Project
-- Create a folder and navigate into it:
      mkdir coffee-orders-api
      cd coffee-orders-api
    

-- Initialize a Node Project
      npm init -y


## Step 3: Install Express.js
      npm install express


## --------------------------------- 2.Project Setup Overview -----------------------

After setup, your folder should look like:

coffee-orders-api/  
├── node_modules/  
├── package.json  
├── package-lock.json  
└── index.js  

Now you can write your API routes in 'index.js'.


-- To start your server:
      node index.js


## --------------------------------- 3.API Endpoints Reference -------------------------

| Method | Route               | Description                      |
|--------|---------------------|----------------------------------|
| GET    | /orders             | Fetch all coffee orders          |
| GET    | /orders/:id         | Fetch a specific order by ID     |
| POST   | /orders             | Add a new coffee order           |
| DELETE | /revoke-order/:id   | Delete a specific order          |


## Sample POST body: json
  {
    "item": "Latte",
    "size": "Medium",
    "customer": "Alice"
  }

## ----------------------------------- 4.Testing the API ------------------------------

## Use Postman
1. Open Postman
2. Create a new request
3. Set method to `GET`, `POST`, etc.
4. For `POST`, use Body -> raw -> JSON and enter the sample data


## ------------------------------------ 5.Learning Outcomes ---------------------------

By completing this lab, you will:
- Understand how RESTful APIs work
- Set up and run a Node.js server using Express.js
- Create and test basic API routes
- Use tools like Postman for backend testing
- Learn how APIs connect to frontend applications in full-stack development


**------------------Happy coding and exploring the backend world with Express.js!----------------------**  
----------This lab was designed by Riddhi Kadia for the CUNY Tech Prep Web application Activity.----------

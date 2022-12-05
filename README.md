# User authentication

## Introduction

This is a login page of user authentication

## Screenshot
<div>
  <img src=./public/images/screen_shot.png 
  height=300px border=1px aspect-ratio: 1>
</div>

## Feature

- Input the email and password and will find if the data-base has this user-info or not.

- If the user-info doesn't exist, it will show the warning in the page

- Can keep the user login and can logout

## Package environment

- Express @4.18.2
- Express-handleBars @6.0.6
- Node.js
- Mongoose @6.7.4
- Method-override@3.0.0
- Express-session@1.17.3

## How to use

1. Confirm you have already install the npm and node.js

2. Clone this repository

   ```
   https://github.com/wenliangsu/user_authentication.git
   ```

3. Set the MongoDB connection

   ```
   MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
   ```

4. Then type the command as following:
   ```
   npm run seed
   ```
   ```
   npm run dev
   ```
5. You will see the message, and copy it into your browser.
   ```
   Express is listening on localhost:3000
   ```

### Note

This project is from the [Alphacamp class](https://tw.alphacamp.co)

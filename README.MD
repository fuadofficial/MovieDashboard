# Movie Dashboard

<img width="1439" alt="Screenshot 2023-06-07 at 4 47 09 PM" src="https://github.com/thafsi-pv/MovieDashboard/assets/22377348/3018b032-70fe-48a5-abba-c11148800387">

<img width="1438" alt="Screenshot 2023-06-07 at 4 47 22 PM" src="https://github.com/thafsi-pv/MovieDashboard/assets/22377348/50f5f803-7d45-4dd8-af74-5d888d6b6184">
<img width="1440" alt="Screenshot 2023-06-07 at 4 47 55 PM" src="https://github.com/thafsi-pv/MovieDashboard/assets/22377348/cb3a4611-b0b6-4c67-b953-2e812f472f63">

#Working Video: (URL:https://github.com/thafsi-pv/MovieDashboard/assets/22377348/35278937-7a2d-47a9-9a26-9ecda3ed4506)


This is a web app built using React, Node/Express.js, MongoDB, and Cloudinary CDN. It allows users to add, edit, and view movie data. Movie data includes movie title, rating, star category, genre, and movie poster image. A separate page allows users to add and manage movie genres.

## Features

### Home Page

The home page displays a list of all movies available in the database. For each movie, it shows the movie title, rating, star category, genre badge, and movie poster image. The rating is displayed as a star from 1 to 5.

### Add Movie Page

The add movie page allows users to add a new movie to the database. It includes a form with fields for movie title, rating slider, genre checkboxes, and movie poster image upload. The rating field is displayed as a slider ranging from 1 to 5. Upon submitting the form, data is stored in MongoDB and the poster images are uploaded to Cloudinary CDN using Axios. The Cloudinary CDN cloud name and upload preset are stored in a .env file 

### Genre Page

The genre page allows users to manage genres for movies. This page displays a list of all genres available in the database in a table format. The user can edit and delete genres using buttons on the page. Users can also add new genres using the form at the top of the page.


## Built With

- React
- Node.js
- Express
- MongoDB
- Cloudinary CDN
- Axios
- Tailwind CSS
- Tailwind Plugin daisyUI
- Mongoose

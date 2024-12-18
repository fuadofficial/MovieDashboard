# Movie Dashboard


![Screenshot (12)](https://github.com/user-attachments/assets/5701e1de-4fe8-4d4d-91a3-97efeb427647)
![Screenshot (9)](https://github.com/user-attachments/assets/3271a959-3188-481b-a548-113afd25a916)
![Screenshot (11)](https://github.com/user-attachments/assets/43079edb-17cf-4ab3-9b6f-721267828b8c)



This is a web app built using React, Node/Express.js, MongoDB, and Cloudinary CDN. It allows users to add, edit, and view movie data. Movie data includes movie title, rating, star category, genre, and movie poster image. A separate page allows users to add and manage movie genres.
......................................
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

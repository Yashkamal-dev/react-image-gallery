# React Image Gallery

A simple image gallery built using **React** that fetches images from the Picsum API and displays them in a responsive gallery layout with pagination.

## 🚀 Features

- Fetches images from an external API
- Displays images in a gallery grid
- Shows photographer/author name
- Pagination to navigate through pages
- Loading state while images are being fetched

## 🛠️ Built With

- React
- JavaScript (ES6+)
- Fetch API
- CSS

## 📦 API Used

Images are fetched from:

https://picsum.photos/

Example endpoint:

https://picsum.photos/v2/list?page=1&limit=30

## 📸 Preview

The gallery displays images along with their authors and allows users to navigate through pages using pagination buttons.

![Project Screenshot](./public/preview.png)

## 📁 Project Structure

```bash
├── public/
    └── preview.png
├── vite.config.js
├── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx
├── .gitignore
├── index.html
├── package.json
├── eslint.config.js
└── README.md
```

## 🎯 Purpose

This project was created for **practicing React concepts**, including:

- useState
- useEffect
- API fetching
- conditional rendering
- pagination

## 📌 Future Improvements

- Add lazy loading
- Add skeleton loading
- Improve pagination UI
- Add responsive design improvements

## 📚 What I Learned

This project was built to practice **React fundamentals** such as **API fetching**, **state management with hooks**, and implementing **pagination** in a dynamic **image gallery**.

# 📝 Blog Post Web App

A simple **Node.js, Express, and EJS** based blog application that allows users to **create, edit, and display blog posts** dynamically.

## 🚀 Features

- 🖊️ Create new blog posts
- ✏️ Edit existing blog posts
- 🗑️ Delete blog posts (feature can be added)
- 📄 Display all blog posts on the homepage
- 🎨 Styled with **Bootstrap 5**
- 📂 Uses **EJS** templating for dynamic content

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### 2️⃣ Install dependencies:

```
npm install
```

### 3️⃣ Run the server:

```
node index.js
```

### Or

### Install nodemon :

```
npm install nodemon
nodemon index.js
```

🚀 The app will run on http://localhost:3000

# 📂 Project Structure

```
📦 Blog-Post
 ┣ 📂 public/          # Static files (CSS, JS, Images)
 ┣ 📂 views/           # EJS templates (index.ejs, edit.ejs, etc.)
 ┃ ┣ 📂 partials/      # Navbar & footer templates
 ┃ ┣ 📜 index.ejs      # Homepage - Displays blog posts
 ┃ ┣ 📜 edit.ejs       # Edit blog post page
 ┣ 📜 index.js         # Main Express server file
 ┣ 📜 package.json     # Dependencies and scripts
 ┣ 📜 README.md        # Project documentation
```

# 🛠️ Tech Stack

- **Node.js** - Backend runtime

- **Express.js** - Web framework

- **EJS** - Templating engine

- **Bootstrap 5** - Styling

- **Body-parser** - Handling form data

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (feature-name)
3. Commit changes and open a Pull Request

Feel free to open issues for bug reports or feature requests.

# 🛠️ Future Enhancements

- ✅ Add Delete Post feature
- ✅ Store posts in MongoDB instead of an array
- ✅ Implement User Authentication
- ✅ Deploy on Render, Vercel, or Heroku

# 🌟 Star this repo if you like it! ⭐

Feel free to open issues for bugs or feature requests. Happy coding! 😃

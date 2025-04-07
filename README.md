# SGMS - Student Grade Management System

![SGMS Logo](./public/logo.png)

A web-based portal designed to efficiently manage student records including grades, pass/fail status, and identifying top performers. Built using React.js, Firebase, and TailwindCSS, SGMS simplifies grade management with an intuitive interface and real-time database integration.

---

## 🚀 Live Demo

🔗 **Vercel Deployment:** [SGMS Live Site](https://sgms-student-grades-management-system.vercel.app/)

🔗 **GitHub Repository:** [View on GitHub](https://github.com/gautambhattcse/SGMS-Student_Grades_Management_System)

---

## 📌 Features

- 📥 Add Students with Grades
- 🗑️ Delete Student by Roll Number
- 📊 Calculate & Display Average Grades
- 🏅 Highlight Top Performing Student
- ⚡ Real-time Database Integration using Firebase
- 📱 Responsive UI with Tailwind CSS

---

## 🧱 Technologies Used

### Frontend
- **React.js** – UI development
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS for rapid UI development
- **Shadcn/UI** – Accessible, customizable UI components

### Backend / Database
- **Firebase Firestore** – Real-time NoSQL cloud database

### Others
- **Vercel** – Hosting & deployment
- **Canva Dreamlab** – Used to design the SGMS logo
- **React Hot Toast (Sonner)** – Notification system

---

## 🛠️ Installation & Setup

```bash
# 1. Create React + Vite Project
npm create vite@latest sgms --template react

# 2. Navigate to directory
cd sgms

# 3. Install dependencies
npm install

# 4. Setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Configure Tailwind in tailwind.config.js and index.css
# 6. Install Shadcn UI
npx shadcn@latest init

# 7. Setup Firebase
npm install firebase
# Create firebase.js & .env.local for config
```

💡 Don’t forget to update Firestore rules to:
```js
allow read, write: if true;
```

---

## 🧩 Project Structure

```bash
SGMS/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Sonner.jsx
│   │   ├── Header.jsx
│   │   └── Hero.jsx
│   ├── StudentGradeSystem.jsx
│   ├── firebase.js
│   └── App.jsx
├── .env.local
├── tailwind.config.js
└── vite.config.js
```

---

## 💡 Functionalities

- **Add Student:** Enter name, roll number, and comma-separated grades.
- **Delete Student:** Remove using roll number.
- **Average Calculation:** Computes each student's average grade.
- **Top Performer:** Automatically identifies the student with the highest average.

---

## 🧩 Challenges & Solutions

| Challenge                         | Solution                                                                 |
|----------------------------------|--------------------------------------------------------------------------|
| Firebase credential issues       | Stored configs in `.env.local` and configured Firebase rules properly.  |
| Component path resolution errors | Used correct aliases and checked Vite configuration.                     |
| UI not updating on changes       | Used `useEffect` to refetch data after state updates.                    |
| Toast notifications not visible  | Ensured Sonner was properly imported and mounted globally.               |

---

## ✍️ Author

**Gautam Bhatt**  
📧 gautambhatt6022@gmail.com  


---

## 📄 License

This project is licensed under the MIT License - feel free to fork and modify it for your educational purposes.

---

## 🙌 Acknowledgements

- Firebase by Google
- React.js & Vite
- TailwindCSS
- Shadcn UI
- Canva for logo design

---

> “Empowering institutions to manage students smarter, faster, and better!”

```

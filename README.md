🎟️ Ticket Management Web App (Vue.js)

A simple yet powerful Ticket Management Web Application built with Vue 3, Vue Router, VeeValidate, and Zod.
This is the Vue.js version of the multi-framework challenge — identical to the React and Twig versions in features and design.

🚀 Features

✅ Responsive landing page with gradient and SVG wave
✅ Authentication (Login / Signup) using localStorage
✅ Form validation powered by VeeValidate + Zod
✅ Protected Dashboard with ticket statistics
✅ Full CRUD (Create, Read, Update, Delete) Ticket Management
✅ Persistent local storage data
✅ Clean layout with Vue Router + Layout Component
✅ Tailwind CSS for modern UI styling

🧩 Tech Stack
Category	Technology
Framework	Vue 3 (Composition API)
Routing	Vue Router v4
Forms	VeeValidate
Validation	Zod
Styling	Tailwind CSS
Storage	Browser LocalStorage
📁 Folder Structure
src/
│
├── assets/
│   └── hero-wave.svg
│
├── components/
│   ├── Navbar.vue
│   └── Footer.vue
│
├── layouts/
│   └── MainLayout.vue
│
├── lib/
│   └── validation.js
│
├── pages/
│   ├── LandingPage.vue
│   ├── LoginPage.vue
│   ├── SignupPage.vue
│   ├── DashboardPage.vue
│   └── TicketsPage.vue
│
├── router/
│   └── index.js
│
├── App.vue
├── main.js
└── index.css

⚙️ Installation and Setup
1️⃣ Clone the Repository
git clone https://github.com/MAYOR-001-star/Ticket-Web-App-vue.git
cd ticket-app-vue

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


App runs at 👉 http://localhost:5173

4️⃣ Build for Production
npm run build

5️⃣ Preview Production Build
npm run preview

🔐 Authentication Flow

Authentication is simulated with localStorage.

When a user signs up, their data is stored under users.

On login, the app checks the entered credentials.

If valid, a ticketapp_session key is created.

Protected routes (/dashboard, /tickets) redirect to /login if no session exists.

Clicking Logout clears the session and redirects to /.
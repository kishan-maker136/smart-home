# 🏠 Smart Home Control & Data Logging System

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c6ff,100:0072ff&height=200&section=header&text=Smart%20Home%20System&fontSize=40&fontColor=ffffff&animation=fadeIn" />

<br/>

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?style=for-the-badge\&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge\&logo=mysql)
![Railway](https://img.shields.io/badge/Deployed-Railway-purple?style=for-the-badge)
![Railway](https://img.shields.io/badge/Database-Railway-orange?style=for-the-badge)

<br/>

**🚀 A Full-Stack Smart Home Dashboard to Control Devices, Track Data, and Visualize Insights in Real-Time**

🌐 **Live App:** https://your-railway-app.up.railway.app
📖 **API Base:** https://your-railway-app.up.railway.app/devices

</div>

---



## 🚀 What This Project Does

💡 This system simulates a **real-world smart home environment**:

* Turn devices ON/OFF remotely
* Monitor temperature, humidity, and energy usage
* Automatically trigger alerts
* Visualize data through charts

---

## ✨ Key Features

| Feature            | Description                       |
| ------------------ | --------------------------------- |
| 🔐 Authentication  | Secure login system               |
| 💡 Device Control  | Toggle devices in real-time       |
| 🌡️ Sensor Logging | Store environmental data          |
| 🚨 Alerts          | High temperature detection        |
| 📊 Charts          | Data visualization using Chart.js |
| ☁️ Cloud DB        | Hosted on Railway                 |
| 🌐 Deployment      | Live on Render                    |

---

## 🧠 System Architecture

```mermaid
graph TD
A[Frontend HTML/CSS/JS] --> B[Express Server]
B --> C[Auth API]
B --> D[Device API]
B --> E[Sensor API]
B --> F[MySQL Database (Railway)]
```

---

## 🛠️ Tech Stack

| Layer         | Technology            |
| ------------- | --------------------- |
| Frontend      | HTML, CSS, JavaScript |
| Backend       | Node.js, Express.js   |
| Database      | MySQL (Railway Cloud) |
| Visualization | Chart.js              |
| Deployment    | Render                |

---

## 📸 Screenshots

<p align="center">
  <img src="./screenshots/login.png" width="45%"/>
  <img src="./screenshots/dashboard.png" width="45%"/>
</p>

---

## 🔌 API Endpoints

### Auth

* `POST /auth/login`
* `POST /auth/register`

### Devices

* `GET /devices`
* `PUT /devices/:id`

### Sensor

* `POST /sensor`
* `GET /sensor/:id`

---

## ⚙️ Run Locally

```bash
npm install
node server/server.js
```

---

## 🔐 Environment Variables

```env
MYSQLHOST=your_host
MYSQLUSER=your_user
MYSQLPASSWORD=your_password
MYSQLDATABASE=your_db
MYSQLPORT=your_port
```

---

## 🌐 Deployment

* 🚀 Backend → Railway
* ☁️ Database → Railway

---

## 🔮 Future Enhancements

* 🔐 JWT Authentication
* 📱 Mobile Responsive UI
* 📊 Live Sensor Graphs
* 🔔 Notifications System
* 🤖 AI-based Energy Optimization

---

## 👨‍💻 Author

<div align="center">

### **Kishan BC**

🎓 B.Tech CSE (Cybersecurity)
💻 Full-Stack Developer

</div>

---

## ⭐ Support

If this project helped or impressed you:

👉 Give it a ⭐ on GitHub
👉 Share with others

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0072ff,100:00c6ff&height=120&section=footer"/>

# MERN Crowdfunding Platform

A full-stack **MERN (MongoDB, Express, React, Node.js)** crowdfunding application that enables users to create campaigns, make donations, and track funding progress.

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Database Schema](#database-schema)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Campaign Form Fields](#campaign-form-fields)

---

## ✨ Features
- User authentication and authorization  
- Create and manage crowdfunding campaigns  
- Secure payment processing  
- Real-time campaign progress tracking  
- Campaign search and filtering  
- User dashboard  
- Campaign analytics  
- Responsive design  

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- Redux / Context API  
- Axios  
- React Router  
- CSS / Styled Components / Material-UI  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT authentication  
- Bcrypt password hashing  

### **Other Tools**
- Stripe / PayPal payment integration  
- Cloudinary for image uploads  
- Nodemailer for email notifications  

---

## 🏗 Architecture
![System Architecture Diagram](https://github.com/user-attachments/assets/f76183d3-09e2-4d45-9d72-5e75a2af8b66)

---

## 🗄 Database Schema
![Database Schema](https://github.com/user-attachments/assets/06ae31f3-0f72-43f3-8d49-083af42d594a)

### **Main Collections**
- **Users** — Authentication & profile  
- **Campaigns** — Campaign details  
- **Donations** — Donation transactions  
- **Comments** — Campaign feedback  

---

## 📦 Installation

### **Prerequisites**
- Node.js (v14+)  
- MongoDB  
- npm or yarn  

### **Steps**

#### 1. Clone the repository
```bash
git clone https://github.com/JainamSavla/crowdfunding.git
cd crowdfunding
```

Create an env for backend with this 
```bash
PRIVATE_KEY=GET FROM METAMASK 
THIRDWEB_CLIENT_ID=Get from  WEB3 Dashboard after creating project
THIRDWEB_SECRET_KEY=Get from  WEB3 Dashboard after creating project
```
Create an env for Frontend with this 
```bash
VITE_THIRDWEB_CLIENT_ID=Get from  WEB3 Dashboard after creating project
VITE_CONTRACT_ADDRESS=Get from WEB3 Dashboard after deploying project  npm run deploy -- -k your_secret_key

```
## 📸 Screenshots
### Homepage
<img width="1425" height="752" alt="image" src="https://github.com/user-attachments/assets/30f4437e-6caa-4389-af22-71e92750eb01" />

### Campaign Creation
<img width="1529" height="783" alt="image" src="https://github.com/user-attachments/assets/3ec97582-8e96-4655-8f66-0a68ec88952b" />

### Campaign Details
<img width="1312" height="762" alt="image" src="https://github.com/user-attachments/assets/85986c02-cc70-4e1b-a16f-d8e68622a2ed" />

Made with MERN STACK +WEB3



# MERN Crowdfunding Platform:-https://crowdfunding-seven-snowy.vercel.app/

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
<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/2327d96c-be4d-4364-bd9a-e59038c7b403" />

---

## 🗄 Database Schema
<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/45a8dc53-85e9-4b71-9c58-c8b45f0e27d0" />

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
<img width="1583" height="768" alt="image" src="https://github.com/user-attachments/assets/8b478df5-e2f6-49b3-8fec-c7f861c3ee10" />


### Campaign Creation
<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/66355060-ae89-4390-9fd0-ee289d6692cc" />


### Campaign Details
<img width="1593" height="698" alt="image" src="https://github.com/user-attachments/assets/f14adbf7-9b87-4cd2-9682-344fe201ff30" />


Made with MERN STACK +WEB3



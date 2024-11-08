# Bachelor House Management System

Welcome to the Mess Manager! This system is designed to enhance communication, meal planning, and expense tracking among individuals sharing a living space.

## Features and Functionalities

### User Management
- Users can register and create individual accounts with unique usernames and passwords.
- Profiles can be updated with personal information, dietary preferences, and allergies.

### Meal Planning and Preferences
- Users can update meal preferences for lunch and dinner, specifying choices for rice, chicken, fish, or opting for a meal off.
- Preferences can be set for specific days or weeks, considering individual schedules.

### Expense Tracking
- Users can log expenses related to groceries and household items.
- The system calculates and displays each user's contribution towards shared expenses.

### Monthly Overview
- Maintains a monthly overview of each user's meal preferences and expenses.
- Users can view and analyze their monthly consumption patterns for better planning and budgeting.

### Group Chat System (Using Socket.io)
- Users can participate in real-time group chats to discuss meal plans, grocery lists, and other household matters.
- Supports the exchange of text messages, images, and links.
- Users can create different chat groups for specific topics.

### Video Call System (Using Zego Cloud)
- Incorporates a video call feature for users to conduct virtual meetings.
- Users can organize video calls for collaborative meal planning or discussions using Zego Cloud.

### Notification System
- Users receive notifications for important updates such as changes in meal preferences, expense entries, or upcoming video calls.
- Customizable notification preferences.

### Security and Access Control
- Ensures the security of user data through encryption and secure authentication methods.
- Passwords are hashed using bcrypt.
- JWT (JSON Web Tokens) for secure user authentication.

### Data Update
- Utilizes a cron job service for periodic data updates.

### Tech Stack

#### Backend
- Node.js
- MongoDB (Database)
- Testing Tools: Postman
- Security: bcrypt (Password hashing), JWT (JSON Web Tokens)
- Data Update: Cron job service
- Real-time Chat: Socket.io
- Video Call: Zego Cloud

#### Frontend
- Flutter
- State Management: Provider and GetX

## Getting Started

1. Clone the repository.
  <code> git clone https://github.com/towhid-ullah/Mess-Manager.git </code>


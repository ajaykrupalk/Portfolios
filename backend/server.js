require('dotenv').config()

const express = require('express');
const cors = require('cors');

const blogRoutes = require('./routes/blog.route')
const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')

const app = express();

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

app.use("", blogRoutes);

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Listening to Backend Port")
})
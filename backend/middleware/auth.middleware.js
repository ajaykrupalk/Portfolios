const admin = require('firebase-admin');
// const { initializeApp } = require('firebase/app')

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
};

admin.initializeApp(firebaseConfig);

const authenticate = async (req, res, next) => {
    const idToken = req.body.idToken || req.query.idToken;

    admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
            req.user = decodedToken;
            next();
        })
        .catch((error)=>{
            res.status(401).send(error);
        });
};

module.exports = { authenticate };
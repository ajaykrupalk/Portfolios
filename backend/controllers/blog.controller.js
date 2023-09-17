require('dotenv').config()

const { initializeApp } = require('firebase/app')
const {
    getFirestore, collection, onSnapshot,
    serverTimestamp, query,
    addDoc, doc, orderBy, getDoc, getDocs, where
} = require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
};

initializeApp(firebaseConfig);

const db = getFirestore()

const colRef = collection(db, 'blogs')

const getABlog = async (req, res) => {
    const docRef = doc(db, 'blogs', req.params.id)

    const unsubscribe = onSnapshot(docRef, (doc) => {
        if (!doc.data()) {
            res.status(400).send({ error: 'Document not found' });
            unsubscribe();
            return;
        }

        res.status(200).send({
            "message": "success",
            "data": doc.data()
        });
        unsubscribe();
    })
}

const getAllBlogs = async (req, res) => {
    const q = query(colRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        let blogs = []
        
        if(snapshot.docs.length === 0){
            res.status(400).send({ error: 'Documents not found' });
            unsubscribe();
            return;
        }

        snapshot.docs.forEach((doc) => {
            blogs.push({ ...doc.data(), id: doc.id })
        })

        res.status(200).json({
            "message": "success",
            "data": blogs
        })
        unsubscribe();
    })
}

const createBlog = async (req, res) => {

    const title = req.body.title
    const slug = title.trim().replace(' ', '-').toLowerCase()
    const content = req.body.content

    const checkDuplicate = query(colRef, where('slug','==',slug))
    const existingDoc = await getDocs(checkDuplicate)

    if(!existingDoc.empty) {
        return res.status(400).json({ "message": "Duplicates are not allowed" });
    }

    addDoc(colRef, {
        title: title,
        slug: slug,
        content: content,
        createdAt: serverTimestamp()
    })
        .then(() => {
            return res.status(200).json({
                "message": "Success",
                "title": title,
                "slug": slug
            })
        })
        .catch((error) => {
            return res.status(400).json({ "message": error });
        })
}

module.exports = { createBlog, getABlog, getAllBlogs }
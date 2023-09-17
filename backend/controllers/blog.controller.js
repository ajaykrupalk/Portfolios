require('dotenv').config()

const { initializeApp } = require('firebase/app')
const {
    getFirestore, collection, onSnapshot,
    serverTimestamp, query,
    addDoc, doc, orderBy, getDoc, getDocs, where, limit
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
    const checkForSlug = query(colRef, where('slug', '==', req.params.slug))
    const unsubscribe = onSnapshot(checkForSlug, (querySnapshot) => {
        if (querySnapshot.empty) {
            res.status(404).json({ error: 'Document not found' });
            unsubscribe();
            return;
        } else {
            const doc = querySnapshot.docs[0];
            res.status(200).json(doc.data());
            unsubscribe();
        }

        unsubscribe();
    });
}

const getAllBlogs = async (req, res) => {
    const q = query(colRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        let blogs = []

        if (snapshot.docs.length === 0) {
            res.status(400).send({ error: 'Documents not found' });
            unsubscribe();
            return;
        }

        snapshot.docs.forEach((doc) => {
            blogs.push({ ...doc.data(), id: doc.id })
        })

        res.status(200).json(blogs)
        unsubscribe();
    })
}

const getLatestBlogs = async (req, res) => {
    const queryRef = query(colRef, orderBy('createdAt', 'desc'), limit(3));

    const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
        const latestBlogs = [];

        querySnapshot.forEach((doc) => {
            latestBlogs.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json(latestBlogs);

        unsubscribe();
    });
}

const createBlog = async (req, res) => {

    const title = req.body.title.toLowerCase();
    const slug = title.trim().replace(/ /g, '-').toLowerCase();
    const description = req.body.description.toLowerCase();
    const content = req.body.content.toLowerCase();

    const checkDuplicate = query(colRef, where('slug', '==', slug))
    const existingDoc = await getDocs(checkDuplicate)

    if (!existingDoc.empty) {
        return res.status(400).json({ "message": "Duplicates are not allowed" });
    }

    addDoc(colRef, {
        title: title,
        slug: slug,
        description: description,
        content: content,
        createdAt: serverTimestamp()
    })
        .then(() => {
            return res.status(200).json({
                "message": "Success",
                "title": title,
                "description": description,
                "slug": slug
            })
        })
        .catch((error) => {
            return res.status(400).json({ "message": error });
        })
}

module.exports = { createBlog, getABlog, getAllBlogs, getLatestBlogs }
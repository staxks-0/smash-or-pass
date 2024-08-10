// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

let currentImageIndex = 0;
let imageRefs = [];

// Fetch images from Firebase Storage
async function loadImages() {
    const listRef = storage.ref().child('images');
    const res = await listRef.listAll();
    imageRefs = res.items;
    if (imageRefs.length > 0) {
        displayImage();
    } else {
        alert('No images found!');
    }
}

// Display the current image
function displayImage() {
    imageRefs[currentImageIndex].getDownloadURL().then((url) => {
        document.getElementById('image').src = url;
    });
}

// Handle Smash or Pass
function handleDecision(decision) {
    const docRef = db.collection('decisions').doc();
    docRef.set({
        image: imageRefs[currentImageIndex].name,
        decision: decision,
        timestamp: new Date()
    });
    nextImage();
}

// Load the next image
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex < imageRefs.length) {
        displayImage();
    } else {
        alert('No more images!');
    }
}

document.getElementById('smash-btn').addEventListener('click', () => handleDecision('smash'));
document.getElementById('pass-btn').addEventListener('click', () => handleDecision('pass'));

// Load images on page load
window.onload = loadImages;

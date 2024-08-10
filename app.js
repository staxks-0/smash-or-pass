const images = [
    'pics/image1.jpg',
    'pics/image2.jpg',
    'pics/image3.jpg',
    // ...
    'pics/image85.jpg'
];

let currentImageIndex = 0;

// Function to display the current image
function displayImage() {
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentImageIndex];
}

// Function to handle decision making
function handleDecision(decision) {
    const image = images[currentImageIndex];
    console.log(`You chose to ${decision} on image ${currentImageIndex + 1}`);

    // Load existing data from local storage
    let decisions = JSON.parse(localStorage.getItem('decisions')) || [];
    
    // Push the new decision to the decisions array
    decisions.push({ image, decision, timestamp: new Date() });
    localStorage.setItem('decisions', JSON.stringify(decisions));
    
    alert('Your decision has been recorded in local storage.');

    nextImage();
}

// Function to load the next image
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex < images.length) {
        displayImage();
    } else {
        alert('No more images!');
    }
}

// Event listeners for buttons
document.getElementById('smash-btn').addEventListener('click', () => handleDecision('smash'));
document.getElementById('pass-btn').addEventListener('click', () => handleDecision('pass'));

// Load the first image when the page loads
window.onload = displayImage;


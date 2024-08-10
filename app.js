const images = [
    'pics/image1.png',
    'pics/image2.png',
    'pics/image3.png',
    'pics/image4.png',
    'pics/image5.png',
    'pics/image6.png',
    'pics/image7.png',
    'pics/image8.png',
    'pics/image9.png',
    'pics/image10.png',
    'pics/image11.png',
    'pics/image12.png',
    'pics/image13.png',
    'pics/image14.png',
    'pics/image15.png',
    'pics/image16.png',
    'pics/image17.png',
    'pics/image18.png',
    'pics/image19.png',
    'pics/image20.png',
    'pics/image21.png',
    'pics/image22.png',
    'pics/image23.png',
    'pics/image24.png',
    'pics/image25.png',
    'pics/image26.png',
    'pics/image27.png',
    'pics/image28.png',
    'pics/image29.png',
    'pics/image30.png',
    'pics/image31.png',
    'pics/image32.png',
    'pics/image33.png',
    'pics/image34.png',
    'pics/image35.png',
    'pics/image36.png',
    'pics/image37.png',
    'pics/image38.png',
    'pics/image39.png',
    'pics/image40.png',
    'pics/image41.png',
    'pics/image42.png',
    'pics/image43.png',
    'pics/image44.png',
    'pics/image45.png',
    'pics/image46.png',
    'pics/image47.png',
    'pics/image48.png',
    'pics/image49.png',
    'pics/image50.png',
    'pics/image51.png',
    'pics/image52.png',
    'pics/image53.png',
    'pics/image54.png',
    'pics/image55.png',
    'pics/image56.png',
    'pics/image57.png',
    'pics/image58.png',
    'pics/image59.png',
    'pics/image60.png',
    'pics/image61.png',
    'pics/image62.png',
    'pics/image63.png',
    'pics/image64.png',
    'pics/image65.png',
    'pics/image66.png',
    'pics/image67.png',
    'pics/image68.png',
    'pics/image69.png',
    'pics/image70.png',
    'pics/image71.png',
    'pics/image72.png',
    'pics/image73.png',
    'pics/image74.png',
    'pics/image75.png',
    'pics/image76.png',
    'pics/image77.png',
    'pics/image78.png',
    'pics/image79.png',
    'pics/image80.png',
    'pics/image81.png',
    'pics/image82.png',
    'pics/image83.png',
    'pics/image84.png',
    'pics/image85.png'
];

let currentImageIndex = 0;

function displayImage() {
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentImageIndex];
}

// Function to get a random image index
function getRandomImageIndex() {
    return Math.floor(Math.random() * images.length);
}

function handleDecision(decision) {
    const image = images[currentImageIndex];
    console.log(`You chose to ${decision} on image ${currentImageIndex + 1}`);

    let decisions = JSON.parse(localStorage.getItem('decisions')) || [];
    decisions.push({ image, decision, timestamp: new Date() });
    localStorage.setItem('decisions', JSON.stringify(decisions));

    currentImageIndex = getRandomImageIndex(); // Get a new random image index
    displayImage();
}

// Event listeners for buttons
document.getElementById('smash-btn').addEventListener('click', () => handleDecision('smash'));
document.getElementById('pass-btn').addEventListener('click', () => handleDecision('pass'));

// Load the first image when the page loads
window.onload = displayImage;


const images = [
    'pics/image1.jpg',
    'pics/image2.jpg',
    'pics/image3.jpg',
    'pics/image4.jpg',
    'pics/image5.jpg',
    'pics/image6.jpg',
    'pics/image7.jpg',
    'pics/image8.jpg',
    'pics/image9.jpg',
    'pics/image10.jpg',
    'pics/image11.jpg',
    'pics/image12.jpg',
    'pics/image13.jpg',
    'pics/image14.jpg',
    'pics/image15.jpg',
    'pics/image16.jpg',
    'pics/image17.jpg',
    'pics/image18.jpg',
    'pics/image19.jpg',
    'pics/image20.jpg',
    'pics/image21.jpg',
    'pics/image22.jpg',
    'pics/image23.jpg',
    'pics/image24.jpg',
    'pics/image25.jpg',
    'pics/image26.jpg',
    'pics/image27.jpg',
    'pics/image28.jpg',
    'pics/image29.jpg',
    'pics/image30.jpg',
    'pics/image31.jpg',
    'pics/image32.jpg',
    'pics/image33.jpg',
    'pics/image34.jpg',
    'pics/image35.jpg',
    'pics/image36.jpg',
    'pics/image37.jpg',
    'pics/image38.jpg',
    'pics/image39.jpg',
    'pics/image40.jpg',
    'pics/image41.jpg',
    'pics/image42.jpg',
    'pics/image43.jpg',
    'pics/image44.jpg',
    'pics/image45.jpg',
    'pics/image46.jpg',
    'pics/image47.jpg',
    'pics/image48.jpg',
    'pics/image49.jpg',
    'pics/image50.jpg',
    'pics/image51.jpg',
    'pics/image52.jpg',
    'pics/image53.jpg',
    'pics/image54.jpg',
    'pics/image55.jpg',
    'pics/image56.jpg',
    'pics/image57.jpg',
    'pics/image58.jpg',
    'pics/image59.jpg',
    'pics/image60.jpg',
    'pics/image61.jpg',
    'pics/image62.jpg',
    'pics/image63.jpg',
    'pics/image64.jpg',
    'pics/image65.jpg',
    'pics/image66.jpg',
    'pics/image67.jpg',
    'pics/image68.jpg',
    'pics/image69.jpg',
    'pics/image70.jpg',
    'pics/image71.jpg',
    'pics/image72.jpg',
    'pics/image73.jpg',
    'pics/image74.jpg',
    'pics/image75.jpg',
    'pics/image76.jpg',
    'pics/image77.jpg',
    'pics/image78.jpg',
    'pics/image79.jpg',
    'pics/image80.jpg',
    'pics/image81.jpg',
    'pics/image82.jpg',
    'pics/image83.jpg',
    'pics/image84.jpg',
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


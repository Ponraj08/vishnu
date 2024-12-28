// JavaScript for Image Viewer
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const closeViewer = document.getElementById('closeViewer');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

const images = document.querySelectorAll('.image-grid img'); // All images
const imagesCate = document.querySelectorAll('.image-grid-categories');
let currentIndex = 0;

// Open Image Viewer
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    viewerImage.src = img.src;
    imageViewer.style.display = 'flex';
  });
});

// Close Image Viewer
closeViewer.addEventListener('click', () => {
  imageViewer.style.display = 'none';
});

// Navigate Images
const updateImage = () => {
  viewerImage.src = images[currentIndex].src;
};

prevImage.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextImage.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});


// Zoom Functionality
let zoomLevel = 1;
viewerImage.addEventListener('click', () => {
  zoomLevel = zoomLevel === 1 ? 2 : 1;
  viewerImage.style.transform = `scale(${zoomLevel})`;
});

// Close Viewer on Outside Click
imageViewer.addEventListener('click', (e) => {
  if (e.target === imageViewer) {
    imageViewer.style.display = 'none';
  }
});
// JavaScript for Upload Modal
const uploadModal = document.getElementById('uploadModal');
const uploadBtn = document.querySelector('.upload-btn'); // Button with class 'upload-btn'
const cancelModalBtn = document.getElementById('cancelModalBtn');
const uploadFileBtn = document.getElementById('uploadFileBtn');

// Open Modal on "Upload Your Work" Button Click
uploadBtn.addEventListener('click', () => {
  uploadModal.style.display = 'flex';
});

// Close Modal on "Cancel" Button Click
cancelModalBtn.addEventListener('click', () => {
  uploadModal.style.display = 'none';
});

// Handle "Upload" Button Click
uploadFileBtn.addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length > 0) {
    alert(`File "${fileInput.files[0].name}" has been uploaded!`);
    uploadModal.style.display = 'none';
  } else {
    alert('Please select a file before uploading.');
  }
});

// Close Modal When Clicking Outside the Modal Content
uploadModal.addEventListener('click', (e) => {
  if (e.target === uploadModal) {
    uploadModal.style.display = 'none';
  }
});
const imageLinks = document.querySelectorAll(".image-link");

// Define the paths to your hover images and original images
const hoverImages = {
  "github-link": "images/github-icon-green.webp",
  "linkedin-link": "images/linkedin-icon-green.webp",
  "mail-link": "images/mail-icon-green.webp",
};

const originalImages = {}; // Object to store original image sources

imageLinks.forEach((link) => {
  const image = link.querySelector("img");
  const originalSrc = image.src; // Get the original source of the image
  originalImages[link.id] = originalSrc; // Store the original source in the object

  const hoverSrc = hoverImages[link.id]; // Get the corresponding hover image path based on the link's id

  link.addEventListener("mouseenter", () => {
    image.src = hoverSrc;
  });

  link.addEventListener("mouseleave", () => {
    // Fade out the image and then restore the original source after the transition
    image.classList.add("fade-out");
    setTimeout(() => {
      image.src = originalImages[link.id]; // Restore the original source of the image
      image.classList.remove("fade-out"); // Remove the fade-out class
    }, 800); // Adjust the delay (in milliseconds) to match the transition duration
  });
});

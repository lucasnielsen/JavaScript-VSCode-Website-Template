const descriptions = ["student", "software developer", "really cool fella"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

const descriptionElement = document.getElementById("description");

function updateDescription() {
  const currentText = descriptions[currentIndex];
  const partialText = currentText.substring(0, charIndex);
  descriptionElement.textContent = `"${partialText}"`;

  if (!isDeleting) {
    charIndex++;
    if (charIndex === currentText.length + 1) {
      setTimeout(() => {
        isDeleting = true;
        updateDescription();
      }, pauseTime);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % descriptions.length;
    }
  }

  setTimeout(updateDescription, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  const cursorSpan = document.createElement("span");
  cursorSpan.className = "cursor";
  cursorSpan.textContent = "|";
  descriptionElement.appendChild(cursorSpan);
  updateDescription();
});

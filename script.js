// ===== SCROLL FUNCTION =====
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// ===== INTRO TEXT =====
const introText = "Welcome to my portfolio";
let i = 0;

// ===== NAME TEXT =====
const nameText = "Jeremy Fernandez";
let j = 0;

// INTRO TYPING
function typeIntro() {
  if (i < introText.length) {
    document.getElementById("intro-text").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 60);
  } else {
    // fade out intro
    setTimeout(() => {
      const intro = document.getElementById("intro");
      intro.classList.add("fade-out");

      setTimeout(() => {
        intro.style.display = "none";

        const main = document.getElementById("main-content");
        main.style.display = "block";
        
        setTimeout(() => {
        main.style.opacity = "1";
        }, 50);

        // start typing name AFTER intro
        typeName();

      }, 1000);
    }, 800);
  }
}

// NAME TYPING
function typeName() {
  if (j < nameText.length) {
    document.getElementById("typing-name").innerHTML += nameText.charAt(j);
    j++;
    setTimeout(typeName, 80);
  }
}

// START EVERYTHING
window.onload = function () {
  typeIntro();
};

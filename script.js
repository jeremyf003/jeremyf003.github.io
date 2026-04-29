function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

const text = "Jeremy Fernandez";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-name").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;

const introText = "Welcome to my portfolio";
let i = 0;

function typeIntro() {
  if (i < introText.length) {
    document.getElementById("intro-text").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 60);
  } else {
    // wait, then fade out
    setTimeout(() => {
      const intro = document.getElementById("intro");
      intro.classList.add("fade-out");

      // after fade, remove intro and show site
      setTimeout(() => {
        intro.style.display = "none";
        document.getElementById("main-content").style.display = "block";
      }, 1000);
    }, 800);
  }
}

window.onload = typeIntro;

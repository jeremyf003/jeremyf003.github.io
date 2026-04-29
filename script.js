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

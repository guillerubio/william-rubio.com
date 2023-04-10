const profession = document.querySelector(".profession");
const boldText = document.querySelector(".bold");

let isAnimating = false;

function animateText() {
  if (!isAnimating) {
    isAnimating = true;
    const words = boldText.innerHTML.split(" ");
    const targetWord = words[words.length - 1];
    const targetWordLength = targetWord.length;
    boldText.innerHTML = boldText.innerHTML.replace(
      targetWord,
      `<span class="animated">${targetWord}</span>`
    );
    const animatedWord = document.querySelector(".animated");
    const widthPerLetter = (100 / targetWordLength).toFixed(2);
    let currentWidth = 0;
    let currentIndex = 0;
    let interval = setInterval(() => {
      if (currentIndex < targetWordLength) {
        currentWidth += parseFloat(widthPerLetter);
        animatedWord.style.width = currentWidth + "%";
        currentIndex++;
      } else {
        clearInterval(interval);
        isAnimating = false;
      }
    }, 50);
  }
}

boldText.addEventListener("mouseenter", animateText);

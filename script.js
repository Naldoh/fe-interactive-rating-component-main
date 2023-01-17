const homePage = document.querySelector(".home")
const thanksPage = document.querySelector(".thanks")
const submitButton = document.getElementById("submit")
const homeButton = document.getElementById("home")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rate")


submitButton.addEventListener("click", () => {
  thanksPage.classList.remove("page2")
  homePage.style.display = "none"
})

homeButton.addEventListener("click", () => {
  thanksPage.classList.add("page2")
  homePage.style.display = "block"
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})
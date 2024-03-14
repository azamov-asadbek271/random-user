const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

 const localStorageDark = localStorage.getItem("mode")

let toggleBtn = () => {
    body.classList.toggle("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");

}
 if (localStorageDark) {
   toggleBtn();
 
 }
darkBtn.addEventListener("click", () => {
    toggleBtn();
    localStorage.setItem("mode","dark-mode")
})
lightBtn.addEventListener("click", () => {
    toggleBtn()
    localStorage.setItem("mode", "");
    

})


// api
const API = 'https://randomuser.me/api/?results=19'

// for leader
const overlay = document.getElementById('overlay')


// overlay
function overlayTime (toggle) {
    if(toggle) {
        overlay.classList.remove("hidden")
    }
    else {
        overlay.classList.add("hidden")
    }
}

function getDate  (resurese) {
  return new Promise ((resolve,reject) => {
   const req = new XMLHttpRequest();
   req.addEventListener("readystatechange", () => {
     if(req.readyState !== 4) {
        overlayTime(true)
     } else if(req.readyState == 4 && req.status == 200) {
        const data = JSON.parse(req.responseText)
         resolve(data.results)
        overlayTime(false)
        
      } else if (req.readyState == 4) {
        reject("eror!!")
        overlayTime(false);

      }

   });
   req.open("GET",resurese)
   req.send()
     
  })
}
let loady = () => {
getDate(API).then((data) => {
    UpDataUi(data)
})
    
}
document.addEventListener("DOMContentLoaded", loady)


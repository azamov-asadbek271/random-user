const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");
const template = document.querySelector(".template");
const useItem = document.querySelector(".user__item");
// refresh
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  loady();
  clearBtn.classList.remove("hidden");
  // ustoz template qoshganim uchun shu joyini togrlab bolmadi pasiga boshqatan qoshib ketyapti yangi malumot olmasdan
});
// cleaer
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// search
form["form__input"].addEventListener("input", () => {
  let inputValue = form["form__input"].value.toLowerCase();
  let userName = document.querySelectorAll(".user__name");
  userName.forEach((item) => {
    console.log(item);

    if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

const UpDataUi = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    let clone = template.content.cloneNode(true);
    const userGender = clone.querySelector(".user__gender");

    // spanlar
    let span = document.createElement("span");
    let spanFrist = document.createElement("span");
    let spanLast = document.createElement("span");
    let spanCity = document.createElement("span");
    let spanCountry = document.createElement("span");

    // taglar
    let img = clone.querySelector(".user__img");
    let NameT = clone.querySelector(".nameT");
    let year = clone.querySelector(".year");
    let location = clone.querySelector(".location");
    let gender = clone.querySelector(".gender");
    // img
    img.src = item.picture.large;
    // name
    span.textContent = item.name.title;
    spanFrist.textContent = item.name.first;
    spanLast.textContent = item.name.last;

    NameT.appendChild(span);
    NameT.appendChild(spanFrist);
    NameT.appendChild(spanLast);
    // buni ham ochib korin bir biriga yopishib qoldi
    //    NameT.textContent = item.name.title
    //    NameT.textContent += item.name.first;
    //    NameT.textContent += item.name.last;
    // year
    year.textContent = item.dob.age;

    // location
    spanCity.textContent = item.location.city;
    spanCountry.textContent = item.location.country;
    // location.textContent = item.location.city;
    // location.textContent += item.location.country;
    location.appendChild(spanCity);
    location.appendChild(spanCountry);
    // gender
    // faqat erkaklar shartini qoshdim ustoz
    gender.textContent = item.gender;
    if (userGender.lastElementChild.textContent !== "male") {
      userGender.parentElement.classList.add("hidden");
    }

    user.appendChild(clone);
  });
};
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList[0] === "user__delete--btn") {
    e.target.parentElement.remove();
  }
});

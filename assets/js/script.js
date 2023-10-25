// html'deki elementleri deyisenlere teyin edirik
const table = document.querySelector(".user-data-table");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const isMarriedInput = document.querySelectorAll(".isMarried");
const btn = document.querySelector("#btn");

//buton'a click etdikde yerine yetirilecek funksiyani yazilmasi
btn.addEventListener("click", (event) => {
  event.preventDefault(); //Formdaki button click etdikde refresh etmesinin qarsini alir

  if (
    firstNameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    ageInput.value.trim() === "" ||
    (!isMarriedInput[0].checked && !isMarriedInput[1].checked) ||
    ageInput.value < 0
  ) {
    alert("Duzgun daxil edin");
    return;
  } // yanlish ve ya bosh daxil etdikde alert verir ve yeni istifadeci yaratmir


  //html elementlerini yaradib deyisenler menimsedirik
  const tr = document.createElement("tr");
  const firstName = document.createElement("td");
  const lastName = document.createElement("td");
  const age = document.createElement("td");
  const isMarried = document.createElement("td");

  //input'larin deyerlerini elementlere menimsedilmesi
  firstName.textContent = firstNameInput.value;
  lastName.textContent = lastNameInput.value;
  age.textContent = ageInput.value;

  //married elementinin secilmesine gore true false qiymeti qaytarir
  for (let i = 0; i < isMarriedInput.length; i++) {
    if (isMarriedInput[i].checked) {
      isMarried.textContent = isMarriedInput[i].value;
      isMarriedInput[i].checked = false;
    }
  }

  //tr'ye ve table'a child'larinin elave edilmesi
  tr.append(firstName, lastName, age, isMarried);
  table.append(tr);

  //yeni user yaradildiqdan sonra input deyerlerinin sifirlanmasi
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
  isMarriedInput.value = "";
});

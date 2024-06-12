"use strict";
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let isMarimed = document.getElementById("isMarimed");
let job = document.getElementById("job");
let from = document.getElementById("from");
let btnAdd = document.getElementById("btnAdd");
let template = document.querySelector(".template");
let ulGlobalList = document.querySelector("#list");
let usersArr = []; //
btnAdd.addEventListener("click", () => {
    let objUser = {
        userName: firstName.value,
        userLastName: lastName.value,
        userAge: Number(age.value),
        userFrom: from.value,
        userJob: job.value,
    };
    usersArr.push(objUser);
    ulGlobalList.innerHTML = "";
    usersArr.forEach((item) => {
        let userItem = document.createElement("div");
        userItem.innerHTML = `<div
    class="card w-96 bg-base-100 shadow-xl flex-row  gap-5"
  >
  <div>
    <img class=" w-40 h-52" src="../public/images.png"/>
    </div> 
    <div class="card-body p-5 flex items-start justify-start flex-col">
      <h2 class="card-title capitalize  text-lg font-normal flex ">First name: <span class=" text-cyan-600 text-xl ">${item.userName}</span></h2>
      <h2 class="card-title capitalize  text-lg font-normal flex ">Last name: <span class=" text-cyan-600 text-xl ">${item.userLastName}</span></h2>
      <h2 class="card-title capitalize  text-lg font-normal flex ">Age: <span class=" text-cyan-600 text-xl ">${item.userAge}</span></h2>
      <h2 class="card-title capitalize  text-lg font-normal flex ">From: <span class=" text-cyan-600 text-xl ">${item.userFrom}</span></h2>
      <h2 class="card-title capitalize  text-lg font-normal flex ">Job: <span class=" text-cyan-600 text-xl ">${item.userJob}</span></h2>
    </div>
  </div>`;
        ulGlobalList.appendChild(userItem);
    });
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    from.value = "";
    job.value = "";
    isMarimed.value = "";
});

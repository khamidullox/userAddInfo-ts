let firstName = document.getElementById("firstName") as HTMLInputElement;
let lastName = document.getElementById("lastName") as HTMLInputElement;
let age = document.getElementById("age") as HTMLInputElement;
let isMarimed = document.getElementById("isMarimed") as HTMLInputElement;
let job = document.getElementById("job") as HTMLInputElement;
let from = document.getElementById("from") as HTMLInputElement;
let btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
let template = document.querySelector(".template") as HTMLTemplateElement;
let ulGlobalList = document.querySelector("#list") as HTMLDivElement;
type userData = {
  userName: string;
  userLastName: string;
  userAge: number;
  userFrom: string;
  userJob: string;
};
let usersArr: userData[] = []; //

btnAdd.addEventListener("click", () => {
  let objUser: userData = {
    userName: firstName.value,
    userLastName: lastName.value,
    userAge: Number(age.value),
    userFrom: from.value,
    userJob: job.value,
  };

  usersArr.push(objUser);
  ulGlobalList.innerHTML = "";
  usersArr.forEach((item: userData) => {
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

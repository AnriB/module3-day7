async function loadUsers(){
let response= await fetch("https://jsonplaceholder.typicode.com/users",{
    "method": "GET",
})

let users= await response.json();
return users;
}


async function createUserCards(){
let userObjs = await loadUsers();
console.log(userObjs);
let wrapper = document.querySelector(".row");
userObjs.forEach(userObj=>
    {
        let userCard= document.createElement("div");
        userCard.className="col-lg-3 col-md-6 col-sm-12 mt-4";
        userCard.innerHTML= `<div class="card" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title">${userObj.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${userObj.username}</h6>
          <p class="card-text">${userObj.email}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`

      wrapper.appendChild(userCard);
    })
}
createUserCards();
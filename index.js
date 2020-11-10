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
        userCard.className="col-lg-3 col-md-6 col-sm-12 mt-4 user";
        userCard.innerHTML= `<div class="card" style="width: 16rem;">
        <div class="card-body">
        <a href="detail.html?id=${userObj.name}|${userObj.username}|${userObj.email}" style="color: black; text-decoration: none">
        <h5 class="card-title">${userObj.name}</h5></a>
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


async function getName() {
    let userObjects = await loadUsers();
    userObjects.forEach(userObject => {
        console.log(userObject.name)
    })
}

// EX-4

async function getAddress() {
    let userObjects = await loadUsers();
    userObjects.forEach(userObject => {
        let address = userObject.address;
        console.log(address.street + ', ' + address.suite + ', ' + address.city + " '" + address.zipcode + "'")
    })
}

async function sortCards() {
    let cards = document.querySelectorAll(".user");

    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }

    let userObjs = await loadUsers();
    console.log(userObjs.sort(function(a,b){
        let textA = a.username;
        let textB = b.username;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }))


    let wrapper = document.querySelector(".row");
    userObjs.forEach(userObj=>
    {
        let userCard= document.createElement("div");
        userCard.className="col-lg-3 col-md-6 col-sm-12 mt-4";
        userCard.innerHTML= `<div class="card" style="width: 16rem;">
        <div class="card-body">
        <a href="detail.html?id=${userObj.name}|${userObj.username}|${userObj.email}" style="color: black; text-decoration: none">
        <h5 class="card-title">${userObj.name}</h5></a>
          <h6 class="card-subtitle mb-2 text-muted">${userObj.username}</h6>
          <p class="card-text">${userObj.email}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
      wrapper.appendChild(userCard);
    })
}
 /* document.getElementById("buttonSearch").addEventListener("click", function(event){
    event.preventDefault()
  });*/
  document.getElementById("select").addEventListener("change", function(event){
    event.preventDefault()
    console.log(event.target.value);
  });



  async function search(input){
    let obj = await loadUsers();
    return Object.keys(obj).filter(key => {
      return obj[key].name.includes(input)
    })
    .map(foundKey => ({...obj[foundKey], key: foundKey }))
  }



  document.getElementById("search").addEventListener("change", function(event){
    event.preventDefault()
    let inputSearch= event.target.value;
  });
  
 document.getElementById("buttonSearch").addEventListener("click", async function getFilteredUser(event){
    event.preventDefault()
      let input = document.getElementById("search").value;
      const result = search(input);
      console.log(result);
}
);

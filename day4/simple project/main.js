import users from './data.js';
renderUi(users)

function renderUi(users){
    const row=document.querySelector("#row");
    users.forEach(element => {
        const div=document.createElement("div");
        div.className="col-11 col-lg-3 col-md-3  mt-3"
        div.classList.add("Div");

    const img=document.createElement("img");
    img.setAttribute("src" , `${element.image}`)
    div.appendChild(img)

    const div2=document.createElement("div");
    div2.className="col-12";
    div2.classList.add("info");
    div.appendChild(div2);
    // Data
    const h1=document.createElement("h2");
    h1.classList.add("Name");
    h1.textContent=`${element.name}`
    div2.appendChild(h1)
    
    const followers=document.createElement("small");
    followers.classList.add("fol");
    followers.textContent=`Followers: ${element.followers}`;
    div2.appendChild(followers);

    const Bio= document.createElement("p");
    Bio.classList.add("Bio");
    Bio.textContent=`${element.bio}`
    div2.appendChild(Bio);

    const button=document.createElement("button");
    button.classList.add("btn");
    button.className="btn";
    button.textContent="Follow"

    div2.appendChild(button);
    row.appendChild(div)
     button.addEventListener("click", () => {
    element.followers++;
    followers.textContent = `Followers: ${element.followers}`;
});

   
    });
    
}


renderUi(users)


//  <div class="col-11 col-lg-3 col-md-3  mt-3 Div">
//                 <img src="https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
//                 <div class="info col-12">
//                     <h2 class="Name">Name</h2>
//                     <small class="fol">Followers</small>
//                     <p class="Bio">Bio</p>
//                     <button class="btn">Follow</button>
//                 </div>
//             </div> 
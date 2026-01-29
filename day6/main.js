const url = "https://randomuser.me/api/?results=5"; 
fetch(url)
  .then(response => response.json())
  .then(data => {
    handleUser(data);
  })
  .catch(error => console.error("Error:", error));



const container=document.querySelector("#users-container")
function handleUser(data) {
  data.results.forEach(user=> {
     const cardCol = document.createElement("div")
      cardCol.className = "col-12 col-sm-8 col-md-4 p-3 card_div";

      // Fill the card with user data
      cardCol.innerHTML = `
        <div class="card h-100">
          <img 
            src="${user.picture.large}" 
            class="card-img-top rounded" 
            alt="User Image"
          >
          <div class="card-body text-center text-md-start">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>

            <div class="row  p-2 mb-2">
              <div class="col-5">
                <span>${user.gender}</span>
              </div>
              <div class="col-6">
                <span>${user.phone}</span>
              </div>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="status-${user.login.uuid}" id="radio-${user.login.uuid}" value="Active" disabled>
              <label class="form-check-label" for="radio-${user.login.uuid}">
                Active
              </label>
            </div>
          </div>
        </div>
      `;

      container.appendChild(cardCol);
    });
  };




const mangerCard = (manager) => {
    var card =
    `
    <div class="card text-black bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body">
    <h5 class="card-title" id="name">${manager.name}</h5>
    <p class="card-text" id= "id"> Email: <a href="mailto:erumdhukka531@gmail.com"> ${manager.id} </a> </p>
    <p class="card-text" id= "email"> ID:${manager.email} </p>
    <p class="card-text" id= "officeNumber"> Office Number: ${manager.officeNumber} </p>
    </div>
  </div>
    `
return card
}
module.exports = mangerCard


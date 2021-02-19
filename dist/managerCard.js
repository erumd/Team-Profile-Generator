const mangerCard = (manager) => {
    return `
    <div class="card text-black bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Manager</div>
    <div class="card-body">
    <h5 class="card-title" id="name">${manager.getName()}</h5>
    <p class="card-text" id= "id"> Email: <a href="mailto:erumdhukka531@gmail.com"> ${manager.getId()} </a> </p>
    <p class="card-text" id= "email"> ID:${manager.getEmail()} </p>
    <p class="card-text" id= "officeNumber"> Office Number: ${manager.getOfficeNumber()} </p>
    </div>
  </div>
    `
}
module.exports = mangerCard


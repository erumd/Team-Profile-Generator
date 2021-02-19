const internCard = (intern) => {
  var card = `
    <div class="card text-black g-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text" id= "id"> ID: ${intern.id} </p>
            <p class="card-text" id= "email"> Email: <a href="mailto:erumdhukka531@gmail.com"> ${intern.email} </a> </p>
            <p class="card-text" id = "school"> School: ${intern.school} </p>
        </div>
    </div>
    `;
  return card;
};
module.exports = internCard;

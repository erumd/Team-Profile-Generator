const engineerCard = (engineer) => {
  var card = `
<div class="card text-black bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Engineer</div>
    <div class="card-body">
        <h5 class="card-title" id="name"> ${engineer.name}</h5>
        <p class="card-text" id= "id"> ID: ${engineer.id}  </p>
        <p class="card-text" id= "email"> Email: <a href="mailto:erumdhukka531@gmail.com"> ${engineer.email} </a> </p>
        <p class="card-text" id="github"> GitHub Name: <a href= "https://github.com/${engineer.github}" </"a> </p>
    </div>
 </div>
`;
  return card;
};
module.exports = engineerCard;

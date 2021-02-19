const engineerCard = (engineer) => {
  return `
<div class="card text-black bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Engineer</div>
    <div class="card-body">
        <h5 class="card-title" id="name"> ${engineer.getName()}</h5>
        <p class="card-text" id= "id"> ID: ${engineer.getId()}  </p>
        <p class="card-text" id= "email"> Email: <a href="mailto:erumdhukka531@gmail.com"> ${engineer.getEmail()} </a> </p>
        <p class="card-text" id="github"> GitHub Name: <a href='https://github.com/'> ${engineer.getGithub()} </a> </p>
    </div>
 </div>
`;
};
module.exports = engineerCard;

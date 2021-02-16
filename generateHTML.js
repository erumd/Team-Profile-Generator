//create a function to return manager questions

//create a function to return engineer questions

//create a function to return intern questions

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator </title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  </head>
  <body>
  
      <nav class="navbar navbar-dark bg-danger">
          <a class="navbar-brand" href="/">Team Profile Generator 
          </a>
        </nav>
  
      <h2></h2>
      <div class= "container">

          <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">Engineer</div>
              <div class="card-body">
                <h5 class="card-title" id="name"> ${data[1].name}</h5>
                <p class="card-text" id= "id"> ${data[1].id}  </p>
                <p class="card-text" id= "email"> ${data[1].email}</p>
                <p class="card-text" id="github"><a href= "https://github.com/${data[1].github}"> </p>

  
              </div>
            </div>
  
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">Manager</div>
              <div class="card-body">
              <h5 class="card-title" id="name">${data[0].name}</h5>
              <p class="card-text" id= "id"> ${data[0].id} </p>
              <p class="card-text" id= "email">${data[0].email} </p>
              <p class="card-text" id= "officeNumber"> ${data[0].officeNumber} </p>

              </div>
            </div>
  
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">Intern</div>
              <div class="card-body">
                <h5 class="card-title">${data[2].name}</h5>
                <p class="card-text" id= "id"> ${data[2].id} </p>
                <p class="card-text" id= "email">${data[2].email} </p>
                <p class="card-text" id = "school"> ${data[2].school} </p>
              </div>
            </div>
  
      </div>
      
  </body>
  </html>
  `;
}

module.exports = generateHTML;

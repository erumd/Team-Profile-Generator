const HTMLTemplate = (data) => `

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
              <h5 class="card-title" id="name"> ${data[1].name} </h5>
              <p class="card-text" id= "id"> ${data[1].id} </p>
              <p class="card-text" id= "email"><a href="mailto:erumdhukka531@gmail.com">${data[1].email}</a></p>
              <p class="card-text" id= "github> https://github.com/${data[1].github} </p>

            </div>
          </div>

          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Manager</div>
            <div class="card-body">
              <h5 class="card-title" id="name" >${data[0].name}</h5>
              <p class="card-text" id= "id">  <a href="mailto:erumdhukka531@gmail.com"> ${data[0].id} </a> </p>
              <p class="card-text" id= "email"><a href="${data[0].email}"> </p>
              <p class="card-text" id= "officeNumber"> ${data[0].officeNumber}  </p>
            </div>
          </div>

          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Intern</div>
            <div class="card-body">
              <h5 class="card-title">${data[2].name}</h5>
              <p class="card-text" id= "id"> ${data[2].id} </p>
              <p class="card-text" id= "email"><a href="mailto:erumdhukka531@gmail.com"> ${data[2].email}"></a> </p>
              <p class="card-text" id = "school"> ${data[2].school} </p>
            </div>
          </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
</body>
</html>
`;

module.export = HTMLTemplate;

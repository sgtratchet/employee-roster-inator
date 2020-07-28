const generateEmployee = employee =>{
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Roster Inator</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Team</h1>
        </div>
      </header>

    <main class="container">
    
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class= 'card-img-top'>
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}" class="card-link">Email: ${email}</a></li>
                <li class="list-group-item">${role}</li>
            </ul>
            
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    
      </div>
    </section>
  
      </main>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>`
}
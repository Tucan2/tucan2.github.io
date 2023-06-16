const template = document.createElement('template');

template.innerHTML = `
  <header id="site-header"> 
    <img id="headerimg" src="/images/library.jpg" height="125px" width="250">
    <a id="website-title" href="https://newarklibraryleague.tucanzoom.repl.co"> Newark Library League </a>
    
    <section id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light pt-5 pb-5" style="background-color: white">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul id="nav-list" class="navbar-nav">                  
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="programs.html">Programs</a>
              </li>
    
              <li class="nav-item">
                <a class="nav-link" href="volunteer.html">Volunteer</a>
              </li>
    
              <li class="nav-item">
                <a class="nav-link" href="donate.html">Donate</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
   </section>
  </header>
`;

document.body.appendChild(template.content);
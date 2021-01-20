const elementPortfolio = document.getElementById("projects");

elementPortfolio.addEventListener("click", portfolioZoom);

// Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  // Used to hide or show the accordion content
  function toggleAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function portfolioZoom(event) {
    let parent = event.target.parentElement;
    if(parent.classList.contains("card"))
    {
      document.getElementById("img01").src = parent.children[0].src;
      document.getElementById("modal01").style.display = "block";
      var title = document.getElementById("title");
      var paragraf1 = document.getElementById("paragraf1");
      var paragraf2 = document.getElementById("paragraf2");
      var repo = document.getElementById("repo");
      var json = loadJSON("projects/" + parent.id +".json");
      title.innerHTML = json.title;
      paragraf1.innerHTML = json.paragraf1;
      paragraf2.innerHTML = json.paragraf2;
      repo.setAttribute("href",json.repo);
    }
  }

  function loadJSON(jsonPath) {
    return JSON.parse(loadFile(jsonPath));
  }

  function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
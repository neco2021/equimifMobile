const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


function openPlace(OficinaName) {
    var i;
    var x = document.getElementsByClassName("Oficina");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(OficinaName).style.display = "block";  
  }








  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




  
// function OpenEmpresa() {
//   var x = document.getElementById("Demo");
//   if (x.className.indexOf("w3-show") == -1) { 
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }


// function OpenServicios() {
//   var x = document.getElementById("serv");
//   if (x.className.indexOf("w3-show") == -1) { 
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

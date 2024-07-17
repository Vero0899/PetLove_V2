// Función para hacer scroll hacia arriba
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var footerPosition = document.querySelector('footer').getBoundingClientRect().top + window.scrollY;
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollPosition > footerPosition - window.innerHeight) {
      scrollToTopBtn.style.display = 'block';
  } else {
      scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}


/* validaciones*/
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const rut = document.getElementById("rut")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombre.value.length <4){
        warnings += `El nombre es muy corto <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña es muy corta <br>`
        entrar = true
    }
    if(!regexRut.test(rut.value)){
        warnings += `El rut no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
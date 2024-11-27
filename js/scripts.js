
function reserva() {
    let message = "Hola, botón de reserva";
    alert(message);
    console.log(message);
}

function sendForm(){
    let message = "Hola, se está enviando un formulario";
    alert(message);
    console.log(message);
    let nombre = window.prompt("¿Cuál es tu nombre?")
    console.log("tu nombre es : "+ nombre);
    alert("tu nombre es : "+ nombre);

    let email = window.prompt("¿Cuál es tu email?")
    while(!validarEmail(email))
        email = window.prompt("Escribe tu email en un formato correcto example@example.com")
    console.log("tu email es : "+ email);
    alert("tu email es : "+ email);

    let telefono = window.prompt("¿Cuál es tu teléfono?")
    while(!/^([0-9])*$/.test(telefono))
        telefono = window.prompt("Escribe tu teléfono sólo con números")
    console.log("tu teléfono es : "+ telefono);
    alert("tu teléfono es : "+ telefono);
}

function logo(){
    let message = "Hola, este es el logo. En condiciones normales llevaría al home, pero ahora enviaré un alert y un console.log() con este mensaje";
    alert(message);
    console.log(message);       
}


function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


async function getData(input) {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      document.getElementById("doctors").innerHTML = '';
      const doctors = await response.json();
      const clones =  Object.values({ ...doctors });
      entrada = null;

      if(input){
         entrada = clones.sort((a, b) => (a.name > b.name ? 1 : -1));;
      }else{
         entrada = doctors;
      }
      
      texto = "";
      entrada.forEach(doctor => {
        texto += `
        <div class="col">
        <div class="card shadow-sm">
          <img class="img-fluid" src="https://picsum.photos/id/`+doctor.id+`/200/300" alt="Equipo 3" height="225">
          <div class="card-body">
            <p class="card-text">`+doctor.name+`</p>
            <p class="card-text">`+doctor.address.city+`</p>
            <p class="card-text">Años de experiencia: `+doctor.id+`</p>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae nulla necessitatibus repellendus officia reiciendis delectus nisi doloremque ab. Nobis veniam non saepe necessitatibus quaerat aut consequatur ipsa nihil commodi.</p>
          </div>
        </div>
        </div>`;
      });
      console.log(entrada);
      document.getElementById("doctors").innerHTML = texto;
    } catch (error) {
      console.error(error.message);
    }
  }

getData(false);
localStorage.setItem('last', "false");

function order(){
    last = localStorage.getItem("last");    
    if(last == "false"){
        localStorage.setItem('last', "true");
        getData(true);
    }else{
        localStorage.setItem('last', "false");
        getData(false);
    }
}



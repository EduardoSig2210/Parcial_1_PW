function cambiarVista(){
      let siteBody = document.querySelector(".sitebody");
    if (siteBody.style.display == "flex") {
        siteBody.style.display = "block"; // Pasa a columnas
    } else {
        siteBody.style.display = "flex"; // vuelve a filas
    }
}

function changeTitle() {
    let title = document.querySelector('.bodyTitle');
    const textito = title.textContent;
    
    if (textito == "Ejercicio practico-Programacion Web") {
        title.innerText = "HTML & CSS: Curso práctico avanzado";
        document.title = "HTML & CSS: Curso práctico avanzado"; // <- cambia también la pestaña
    } else {
        title.innerText = "Ejercicio practico-Programacion Web";
        document.title = "Ejercicio practico-Programacion Web";
    }
}

function cambiarAparencia() {
  let ciudad = document.querySelectorAll(".London", '.Paris', '.Tokyo');
  let ciudad2 = document.querySelectorAll('.Paris');
  let ciudad3 = document.querySelectorAll('.Tokyo');
  let parrafo = document.querySelectorAll(".parrafo");

  for (let i = 0; i < ciudad.length; i++) {
    if (ciudad[i].style.color == "black") {
      ciudad[i].style.color = "blue";
    } else {
      ciudad[i].style.color = "black";
    }
  }
  for (let i = 0; i < ciudad2.length; i++) {
    if (ciudad2[i].style.color == "black") {
      ciudad2[i].style.color = "green";
    } else {
      ciudad2[i].style.color = "black";
    }
  }
  for (let i = 0; i < ciudad3.length; i++) {
    if (ciudad3[i].style.color == "black") {
      ciudad3[i].style.color = "gray";
    } else {
      ciudad3[i].style.color = "black";
    }
  }

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.fontFamily = 'Times New Roman';
}
}

function agregarImagen(urlDeLaImagen) {
  const footer = document.querySelector('footer');
  if (!footer) {
    console.error("Error: No se encontró la etiqueta <footer> en el documento.");
    return;
  }
  const nuevaImagen = document.createElement('img');

  nuevaImagen.src = urlDeLaImagen;

  nuevaImagen.alt = "Descripción de la imagen";

  nuevaImagen.classList.add('imagen-footer');

  footer.appendChild(nuevaImagen);
}
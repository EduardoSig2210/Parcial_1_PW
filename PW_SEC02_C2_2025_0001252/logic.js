function changeView(){
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
    
    if (textito == "University Demo") {
        title.innerText = "HTML & CSS: Curso práctico avanzado";
        document.title = "HTML & CSS: Curso práctico avanzado"; // <- cambia también la pestaña
    } else {
        title.innerText = "University Demo";
        document.title = "Ejercicio practico";
    }
}

function changeAppearance() {
  let city = document.querySelectorAll(".London", '.Paris', '.Tokyo');
  let city2 = document.querySelectorAll('.Paris');
  let city3 = document.querySelectorAll('.Tokyo');
  let Parrgraph = document.querySelectorAll(".Parrgraph");

  for (let i = 0; i < city.length; i++) {
    if (city[i].style.color == "black") {
      city[i].style.color = "blue";
    } else {
      city[i].style.color = "black";
    }
  }
  for (let i = 0; i < city2.length; i++) {
    if (city2[i].style.color == "black") {
      city2[i].style.color = "green";
    } else {
      city2[i].style.color = "black";
    }
  }
  for (let i = 0; i < city3.length; i++) {
    if (city3[i].style.color == "black") {
      city3[i].style.color = "gray";
    } else {
      city3[i].style.color = "black";
    }
  }

  for (let i = 0; i < Parrgraph.length; i++) {
    Parrgraph[i].style.fontFamily = 'Times New Roman';
}
}

function AddImage(urlDeLaImagen) {
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
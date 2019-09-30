document.addEventListener('DOMContentLoaded', () => {
  const collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible, {});
  const sidenavItem = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavItem, {});
});

function showParticipants(p){
  let participantes = "";

  p.forEach(participante => {
    participantes += `<li class="collection-item">${participante}</li>`
  })

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <ul class="collection">
      ${participantes}
    </ul>
  `
  swal({
    content: wrapper
  })
}

function showImages(cantidad, proyecto){

  let imagenes = "";

  for(let i = 1; i <= cantidad; i++){
    imagenes += `
      <img src="${proyecto}/images/image-${i}.jpeg" id="image-${i}-${proyecto}" alt="Imagen de ${proyecto} numero ${i}" class="image responsive-img"/>
    `
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div className="gallery">
      ${imagenes}
    </div>
  `;

  swal({
    content: wrapper
  })

  for(let i = 1; i <= cantidad; i++){
    document.querySelector(`#image-${i}-${proyecto}`).addEventListener("click", e => {

      const image = e.srcElement.attributes.src.value;

      const content = document.createElement("img");
      content.src = image;
      content.alt = `image-${i}-${proyecto}`;
      content.classList = ["responsive-img"];


      swal({ content, button: "Atras" }).then(() => swal({ content: wrapper }));

    });
  }

}

const pBicis = [
  "Ariel Aggio", "Agustin Almada",
  "Avril Buffa", "Luciano Coronel", 
  "Luciana Fernandez", "Matilda Garijo",
  "Candela Gomez", "Ivan Ibarra",
  "Luna Kies", "Nahuel Martinez",
  "Federico Minaya", "Valentina Volpe",
]

const pBanco = [
  "Camila Esquivel", "Valentina Lloret",
  "Martina Lopez", "Patricio Miranda",
  "Valentina Navarro", "Pilar Octtinger",
  "Selene Sierra", "Agustin Vega",
  "Santino Volpe" 
]

document.querySelector("#bici-p").addEventListener("click", () => showParticipants(pBicis));

document.querySelector("#bici-ps").addEventListener("click", () => showParticipants(pBicis));

document.querySelector("#bici-g").addEventListener("click", () => showImages(18, "bicis"))
document.querySelector("#bici-gs").addEventListener("click", () => showImages(18, "bicis"))

document.querySelector("#banco-p").addEventListener("click", () => showParticipants(pBanco))

document.querySelector("#banco-ps").addEventListener("click", () => showParticipants(pBanco))

document.addEventListener('DOMContentLoaded', () => {
  const collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible, {});
  const sidenavItem = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavItem, {});
});

document.querySelector("#bici-p").addEventListener("click", () => {

  const p = [
    "Ariel Aggio", "Agustin Almada",
    "Avril Buffa", "Luciano Coronel", 
    "Luciana Fernandez", "Matilda Garijo",
    "Candela Gomez", "Ivan Ibarra",
    "Luna Kies", "Nahuel Martinez",
    "Federico Minaya", "Valentina Volpe",
  ]

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
  console.log(wrapper.innerHTML);

  swal({
    content: wrapper
  })
})

document.querySelector("#banco-p").addEventListener("click", () => {

  const p = [
    "Camila Esquivel", "Valentina Lloret",
    "Martina Lopez", "Patricio Miranda",
    "Valentina Navarro", "Pilar Octtinger",
    "Selene Sierra", "Agustin Vega",
    "Santino Volpe" 
  ]

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
  console.log(wrapper.innerHTML);

  swal({
    content: wrapper
  })
})
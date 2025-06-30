import countdown from "../../view/countdown.js";
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector(".app__title");
const html = document.querySelector("html");

function changeContext(context) {
  countdown(context);
  html.setAttribute("data-contexto", context);
  // adiciona o atributo data-contexto ao html para mudar a cor do background
  banner.setAttribute("src", `./imagens/${context}.png`);

  banner.classList.add("active");
  appTitle.classList.add("active");
  // adiciona a classe active para a imagem e o titulo

  setTimeout(() => {
    banner.classList.remove("active");
    appTitle.classList.remove("active");
    // remove a classe active para a imagem e o titulo apos 300ms
  }, 300);

  if (context === "longo") {
    appTitle.innerHTML = `
                Hora de voltar a superfície,<br>
                 <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `;
  } else if (context === "curto") {
    appTitle.innerHTML = `
                Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
  } else {
    appTitle.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
    `;
  }
}
export default changeContext;

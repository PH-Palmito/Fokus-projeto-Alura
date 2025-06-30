import sotrage from "../partial/localStorage.js";
import creadeElements from "../partial/CreateELements.js";

const taskList = document.querySelector(".app__section-task-list");
const paragraphDescription = document.querySelector(
  ".app__section-active-task-description"
);

function creadeElementsTask(description) {
  const li = new creadeElements("li", "", "app__section-task-list-item");

  li.on("click", () => {
    paragraphDescription.textContent = description;
    taskList.querySelectorAll("li").forEach((li) => {
      console.log(li);
      if (li.classList.contains("app__section-task-list-item-active")) {
        li.classList.remove("app__section-task-list-item-active");
      }
    });
    li.el.classList.add("app__section-task-list-item-active");
  });
  const svg = new creadeElements("svg", "", "");
  const svgContainer = new creadeElements(
    "svg",
    "",
    "app__section-task-icon-status"
  );
  const circle = new creadeElements("circle", "", "");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "12");
  circle.setAttribute("fill", "#E2E8F0");

  const path = new creadeElements("path", "", "");
  path.setAttribute(
    "d",
    "M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
  );
  path.setAttribute("fill", "#01080E");

  const p = new creadeElements(
    "p",
    description,
    "app__section-task-list-item-description"
  );
  p.el.style = "cursor: pointer";
  const btn = new creadeElements("button", "", "app_button-edit");
  btn.setAttribute("type", "button");
  btn.setAttribute("title", "Editar tarefa");
  btn.on("click", (event) => {
    event.preventDefault();

    // Abre o prompt com a descrição atual já preenchida para o usuário editar
    const newDescription = prompt("Editar tarefa");

    // Se o usuário cancelar ou deixar em branco, avisa e não continua
    if (newDescription === null || newDescription.trim() === "") {
      alert("Descrição inválida, a tarefa não foi editada.");
      return;
    } else {
      p.el.textContent = newDescription;

      // Busca a lista de tarefas atual no localStorage
      const tasks = sotrage.getLocalStorage("tasks");

      // Encontra o índice da tarefa atual usando a descrição antiga como referência
      const taskIndex = tasks.findIndex(
        (task) => task.description === description
      );

      // Se encontrar a tarefa (index diferente de -1)
      if (taskIndex !== -1) {
        tasks[taskIndex].description = newDescription;

        // Salva o array atualizado de volta no localStorage
        sotrage.setLocalStorage("tasks", tasks);
        alert("Tarefa editada com sucesso!");
      }
    }

    // Atualiza a variável description com a nova descrição
    description = newDescription;
  });

  const btnImg = new creadeElements("img", "", "");
  btnImg.setAttribute("src", "/imagens/edit.png");

  if (!description || typeof description !== "string") {
    p.textContent = "Descrição inválida";
  } else {
    taskList.appendChild(li.el);
    li.el.appendChild(svg.el);
    li.el.appendChild(p.el);
    li.el.appendChild(btn.el);
    svg.el.appendChild(svgContainer.el);
    svgContainer.el.appendChild(circle.el);
    svgContainer.el.appendChild(path.el);
    btn.el.appendChild(btnImg.el);

    return li;
  }
}
export default creadeElementsTask;

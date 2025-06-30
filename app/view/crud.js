import createTask from "../view/createTask.js";
import sotrage from "../partial/localStorage.js";
import formClean from "../components/form/formClean.js";
import formDelete from "../components/form/formDelete.js";
export default () => {
  const btnAddTaks = document.querySelector(".app__button--add-task");
  const formAddTask = document.querySelector(".app__form-add-task");
  const texteraTask = document.querySelector(".app__form-textarea");

  const tasks = sotrage.getLocalStorage("tasks");

  btnAddTaks.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden");
  });
  formAddTask.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = {
      description: texteraTask.value.trim(),
    };
    tasks.push(taskDescription);
    createTask(taskDescription.description);

    sotrage.setLocalStorage("tasks", tasks);
    texteraTask.value = "";
    formAddTask.classList.add("hidden");
  });

  tasks.forEach((task) => {
    if (
      task &&
      typeof task.description === "string" &&
      task.description.trim() !== ""
    ) {
      console.log("Restaurando tarefa:", task.description);
      createTask(task.description);
    }
  });
  formClean(texteraTask);
  formDelete(formAddTask);
};

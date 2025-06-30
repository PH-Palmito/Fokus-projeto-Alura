export default (formAddTask) => {
  const btnDelete = document.querySelector(".app__form-footer__button--delete");
  btnDelete.addEventListener("click", (event) => {
    event.preventDefault();
    formAddTask.classList.add("hidden");
  });
};

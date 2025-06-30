class Element {
  constructor(tag, texto = "", classe = "") {
    this.el = document.createElement(tag);
    this.el.textContent = texto;
    this.el.className = classe;
  }

  add(selector) {
    const destination = document.querySelector(selector);
    if (destination) destination.appendChild(this.el);
  }

  setAttribute(name, value) {
    this.el.setAttribute(name, value);
  }

  on(event, callback) {
    this.el.addEventListener(event, callback);
  }
}
export default Element;

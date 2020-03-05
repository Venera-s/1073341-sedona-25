var link = document.querySelector(".btn-form");

var popup = document.querySelector(".modal-form");

var form = document.querySelector(".search-form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

var overlay = document.querySelector(".overlay");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  overlay.classList.toggle("overlay-show");
  popup.classList.remove("modal-error");
  arrival.focus();
});


form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

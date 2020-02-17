var link = document.querySelector(".btn-form");

var popup = document.querySelector(".modal-form");

var form = document.querySelector("form");
var arrival1 = document.querySelector("[name=arrival]");
var departure2 = document.querySelector("[name=departure]");
var adults3 = document.querySelector("[name=adults]");
var children4 = document.querySelector("[name=children]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  arrival.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!arrival1.value || !departure2.value || !adults3.value || !children4.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
}
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show"))
    {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

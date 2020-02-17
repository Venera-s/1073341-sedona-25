var link = document.querySelector(".btn-form");

var popup = document.querySelector(".modal-form");
var close = document.querySelector(".modal-close");

var form = document.querySelector("form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=childre]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  arrival.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
  evt.preventDefault();
  console.log("Заполните данные");
}
});

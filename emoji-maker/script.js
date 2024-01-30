const show_eyes_cards = document.querySelectorAll(".show-eyes-card");
const show_skin_card = document.querySelector("#show-skin-card");
const show_mouth_card = document.querySelector("#show-mouth-card");

const select_skin_card = document.querySelector("#select-skin-card");
const select_eyes_card = document.querySelector("#select-eyes-card");
const select_mouth_card = document.querySelector("#select-mouth-card");

const skin_emoji = document.querySelectorAll(".skin");
const eyes_emoji = document.querySelectorAll(".eyes");
const mouth_emoji = document.querySelectorAll(".mouth");

const right_card_skin = document.querySelector("#skin");
const right_card_eyes = document.querySelector("#eyes");
const right_card_mouth = document.querySelector("#mouth");

for (let show_eyes_card of show_eyes_cards) {
  show_eyes_card.addEventListener("click", (e) => {
    select_eyes_card.style.display = "block";
    select_skin_card.style.display = "none";
    select_mouth_card.style.display = "none";
  });
}

show_skin_card.addEventListener("click", (e) => {
  select_eyes_card.style.display = "none";
  select_skin_card.style.display = "block";
  select_mouth_card.style.display = "none";
});

show_mouth_card.addEventListener("click", (e) => {
  select_eyes_card.style.display = "none";
  select_skin_card.style.display = "none";
  select_mouth_card.style.display = "block";
});

for (let skin of skin_emoji) {
  skin.addEventListener("click", function (e) {
    let skin_src = e.target.getAttribute("src");
    right_card_skin.setAttribute("src", skin_src);
  });
}
for (let eyes of eyes_emoji) {
  eyes.addEventListener("click", function (e) {
    let eyes_src = e.target.getAttribute("src");
    right_card_eyes.setAttribute("src", eyes_src);
  });
}
for (let mouth of mouth_emoji) {
  mouth.addEventListener("click", function (e) {
    let mouth_src = e.target.getAttribute("src");
    right_card_mouth.setAttribute("src", mouth_src);
  });
}

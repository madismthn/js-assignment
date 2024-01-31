const questionsAPI = "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz";

const inputs = document.querySelectorAll('input[type="radio"]');
const aside_counter = document.querySelector("#aside-counter > h3 > span");
const btn_submit = document.querySelector("#btn-submit");
const modal_wrapper = document.querySelector("#modal-wrapper");
const result_modal = document.querySelector("#result-modal > h3");
const backdrop = document.querySelector("#backdrop");

async function getResponse() {
  let response = await fetch(questionsAPI);
  let result = await response.json();

  let score = 0;

  for (let input of inputs) {
    input.addEventListener(
      "click",
      (e) => {
        for (q of result) {
          if (input.name.slice(1) == q.id) {
            if (input.value == q.answer) {
              input.parentElement.className = "correct";
              aside_counter.innerHTML = `${++score}/5`;
            } else {
              let allAnswers = document.querySelectorAll(
                `input[name='${input.name}']`
              );
              console.log(allAnswers[q.answer - 1]);
              allAnswers[q.answer - 1].parentElement.className = "correct";

              input.parentElement.className = "incorrect";
            }
          }
        }
      },
      { once: true }
    );
  }

  btn_submit.addEventListener("click", (e) => {
    e.preventDefault();
    result_modal.innerHTML = `Ваш результат: ${score}`;
    modal_wrapper.style.display = "block";
  });

  backdrop.addEventListener("click", (e) => {
    modal_wrapper.style.display = "none";
  });
}

getResponse();

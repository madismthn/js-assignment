let count = 0;

const createQuestions = obj => {
  const quizItem = document.createElement('section');
  quizItem.className = 'quiz-item';

  const title = document.createElement('h3');
  title.textContent = `Q${obj.id}. ${obj.question}`;

  quizItem.append(title)

  obj.options.map((item, pos) => {
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'option-wrapper';

    const label = document.createElement('label');
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.required = true;
    input.name = `q${obj.id}`;
    input.value = pos + 1;


    input.addEventListener('click', () => {
      const counter = document.querySelector('#aside-counter span');
      if (input.value == obj.answer) {
        count++;
        counter.textContent = `${count}/5`;
        optionWrapper.classList.add('correct');
      } else {
        optionWrapper.classList.add('incorrect');
      }

      const answered = document.querySelectorAll(`input[name=q${obj.id}]`);
      answered.forEach(item => {
        item.disabled = true
      })

      
    })

    const par = document.createElement('p');
    par.textContent = item;

    label.append(input);
    label.append(par);

    optionWrapper.append(label);

    quizItem.append(optionWrapper)
  })

  return quizItem

}

const getQuestions = url => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('GET', url);
    http.responseType = 'json';
    http.send();

    http.addEventListener('load', () => {
      if (http.status === 200 && http.readyState === 4) {
        resolve(http.response)
      } else if (http.readyState === 4) {
        reject(new Error(`Данные не получены ${http.status}`))
      }
    })

  })
}

const questions = 'https://5fb3db44b6601200168f7fba.mockapi.io/api/quiz';

getQuestions(questions)
  .then(data => {
    const quizForm = document.querySelector('.quiz');
    data.map(item => quizForm.append(createQuestions(item)))

    const submitSection = document.createElement('section');
    submitSection.id = 'submit-section';

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.id = 'btn-submit';
    submitBtn.value = 'Submit'

    submitSection.append(submitBtn)

    quizForm.append(submitSection)
  })
  .catch(err => {
    console.log(err)
  })
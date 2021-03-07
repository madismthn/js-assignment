// Переходы по окнам


// Переход к окну с глазами вперед
const showEyesCardNext = document.querySelector('.next-step.show-eyes-card');

const skinCard = document.getElementById('select-skin-card')
const eyesCard = document.getElementById('select-eyes-card');

showEyesCardNext.addEventListener('click', () => {
  skinCard.style.display = 'none';
  eyesCard.style.display = 'block';
})

// Переход к окну с цветами назад
const previousStep = document.querySelector('.previous-step');

previousStep.addEventListener('click', () => {
  skinCard.style.display = 'block';
  eyesCard.style.display = 'none';
})

// Переход к окну с глазами ртами вперед

const showMouthCard = document.getElementById('show-mouth-card');
const mouthCard = document.getElementById('select-mouth-card')

showMouthCard.addEventListener('click', () => {
  eyesCard.style.display = 'none';
  mouthCard.style.display = 'block';
})

// Переход к окну с глазами ртами назад
const showEyesCardPrev = document.querySelector('.previous-step.show-eyes-card')

showEyesCardPrev.addEventListener('click', () => {
  eyesCard.style.display = 'block';
  mouthCard.style.display = 'none';
})


// Вставляем картинки

const skins = document.querySelectorAll('.skin');

skins.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('skin').src = item.src;
    skinCard.style.display = 'none';
    eyesCard.style.display = 'block';
  })
})

const eyes = document.querySelectorAll('.eye');

eyes.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('eyes').src = item.src;
    eyesCard.style.display = 'none';
    mouthCard.style.display = 'block';
  })
})

const mouth = document.querySelectorAll('.mouth');

mouth.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('mouth').src = item.src;
  })
})
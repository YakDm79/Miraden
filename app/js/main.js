$(".header__menu-burger").on("click", function () {
  $(".header__menu-list").toggleClass("header__menu-list--active");
});
$(".slider-main").slick({
  arrows: false,
  vertical: true,
  // rows: 1,
  // slidesPerRow: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  slidesToShow: 3,
  infinite: true,
});
$(".slider-main-sec").slick({
  arrows: false,
  vertical: true,
  // rows: 1,
  // slidesPerRow: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  slidesToShow: 3,
  infinite: true,
});
$(".offer__main-button").on("click", function () {
  $(".offer__aside").toggleClass("offer__aside--active");
});
$(".offer__aside-btn").on("click", function () {
  $(".offer__aside-quiz").toggleClass("offer__aside-quiz--active");
});
$(".offer__aside-btn-1").on("click", function () {
  $(".offer__aside-quiz-1").toggleClass("offer__aside-quiz-1--active");
});
$(".offer__aside-btn-2").on("click", function () {
  $(".offer__aside-quiz-2").toggleClass("offer__aside-quiz-2--active");
});
$(".offer__aside-btn-left").on("click", function () {
  $(".offer__aside-quiz").removeClass("offer__aside-quiz--active");
});
$(".offer__aside-btn-left-1").on("click", function () {
  $(".offer__aside-quiz-1").removeClass("offer__aside-quiz-1--active");
});
$(".offer__aside-btn-left-2").on("click", function () {
  $(".offer__aside-quiz-2").removeClass("offer__aside-quiz-2--active");
});


const checkInputsLabel = document.querySelectorAll('.offer__aside-chk');
if (checkInputsLabel) {
  for (let item of checkInputsLabel) {
    const thisInput = item.querySelector('input[type=checkbox]');
    item.addEventListener('click', function () {
      thisInput.checked = !thisInput.checked;

      if (thisInput.checked) {
        this.classList.add('offer__aside-chk--gold');

      }
      else {
        this.classList.remove('offer__aside-chk--gold');

      }
    })
  }
}


const checkInputsRadio = document.querySelectorAll('#box');
const checkBox = document.querySelectorAll('#chk');
const checkLabelRadio = document.querySelectorAll('.offer__aside-label');

function check(e) {
  for (let item of checkLabelRadio) {
    checkLabelRadio.forEach(label => {
      label.classList.remove('offer__aside-label--gold')
    })
  }
}


checkLabelRadio.forEach(label => {
  label.addEventListener('click', check)
  label.addEventListener('click', function () {
    this.classList.add('offer__aside-label--gold')
  })
})

const choiceLabel = document.querySelectorAll('.offer__aside-choice-label');
const checkQuiz2Radio = document.querySelectorAll('.offer__aside-quiz2')

function checkChoice(e) {
  for (let item of choiceLabel) {
    choiceLabel.forEach(label => {
      label.classList.remove('offer__aside-choice-label--gold')
    })
  }
}
function checkQuiz2(e) {
  for (let item of checkQuiz2Radio) {
    checkQuiz2Radio.forEach(label => {
      label.classList.remove('offer__aside-quiz2--gold')
    })
  }
}
choiceLabel.forEach(label => {
  label.addEventListener('click', checkChoice)
  label.addEventListener('click', function () {
    this.classList.add('offer__aside-choice-label--gold')
  })
})
checkQuiz2Radio.forEach(label => {
  label.addEventListener('click', checkQuiz2)
  label.addEventListener('click', function () {
    this.classList.add('offer__aside-quiz2--gold')
  })
})
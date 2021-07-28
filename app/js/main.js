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
$(".offer__aside-btn-left").on("click", function () {
  $(".offer__aside-quiz").removeClass("offer__aside-quiz--active");
});
$(".offer__aside-btn-left-1").on("click", function () {
  $(".offer__aside-quiz-1").removeClass("offer__aside-quiz-1--active");
});
// $('.offer__aside-input').on('click', function () {
//   if ($(this).prop('checked') === true) {
//     $(".offer__aside-checkbox").addClass("offer__aside-checkbox--gold");
//     $(".offer__aside-label").addClass("offer__aside-label--gold");
//   }
// })
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
// const checkLabel = document.querySelectorAll('.offer__aside-label');
// if (checkLabel) {
//   for (let item of checkLabel) {
//     const thisInput = item.querySelector('input');
//     item.addEventListener('click', function () {
//       thisInput.checked = !thisInput.checked;

//       if (thisInput.checked) {
//         this.classList.remove('offer__aside-label--gold');

//       }
//       else {
//         this.classList.add('offer__aside-label--gold');

//       }
//     })
//   }
// }
const checkInputsRadio = document.querySelectorAll('#box');
const checkBox = document.querySelectorAll('#chk');
const checkLabelRadio = document.querySelectorAll('.offer__aside-label');

console.log(checkBox)

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


// checkBox.forEach(label => {
//   // label.addEventListener('click', check)
//   label.addEventListener('click', function () {
//     this.classList.add('offer__aside-chk--gold')
//     console.log('asas')
//   })
// })
// if (checkInputsRadio) {
//   for (let item of checkInputsRadio) {
//     const thisInput = item.querySelector('input[type=radio]');
//     item.addEventListener('click', function () {
//       thisInput.checked = !thisInput.checked;

//       if (thisInput.checked) {
//         this.classList.add('offer__aside-checkbox--gold');

//       }
//       else {
//         this.classList.remove('offer__aside-checkbox--gold');

//       }
//     })
//   }
// }
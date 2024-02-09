var earrings=document.getElementById('earrings');
var lipstick=document.getElementById('lipstick');
var bracelets=document.getElementById('bracelets');
var mascara=document.getElementById('mascara');
var watch=document.getElementById('watch');
var brush=document.getElementById('brush');

document.querySelector('.category-list').addEventListener('click', productCategory);
function productCategory(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }


document.querySelector('.category-list').addEventListener('click', checkIfActive);
// function checkIfActive(){
//   if(earrings.classList.contains('active')){
//     document.querySelector('.earring-pr').classList.add('select-category');
//   }
//   else if(lipstick.classList.contains('active')){
//     document.querySelector('.lipstick-pr').classList.add('select-category');
//   }
//   else if(bracelets.classList.contains('active')){
//     document.querySelector('.bracelet-pr').classList.add('select-category');
//   }
//   else if(mascara.classList.contains('active')){
//     document.querySelector('.Mascara-pr').classList.add('select-category');
//   }
//   else if(brush.classList.contains('active')){
//     document.querySelector('.brush-pr').classList.add('select-category');
//   }
//   else if(watch.classList.contains('active')){
//     document.querySelector('.watch-pr').classList.add('select-category');
//   }
//   else{
//     document.querySelector('.watch-pr').classList.remove('select-category');
//   }
// }
const categories = [
  { element: earrings, category: '.earring-pr' },
  { element: lipstick, category: '.lipstick-pr' },
  { element: bracelets, category: '.bracelet-pr' },
  { element: mascara, category: '.Mascara-pr' },
  { element: brush, category: '.brush-pr' },
  { element: watch, category: '.watch-pr' }
];

function checkIfActive() {
  for (const category of categories) {
    const { element, category: categoryClass } = category;

    if (element.classList.contains('active')) {
      document.querySelector(categoryClass).classList.add('select-category');
    } else {
      document.querySelector(categoryClass).classList.remove('select-category');
    }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// jquery code
$(document).ready(function() {
  $(".nav-link").click(function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");   
  });
  });


//menu circle
document.addEventListener('DOMContentLoaded', () => {
    const revealerNav = window.revealer({
      revealElementSelector: '.listMenu',
      options: {
        anchorSelector: '.btnMenu',
      },
    });
  
    const actionBtn = document.querySelector('.btnMenu');
    actionBtn.addEventListener('click', () => {
      if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        actionBtn.setAttribute('data-open', true);
      } else {
        revealerNav.hide();
        actionBtn.setAttribute('data-open', false);
      }
    });

    const linkProjects = document.querySelector('.linkProjects');
    linkProjects.addEventListener('click', () => {
      if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        linkProjects.setAttribute('data-open', true);
      } else {
        revealerNav.hide();
        linkProjects.setAttribute('data-open', false);
      }
    });
  });

/*Name*/

let letters = document.getElementsByClassName('title');

setTimeout(() => {
  for (let i = 0; i < letters.length; i++) {
    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      translateX: ['5px', '0'],
      delay: 50 * i
    });

    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      opacity: 1,
      delay: 60 * i,
      complete: function(anim) {
        if (i === letters.length - 1) {
          showSubTitle()
        }
      }
    });
  }
}, 500);


function showSubTitle() {
  anime({
    targets: 'h2',
    easing: 'easeInQuad',
    opacity: 1,
    duration: 300,
    delay: 1
  });
}

//cursor

function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .btnMenu, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .btnMenu, .cursor-pointer", function () {
            $(this).is("a, .btnMenu") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

$(function () {
    mousecursor();
});

//card slider

const back = document.querySelector(".back");
const next = document.querySelector(".next");
const backTwo = document.querySelector(".backTwo");
const nextTwo = document.querySelector(".nextTwo");
const backThree = document.querySelector(".backThree");
const nextThree = document.querySelector(".nextThree");
const backFour = document.querySelector(".backFour");
const nextFour = document.querySelector(".nextFour");
const backFive = document.querySelector(".backFive");
const nextFive = document.querySelector(".nextFive");
const backSix = document.querySelector(".backSix");
const nextSix = document.querySelector(".nextSix");

const photos = ["screenFish.webp", "responsiveFish.webp", "screenTwoFish.webp"]
const photosTwo = ["screenYoga.webp", "responsiveYoga.webp", "screenTwoYoga.webp"]
const photosThree = ["screenFl.webp", "responsiveFl.webp", "screenTwoFl.webp"]
const photosFour = ["screenMeteo.webp", "responsiveMeteo.webp", "screenTwoMeteo.webp"]
const photosFive = ["screenToDo.webp", "responsiveToDo.webp", "screenTwoToDo.webp"]
const photosSix = ["screenUS.webp", "responsiveUS.webp", "screenTwoUS.webp"]

let i = 0;

//Retro fish
next.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector(".pictures").src = photos [i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector(".pictures").src = photos [i]
})

//Yoga studio
nextTwo.addEventListener("click", () => {
    i++;
    if (i > photosTwo.length - 1) {
        i = 0;
    }
    document.querySelector(".picturesTwo").src = photosTwo [i];
})

backTwo.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photosTwo.length - 1;
    }
    document.querySelector(".picturesTwo").src = photosTwo [i]
})

//Wild Fl
nextThree.addEventListener("click", () => {
  i++;
  if (i > photosThree.length - 1) {
      i = 0;
  }
  document.querySelector(".picturesThree").src = photosThree [i];
})

backThree.addEventListener("click", () => {
  i--;
  if (i < 0) {
      i = photosThree.length - 1;
  }
  document.querySelector(".picturesThree").src = photosThree [i]
})

//Meteo
nextFour.addEventListener("click", () => {
  i++;
  if (i > photosFour.length - 1) {
      i = 0;
  }
  document.querySelector(".picturesFour").src = photosFour [i];
})

backFour.addEventListener("click", () => {
  i--;
  if (i < 0) {
      i = photosFour.length - 1;
  }
  document.querySelector(".picturesFour").src = photosFour [i]
})


//ToDo
nextFive.addEventListener("click", () => {
  i++;
  if (i > photosFive.length - 1) {
      i = 0;
  }
  document.querySelector(".picturesFive").src = photosFive [i];
})

backFive.addEventListener("click", () => {
  i--;
  if (i < 0) {
      i = photosFive.length - 1;
  }
  document.querySelector(".picturesFive").src = photosFive [i]
})

//US
nextSix.addEventListener("click", () => {
  i++;
  if (i > photosSix.length - 1) {
      i = 0;
  }
  document.querySelector(".picturesSix").src = photosSix [i];
})

backSix.addEventListener("click", () => {
  i--;
  if (i < 0) {
      i = photosSix.length - 1;
  }
  document.querySelector(".picturesSix").src = photosSix [i]
})


//scroll go to back

const btnToTop = document.querySelector(".btnToTop");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
    } 
    else {
    btnToTop.style.display = "none";
    }
}

btnToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




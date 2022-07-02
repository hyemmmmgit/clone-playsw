const header = document.querySelector('header');
const fixed = document.querySelector('.fixed');
const fixedR = document.querySelector('.fixedR');
const leftBtn = document.querySelector('#buttonLeft');
const rightBtn = document.querySelector('#buttonRight');
const eduList = document.querySelector('.eduList');
const leftBtn2 = document.querySelector('#buttonLeft2');
const rightBtn2 = document.querySelector('#buttonRight2');
const newsList = document.querySelector('.newsWindow ul');
const menuBtn = document.querySelector('header .menuBtn');
const XBox = document.querySelector('.X');
const onClickHeader = document.querySelector('.headerOnclick');

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  if (scroll >= 80) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  if (scroll >= 1200 && scroll < 3400) {
    fixed.classList.add('visible');
  } else {
    fixed.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  fixedR.classList.add('visible');
  if (scroll >= 2858) {
    fixedR.classList.remove('visible');
  }
});

let currentIdx = 1;

function moveSlide(num) {
  eduList.style.transform = `translate(${num * -416}px)`;
  currentIdx = num;
}

function changeColor(num) {
  if (num === 1) {
    leftBtn.classList.remove('on');
    rightBtn.classList.add('on');
  } else if (num === 2 || num === 3) {
    leftBtn.classList.add('on');
    rightBtn.classList.add('on');
  } else if (num === 5) {
    rightBtn.classList.remove('on');
  }
}

rightBtn.onclick = function () {
  if (currentIdx < 5) {
    moveSlide(currentIdx);
    currentIdx++;
    changeColor(currentIdx);
    console.log(currentIdx);
  }
};

leftBtn.onclick = function () {
  if (currentIdx > 1) {
    moveSlide(currentIdx - 2);
    currentIdx++;
    changeColor(currentIdx);
    console.log(currentIdx);
  }
};

let NewscurrentIdx = 1;

function NewsMoveSlide(num) {
  newsList.style.transform = `translate(${num * -240}px)`;
  NewscurrentIdx = num;
}

leftBtn2.onclick = function () {
  if (NewscurrentIdx > 1) {
    NewsMoveSlide(NewscurrentIdx - 2);
    rightBtn2.classList.add('on');
    leftBtn2.classList.remove('on');
    NewscurrentIdx++;
  }
};

rightBtn2.onclick = function () {
  if (NewscurrentIdx === 1) {
    NewsMoveSlide(NewscurrentIdx);
    rightBtn2.classList.remove('on');
    leftBtn2.classList.add('on');
    NewscurrentIdx++;
  }
};

menuBtn.onclick = function () {
  document.body.style.overflow = 'hidden';
  onClickHeader.classList.add('visible');
};

XBox.onclick = function () {
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'hidden';
  onClickHeader.classList.remove('visible');
};

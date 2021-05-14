const closeBtn = document.getElementById('close');
const hamBtn = document.getElementById('hamBtn');
const aside = document.querySelectorAll('.aside');
// aside를 queryselectAll로 설정한 이유는 배경이 따로따로 등장 하기때문

//그래서 forEach를 사용하였다.
hamBtn.addEventListener('click', () => {
  aside.forEach(aside_el => {
    aside_el.classList.add('visible');
  });
});

closeBtn.addEventListener('click', () => {
  aside.forEach(aside_el => {
    aside_el.classList.remove('visible');
  });
});

const backToTop = document.getElementById('backToTop');
const documentEl = document.documentElement;
let offset, scrollPos, documentHight;

documentHight = documentEl.scrollHeight;
if (documentHight !== 0) {
  offset = documentHight / 4;
}

// 스크롤 했을때 위치체크와 일정이상 넘어가면 버튼등장하는 기능 구현
window.addEventListener('scroll', () => {
  scrollPos = documentEl.scrollTop;

  if (scrollPos > offset) {
    backToTop.classList.add('backToTop_visible');
  } else {
    backToTop.classList.remove('backToTop_visible');
  }
});

//버튼 클릭시 맨 상단으로 올라가는 이벤트
backToTop.addEventListener('click', e => {
  e.preventDefault();
  scrollToTop();
});

function scrollToTop() {
  // let scrollInterval = setInterval(() => {
  //   if (scrollPos != 0) {
  //     window.scrollBy(0, -1);
  //   } else {
  //     clearInterval(scrollInterval);
  //   }
  // }, 25);
  documentEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

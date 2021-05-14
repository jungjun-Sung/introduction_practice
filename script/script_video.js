const video = document.getElementById('video');
const mainBtn = document.getElementById('main_btn');
let count = 1;

//버튼 클릭시 배경화면 변경
mainBtn.addEventListener('click', () => {
  if (count < 5) {
    count++;
  } else {
    count = 1;
  }

  video.src = 'images/video_' + count + '.mp4';
});

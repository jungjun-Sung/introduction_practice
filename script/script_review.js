const rating = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('reviewBtn');
const panel = document.getElementById('panel');
const active = document.querySelector('active');
let selectedRating = 'Satisfied';

//img를 클릭했을때만 이벤트가 실행된다.
//img와 그 공백도 같이 설정하고 싶지만 siblings에 관련된 문법을 잘 몰라서
//img 클릭만 가능하게 제작
//클릭시 전체 엑티브를 먼저 지워주고
//클릭한 값의 부모에게 액티브를 준다.
//마지막으로 send함수 실행
ratingsContainer.addEventListener('click', e => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
    send();
  }
});

// ICON을 클릭했을때 sendBtn에 이벤트를 줄수있게 함수로 제작
// 아예 값을 다 바꿀 수 있게 innerHTML로 제작
function send() {
  sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you !!</strong>
    <br>
    <strong> Feedback : ${selectedRating} </strong>
    <br>
    <p>See you soon !! </p>
`;
  });
}

//3개의 액티브가 다 없어져야해서 for 반복문 사용
function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove('active');
  }
}

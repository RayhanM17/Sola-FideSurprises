// var avideo = document.querySelector('.video');
// var juice = document.querySelector('.orange-juice');
// var abtn = document.querySelector('#play-pause');

// function togglePlayPause() {
//   if(avideo.paused){
//     abtn.className = 'pause';
//     avideo.play();
//   } else {
//     abtn.className = 'play';
//     avideo.pause();
//   }
// }

// abtn.onclick =  function(){
//   togglePlayPause();
// };

// avideo.addEventListener('timeupdate', function(){
//   var juicePos = avideo.currentTime / avideo.duration;
//   juice.style.width = juicePos * 100 + "%";

//   if(avideo.ended){
//     abtn.className = 'play';
//   }
// });
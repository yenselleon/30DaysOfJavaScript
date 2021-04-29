let sound = {
  'a': './src/audio/808-bd03.wav.mp3',
  's': './src/audio/Bdrum1.wav.mp3',
  'd': './src/audio/hhcy-a0.wav.mp3',
  'f': './src/audio/hhcy-ab0.wav.mp3',
  'g': './src/audio/tme1.wav.mp3',
  'h': './src/audio/TOM1.wav.mp3',
  'j': './src/audio/TOM5.wav.mp3',

}
const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (e) => {
    let key = e.key
    new Audio(sound[key]).play();

    [...keys].map(e => {

      (key == e.dataset.key) && e.classList.add('playing')

      setTimeout(() => {
        (key == e.dataset.key) && e.classList.remove('playing')
      }, 100);

      return e.dataset
    });
    
})
let sound = {
  'a': './src/audio/808-bd03.wav.mp3',
  's': './src/audio/Bdrum1.wav.mp3',
  'd': './src/audio/hhcy-a0.wav.mp3',
  'f': './src/audio/hhcy-ab0.wav.mp3',
  'g': './src/audio/tme1.wav.mp3',
  'h': './src/audio/TOM1.wav.mp3',
  'j': './src/audio/TOM5.wav.mp3',

} 

window.addEventListener('keydown', (e) => {
    let key
    
    if (e.key !== undefined) {
        key = e.key;
      } else if (e.keyIdentifier !== undefined) {
        key = e.keyIdentifier;
      } else if (e.keyCode !== undefined) {
        key = e.keyCode;
      }

      new Audio(sound[key]).play();
})
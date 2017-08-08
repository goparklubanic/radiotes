function playStream() {
  try {
    var myaudio = new Audio('http://streaming.rri.co.id:9119/web-rripurwokertopro2.mp3');
    myaudio.id = 'playerMyAdio';
    myaudio.play();
  } catch (e) {
    alert('no audio support!');
  } 
}

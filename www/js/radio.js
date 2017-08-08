$('document').ready(function(){

  $('button').click(function(){
	  

	 var audioUrl = "http://streaming.rri.co.id:9119/web-rripurwokertopro2.mp3";

  // Play an audio file (not recommended, since the screen will be plain black)
  window.plugins.streamingMedia.playAudio(audioUrl);

  // Play an audio file with options (all options optional)
  var options = {
		bgColor: "#FFFFFF",
		bgImage: "<SWEET_BACKGROUND_IMAGE>",
		bgImageScale: "fit", // other valid values: "stretch"
		initFullscreen: false, // true(default)/false iOS only
		successCallback: function() {
		console.log("Player closed without error.");
		},
		errorCallback: function(errMsg) {
		console.log("Error! " + errMsg);
		}
	};
	window.plugins.streamingMedia.playAudio(audioUrl, options);

	// Stop current audio
	window.plugins.streamingMedia.stopAudio();

	// Pause current audio (iOS only)
	window.plugins.streamingMedia.pauseAudio();

	// Resume current audio (iOS only)
	window.plugins.streamingMedia.resumeAudio();  
	  
  });	
	
});

// 
// $(document).ready(function() {
//     $('#fullpage').fullPage();
// });

// $(document).ready(function() {
//     $('#pagepiling').pagepiling();
// });

// $('#pagepiling').pagepiling({
//     sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
// });
//
// $('#pagepiling').pagepiling({
//     anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
//     menu: '#myMenu'
// });


// $.fn.fullpage({
//     scrollOverflow: false
// });


  //   function iedetect(v) {
	//     var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
	// 	return r.test(navigator.userAgent);
  //
	// }

  //
  // $.fn.fullpage({
  //     scrollOverflow: false,
  //     afterRender: function(){
  //         $('#video')[0].play();
  //     }
  // });

		// Wait until the video meta data has loaded
		// $('#section0 video').on('loadedmetadata', function() {
    //
		// 	var $width, $height, // Width and height of screen
		// 		$vidwidth = this.videoWidth, // Width of video (actual width)
		// 		$vidheight = this.videoHeight, // Height of video (actual height)
		// 		$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
    //
		// 	(adjSize = function() { // Create function called adjSize
    //
		// 		$width = $(window).width(); // Width of the screen
		// 		$height = $(window).height(); // Height of the screen
    //
		// 		$boxRatio = $width / $height; // The ratio the screen is in
    //
		// 		$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
    //
		// 		// Set the container to be the width and height of the screen
		// 		$('#section0').css({'width' : $width+'px', 'height' : $height+'px'});
    //
		// 		if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
		// 			// Set the width of the video to the screen size multiplied by $adjRatio
		// 			$vid = $('#section0 video').css({'width' : $width*$adjRatio+'px'});
		// 		} else {
		// 			// Else just set the video to the width of the screen/container
		// 			$vid = $('#section0 video').css({'width' : $width+'px'});
		// 		}
    //
		// 	})(); // Run function immediately
    //
		// 	// Run function also on window resize.
		// 	$(window).resize(adjSize);
		// 	$('#video')[0].play();
		// });

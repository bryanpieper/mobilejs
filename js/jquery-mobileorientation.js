
var MobileOrientation = (function($) {
	
	var MobileOrientation = {
		
		init: function() {
			// mobile orientation change events
			$(window).bind("resize orientationchange onorientationchange", MobileOrientation.update);
		},
		
		update: function(e) {
			
			// detect screen orientation manually for maximum device support
			if (screen.height < screen.width) {
				MobileOrientation.orientation = "landscape";
			}
			
			$("body").removeClass("portrait landscape").addClass(MobileOrientation.orientation);
			
		},
		orientation: "portrait"
	
	};
	
	// bind resize events when ready
	$(document).ready(MobileOrientation.init);
	
	// set initial orientation
	MobileOrientation.update();
	
	return MobileOrientation;

})(jQuery);

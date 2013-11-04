/*
 *	In this file we track the page slide
 */

(function () {

	'use strict'; 

	AMSTERDAMFRISBEE.provider('model_page_slide', function() {

		console.log("* Init page slide");

		// Auth keys
		var slideStyles = {
			style_from_left: '.view-example.ng-enter { left:-100%; } .view-example.ng-enter.ng-enter-active { left:0; height: 100%; } .view-example.ng-leave { } .view-example.ng-leave.ng-leave-active { height: 100%;left:100%; }',
			style_from_right: '.view-example.ng-enter { left:100%; } .view-example.ng-enter.ng-enter-active { left:0; height: 100%; } .view-example.ng-leave { } .view-example.ng-leave.ng-leave-active { height: 100%; left:-100%; }'
		}

		var currentSlideStyle = slideStyles.style_from_right;

		this.$get = function() {

			return {
				getSlideStyle: function(){
					return currentSlideStyle;
				},
				setSlideStyle: function(style){
					currentSlideStyle = slideStyles[style];
				},
			}
		};

	});

})();
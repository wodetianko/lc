	$(document).scroll(function() {
			var a=$(document).scrollTop()
			if (a>11150) {
				$(".topic_right").fadeOut();
			} else{
				$(".topic_right").fadeIn();
			}
		})
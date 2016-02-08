var div = document.createElement( 'div' );
//append all elements
document.body.appendChild( div );
//set attributes for div
div.id = 'myDivId';
div.style.position = 'absolute';
div.style.top = '10px';
div.style.left = '10px';
div.style.height = '15px';
div.style.backgroundColor = '#000000';
div.style.fontSize = '12px';
div.style.paddingLeft = '4px';
div.style.paddingRight = '4px';
div.style.color = 'white';

$("#myDivId").css('z-index', 8675309);

function tryRefreshAccessToken() {
	var url = "https://api.clarifai.com/v1/token?" + "client_id=" + Clarifai.clientId + "&client_secret=" +
		Clarifai.clientSecret + "&grant_type=client_credentials";
	$.post(url, function(data) {
		Clarifai.accessToken = data.access_token;
	});
}

function tagging(imgSrc, count) {
	if (count == undefined)
		count = 1;
	var df = "http://www.clarifai.com/img/metro-north.jpg";
	var url = "https://api.clarifai.com/v1/tag?access_token=" + Clarifai.accessToken + "&url=" + imgSrc;
	$.get(url, function(data) {
		var _class = data.results[0].result.tag.classes[0];
		console.log(data.results[0].result.tag.classes);
		console.log(_class);
		$("#myDivId").html(_class);
	}).fail(function(xhr, status, error) {
		if(xhr.status == 401) {
			tryRefreshAccessToken();
			if(count < 3) {
				tagging(imgSrc, count + 1);
			}
		}
	});
}

$("img").on({
    mouseenter: function (e) {
		var pos = $(this).offset();
		pos.left += 5;
		pos.top += 5;
		var imageSrc = $(this).prop('src');
		/* TODO Save image source to 
		*      a) decrease number of requests 
		*      b) to avoid displaying old responses on new images
		*/
		tagging(imageSrc);
		$("#myDivId").css(pos);
		$("#myDivId").show();
    },
    mouseleave: function (e) {
		$("#myDivId").hide();
    }
});
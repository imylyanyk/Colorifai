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

function tagging(imgSrc) {
	console.log('start tagging...');
	var df = "http://www.clarifai.com/img/metro-north.jpg";
	var access_token = "w9VBZjIfxJovNdjHS44KNS5EgrXx2U";
	var url = "https://api.clarifai.com/v1/tag?access_token=" + access_token + "&url=" + imgSrc;
	$.get(url, function(data) {
		var _class = data.results[0].result.tag.classes[0];
		console.log(data.results[0].result.tag.classes);
		console.log(_class);
		$("#myDivId").html(_class);
	});
}

console.log(Clarifai);

$("img").on({
    mouseenter: function (e) {
		var pos = $(this).offset();
		pos.left += 5;
		pos.top += 5;
		var imageSrc = $(this).prop('src');
		console.log(imageSrc);
		tagging(imageSrc);
		$("#myDivId").css(pos);
		$("#myDivId").show();
    },
    mouseleave: function (e) {
		$("#myDivId").hide();
    }
});
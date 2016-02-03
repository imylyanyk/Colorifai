var div = document.createElement( 'div' );
//append all elements
document.body.appendChild( div );
//set attributes for div
div.id = 'myDivId';
div.style.position = 'absolute';
div.style.top = '10px';
div.style.left = '10px';
div.style.width = '15px';   
div.style.height = '15px';
div.style.backgroundColor = 'red';

$("#myDivId").css('z-index', 8675309);

function tagging(imgSrc) {
	console.log('start tagging...');
	var df = "http://www.clarifai.com/img/metro-north.jpg";
	var url = "https://api.clarifai.com/v1/tag?access_token=HXgnsLDbsyG3xeJ1Ww14OhSjwMFiZ3&url=" + imgSrc;
	$.get(url, function(data) {
		console.log(data.results[0].result.tag.classes);
	});
}

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
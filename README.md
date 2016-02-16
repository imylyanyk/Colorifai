# Colorifai
Chrome extension which helps colorblind to recognize colors in images

## How to make it work

First of all, checkout this repository to your place.

Then you have to create file `credentials.js` with the following content:
```
var Clarifai = {
	clientId	: '<your_client_id>',
	clientSecret: '<your_client_secret>',
	accessToken	: '<access_token>'
}
```

![red strawberry][img1]
![color-blind mode][img2]

[img1]: http://www.vischeck.com/images/strawberries.jpg "Red strawberries"
[img2]: http://www.vischeck.com/images/strawberries_deutan.jpg "Red strawberries for colorblind"

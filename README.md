# Colorifai
Chrome extension which helps colorblind to recognize colors in images

## How to make it work

**Step 1** Checkout this repository to your place.

**Step 2** Create file `credentials.js` in the root folder with the following content:
```
var Clarifai = {
	clientId	: '<your_client_id>',
	clientSecret: '<your_client_secret>',
	accessToken	: ''
}
```
In this file you will store the credentials for the Clarifai API.

To get `cliendId` and `clientSecret` you have to create new application at Clarifai developers website.

You shouldn't worry about `accessToken` - it's left empty, because application will try to get new access token when current access token isn't valid or outdated.

**Step 3** Open the latest version of Chrome, go to Settings > Extensions, check `Developer Mode` and press `Load unpacked extension...`. Then navigate to the folder with your extension's files. Press OK.

**Step 4** Open any website with images, hover over image and in the top left corner you will see the list of colors on the image.

## Other

You can get more info about `Color` endpoint here: http://newdocs.clarifai.com/guide/color

![red strawberry][img1]
![color-blind mode][img2]

[img1]: http://www.vischeck.com/images/strawberries.jpg "Red strawberries"
[img2]: http://www.vischeck.com/images/strawberries_deutan.jpg "Red strawberries for colorblind"

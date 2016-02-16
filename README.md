# Colorifai
Chrome extension which helps colorblind to recognize colors in images

### Philosophy

Colorblind people have different vision, and, sometimes, they don't see the whole spectre of colors. For example, the story used to explain color-blindness to children involves the man who went to the forest and brought home the green strawberries, thinking that they must be tasty. The reason for such a weird behavior is that man, who didn't see the difference between red and green color. To demonstrate that, I provide the two pictures. On the left - the picture how we see it. On the right - the how the first picture *may* appear to the colorblind. Basically, colorlind will see two similar images below.

![red strawberry][img1]
![color-blind mode][img2]

So, this chrome extension is aimed to help colorblind people browse the internet with colors.

Using this extension, the person will see the list of the main colors on the picture.

For example, for the picture below, user will see the next picture:

![usecase][img3]

You may notice the `IndianRed` listed here. So, user can make an assumption that the fruit on the picture is of a red color!

### How to make it work

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

To get `cliendId` and `clientSecret` you have to create new application at [Clarifai developers website][link1].

You shouldn't worry about `accessToken` - it's left empty, because application will try to get new access token when current access token isn't valid or outdated.

**Step 3** Open the latest version of Chrome, go to Settings > Extensions, check `Developer Mode` and press `Load unpacked extension...`. Then navigate to the folder with your extension's files. Press OK.

**Step 4** Open any website with images, hover over image and in the top left corner you will see the list of colors on the image.

### Other
You can get more info about `Color` endpoint here: http://newdocs.clarifai.com/guide/color

[img1]: http://www.vischeck.com/images/strawberries.jpg "Red strawberries"
[img2]: http://www.vischeck.com/images/strawberries_deutan.jpg "Red strawberries for colorblind"
[img3]: https://pp.vk.me/c627829/v627829357/42843/yoefrusIuhs.jpg
[link1]: https://developer.clarifai.com/docs/

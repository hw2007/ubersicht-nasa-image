# ubersicht-nasa-image
Display NASA's Astronomy Picture of the Day (APOD) on your macOS desktop!

It even works without internet by falling back to the famous "Pale Blue Dot" photo (As seen below). The widget is also interactable, you can click on it to view today's picture in your browser.

![SCR-20241012-taio](https://github.com/user-attachments/assets/f641405f-3269-47e9-a53c-b0e4830c7b56)

It currently does not work if the APOD is a video, but I might fix that soon...

# Dependencies
Just Übersicht! Everything else is included in the file.

# Installing
Installing this is super easy! Just follow the steps below:

1. Download the apod.widget.zip file.
2. Move the file to `~/Library/Application Support/Übersicht/widgets`.
3. Unzip the file.
4. You will need to get a NASA API key for the widget to work. Read the configuration section below.

# Configuration
To configure the widget, open the apod/main.jsx file. You should see a CONFIG section at the top of the file.

You'll need to paste your NASA API key in for the apiKey option. You can get an API key for free <a href="https://api.nasa.gov/">here</a>. 

Description of each option:

`apiKey` Your NASA API key. Required for the widget to work.

`showApodText` Wether or not to show the text in the bottom-right of the widget which says "NASA Astronomy Picture of the Day". Default `true`.

`displayErrorsInApodText` Wether or not to repurpose the APOD text for displaying errors, such as "Connection error! Did you supply an API key?" when the widget can't connect to the NASA API. Has no effect when `showApodText` is `false`. Default `true`.

`showTitle` Wether or not to show the title of the APOD in the bottom-left corner. Default `true`.

`showVideoPlayButton` Wether or not to show a play button in the middle of the widget if the APOD is a video. Default `true`.

`widgetPosition` CSS positioning of the widget. Default `{"top": 300, "bottom": "auto", "left": 0, "right": "auto}`.

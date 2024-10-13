// ----- CONFIG -----

// Paste your NASA API key here!
// You can get one for free at https://api.nasa.gov/
const apiKey = "Your API key goes here";
// Show the text "NASA Astronomy Picture of the Day" in the bottom-right corner
const showApodText = true;
// Show the title of the picture in the bottom-left corner
const showTitle = true;
// Position of the widget. If you know how to position something with postion: fixed in CSS, you know how to use this.
const position = {
	"top": 0,
	"bottom": "auto",
	"left": 0,
	"right": "auto"
};

// ----- END OF CONFIG -----

export const command = `curl -s 'https://api.nasa.gov/planetary/apod?api_key=${apiKey}' | jq -r '.url + "," + .title'`;

export const refreshFrequency = 3600000 // ms


export const render = ({ output }) => {
	const [imgUrl, title] = output.split(",");
	console.log(imgUrl);
	console.log(title);

  	return (
		<a
			href={imgUrl}
			style={{
				borderRadius: 12,
				position: "fixed",
				width: 585,
				height: 280,
				margin: 20,
				overflow: "hidden",
				font: "menu",
				color: "white",
				textShadow: "0px 1px 4px rgba(0, 0, 0, 0.8)",
				fontSize: 13,
				top: position["top"],
				bottom: position["bottom"],
				left: position["left"],
				right: position["right"]
			}}
		>
			<p style={{
				position: "absolute",
				bottom: 0,
				left: 16
			}}><b>{showTitle ? (title ? title : "Pale Blue Dot") : ""}</b></p>
			<p style={{
				position: "absolute",
				bottom: 0,
				right: 16,
			}}>{title ? (showApodText ? "NASA Astronomy Picture of the Day" : "") : "Connection error! Did you supply an API key?"}</p>
			<img src={imgUrl ? imgUrl : "apod/pale_blue_dot.webp"} style={{
				width: "100%",
				height: "100%",
				objectFit: "cover",
			}}></img>
		</a>
  );
};

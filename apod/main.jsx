const CONFIG = require("./config");

export const command = `curl -s 'https://api.nasa.gov/planetary/apod?api_key=${CONFIG["apiKey"]}&thumbs=true' | jq -r '.url + "," + .title + "," + .media_type + "," + (.thumbnail_url // "")'`;

export const refreshFrequency = 3600000 // updates hourly


export const render = ({ output }) => {
	const [imgUrl, title, media_type, thumbnailUrl] = output.split(",");
	const is_video = (media_type && (media_type.trim() === "video"));
	
	console.log("APOD URL: " + imgUrl);
	console.log("APOD Title: " + title);
	console.log("APOD Type: " + media_type);
	console.log("APOD Is Video?: " + is_video)
	console.log("APOD Video Thumbnail: " + thumbnailUrl);

  	return (
		<a
			href={CONFIG["openImageSource"] ? imgUrl : "https://apod.nasa.gov/apod/"}
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
				top: CONFIG["widgetPosition"]["top"],
				bottom: CONFIG["widgetPosition"]["bottom"],
				left: CONFIG["widgetPosition"]["left"],
				right: CONFIG["widgetPosition"]["right"]
			}}
		>
			<p style={{
					position: "absolute",
					bottom: 0,
					left: 16,
					maxWidth: 290
				}}><b>{CONFIG["showTitle"] ?
					(title ?
						title
						: "Pale Blue Dot")
					: ""}
				</b>
			</p>
			<p style={{
					position: "absolute",
					bottom: 0,
					right: 16,
				}}>{CONFIG["showApodText"] ? 
					(title || !CONFIG["displayErrorsInApodText"] ? 
						"NASA Astronomy Picture of the Day"
						: "Connection error! Did you supply an API key?")
					: ""}
			</p>
			<img src="apod/sf_play.png" style={{
				width: 32,
				height: 32,
				display: (is_video && CONFIG["showVideoPlayButton"] ? "inline" : "none"),
				position: "absolute",
				top: "calc(50% - 16px)",
				left: "calc(50% - 16px)"
			}}></img>
			<img src={imgUrl ? 
				(is_video ?
					thumbnailUrl
					: imgUrl)
				: "apod/pale_blue_dot.webp"} style={{
				width: "100%",
				height: "100%",
				objectFit: "cover"
			}}></img>
		</a>
  );
};

import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "width": "100%"
    },
    "body": {
        "color": "purple",
        "height": "100%",
        "width": "100%"
    },
    "section": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "height": "100%",
        "width": "100%"
    }
});
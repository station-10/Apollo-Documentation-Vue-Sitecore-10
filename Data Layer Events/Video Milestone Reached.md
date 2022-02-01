# Video Milestone Reached

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Video Milestone Reached",
    "video": {
        "milestone": "<milestone>",
        "videoID": "<videoID>",
        "videoName": "<videoName>"
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|milestone|string|The milestone being tracked as an integer less than 100|25, 50, 77, 99|||||||
|videoID|string|Video ID|YT456789, BC4567890, 876546789|||||||
|videoName|string|Video Name|Twitch\_FPS, Age of Empires, Halo|||||||





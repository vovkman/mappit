var newDiv = document.createElement("div");
newDiv.setAttribute("id", "map");
newDiv.setAttribute("style", "position:absolute; z-index:20; height:432px; width:517px;");

var injectScript = document.createElement("script");
injectScript.src = chrome.extension.getURL('injectionScript.js');
injectScript.onload = function() {
    this.remove();
};

var mapScript = document.createElement("script");
mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0n19aMeQbPiWHFTc08PiNNjf4v7ZXgHQ&callback=initMap";
mapScript.onload = function() {
    console.log('Content script sending message.');
    window.postMessage({ type: 'content_script_type',
            text: address},  '*' /* targetOrigin: any */ );
    this.remove();
};

(document.body || document.documentElement).appendChild(newDiv);
(document.body || document.documentElement).appendChild(injectScript);
(document.body || document.documentElement).appendChild(mapScript);

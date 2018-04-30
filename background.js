// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	//url fo tabs to remove from chrome browser
	var url = ["https://www.google.it/*"];
	chrome.tabs.query({url: url}, function(tabs) {
    
    //cycle through all the tabs to remove them
    for (var i = 0; i < tabs.length; i++) {
    	chrome.tabs.remove(tabs[i].id);
    }
});
});
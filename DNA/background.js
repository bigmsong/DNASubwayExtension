chrome.runtime.onMessage.addListener(
  function(arg, sender, sendResponse) {
	var myString = arg;
	chrome.downloads.download({
    	url: "data:text/plain," + myString,
    	filename: "dna.txt",
    	conflictAction: "overwrite", 
    	saveAs: false, 
	}, function(downloadId) {
    	console.log("Downloaded item with ID", downloadId);
	});
});

  function sendResponse(){
  }
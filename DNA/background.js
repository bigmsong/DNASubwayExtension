chrome.runtime.onMessage.addListener(
  function(arg, sender) {
  	chrome.storage.local.get('list', function(result){
		if(result.list != null) {
    		chrome.downloads.download({
                url: "data:text/plain," + result.list,
                filename: "discovery.txt",
                conflictAction: "overwrite", 
                saveAs: false,
            });
		}
	});
});

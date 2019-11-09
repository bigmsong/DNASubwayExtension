document.addEventListener('DOMContentLoaded', function () {
	var button = document.getElementById("save");
	button.addEventListener('click', function(response) {
		chrome.runtime.sendMessage({from: 'popup'});
	});
});

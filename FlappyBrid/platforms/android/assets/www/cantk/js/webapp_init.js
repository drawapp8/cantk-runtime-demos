var gApp = null;

var userLoadApp = function(deviceData) {
	return false;
}

function onDeviceReady()
{
	var loading = document.getElementById("loading");
	if(loading) {
		loading.style.display = "none";
	}

	cantkInitViewPort();
	window.setTimeout(function(){	
		if(!gApp)
		{
			var uiData = guiData ? guiData : gDeviceData;

			if(!userLoadApp(uiData)) {
				if(CanTK.isMobile()) {
					gApp= webappRunWithDeviceData(uiData);
				}
				else {
					gApp= webappPreviewWithDeviceData(uiData);
				}
			}
		}
	}, 50);

	return;
};

CantkRT.init(onDeviceReady);


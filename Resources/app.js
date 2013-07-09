var win1 = Titanium.UI.createWindow({
	title : 'win 1',
	backgroundColor : '#fff'
});
var modalWin = Ti.UI.createWindow();

var navmodal = Ti.UI.iPhone.createNavigationGroup({
	window : modalWin
});
win1.add(navmodal);

var b2t = Titanium.UI.createButton({
	title : 'Open PDF'
});
modalWin.RightNavButton = b2t;

var b1t = Titanium.UI.createButton({
	title : 'Share PDF',
	height : 40,
	width : 200,
	top : 270
});
win1.add(b1t);

z = Ti.UI.iOS.createDocumentViewer({
	url : 'GettingStarted.pdf'
});

b1t.addEventListener('click', function() {
	z.show({
		animated : false,
		view : b2t
	});
});

b2t.addEventListener('click', function() {
	z.show();
});
win1.open();

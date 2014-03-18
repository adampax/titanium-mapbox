//each entry in tableData contains an 'id' corresponding with a file name of a map test.
//

var win = Ti.UI.createWindow({
	title : 'Tests',
	backgroundColor : 'white'
});

var navWin = Titanium.UI.iOS.createNavigationWindow({
	window : win
});

var tableData = [{
	title : 'Offline Map',
	id : 'offlineMap'
}, {
	title : 'Offline Partial Map',
	id : 'offlinePartialMap'
}, {
	title : 'Online Map',
	id : 'onlineMap'
}, {
	title : 'Polygon',
	id : 'polygon'

}];

var table = Ti.UI.createTableView({
	data : tableData
})
win.add(table);
navWin.open();

table.addEventListener('click', function(e) {
	navWin.openWindow(require(e.rowData.id).win());
});

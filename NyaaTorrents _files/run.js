if ( window.top != window.self ) {
	window.top.location.replace(window.self.location);
}
if ( typeof(torrents) != "undefined" ) {
	for ( i in torrents )  {
		var hidden = false;
		for ( j in cats ) {
			if ( cats[0] != "" ) {
				if ( torrents[i].category == cats[j] ) {
					hidden = true;
				}
			}
		}
		if ( !hidden ) {
			if ( tags[0] != "" ) {
				for ( j in tags ) {
					if ( torrents[i].name.indexOf(tags[j]) != -1 ) {
						hidden = true;
					}
				}
			}
		}
		if ( hidden ) {
			document.getElementById("torrent-" + i).className += " hide";
		}
	}
}
var hide = document.createElement("style");
hide.setAttribute("type", "text/css");
var hideText = "<!--.hide{display:none;}-->";
if ( hide.styleSheet ) {
	hide.styleSheet.cssText = hideText;
} else {
	hide.appendChild(document.createTextNode(hideText));
}
document.getElementsByTagName("head")[0].appendChild(hide);
window.onload = focusComment;

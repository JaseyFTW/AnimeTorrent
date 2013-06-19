function focusComment(id) {
	if ( typeof(id) != "string" ) {
		id = window.location.hash.substr(2);
	} else if ( window.location.hash ) {
		var preId = window.location.hash.substr(2);
		if ( preId && /^\d+$/.test(preId) ) {
			document.getElementById("cdiv" + preId).className = "comment";
		}
	}
	if ( id && /^\d+$/.test(id) ) {
		window.location.hash = "#c" + id;
		var div = document.getElementById("cdiv" + id);
		div.className = "commentoutline";
		for ( var offsetTop = 0, offsetLeft = 0, e = div; e != null; offsetTop += e.offsetTop, offsetLeft += e.offsetLeft, e = e.offsetParent );
		window.scrollTo(offsetLeft, offsetTop - 42);
	}
}
function toggleCheck(ref) {
	var input = document.getElementsByTagName("input");
	for ( i in input ) {
		if ( input[i].type == "checkbox" && input[i].className == "tlistmod" ) {
			input[i].checked = ref.checked;
		}
	}
}
function checkCheck() {
	var input = document.getElementsByTagName("input");
	var checked = true;
	for ( i in input ) {
		if ( input[i].type == "checkbox" && input[i].className == "tlistmod" && !input[i].checked ) {
			checked = false;
			break;
		}
	}
	if ( !checked ) {
		document.getElementById("toggleAll").checked = false;
	} else {
		document.getElementById("toggleAll").checked = true;
	}
}
function toggleLayer(layer) {
	if ( layer.style.display != "block" ) {
		layer.style.display = "block";
	} else {
		layer.style.display = "none";
	}
}
function toggleLayerBTx(layer) {
	if ( layer.style.display != "table-row-group" ) {
		layer.style.display = "table-row-group";
	} else {
		layer.style.display = "none";
	}
}

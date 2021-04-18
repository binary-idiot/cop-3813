function processLinks() {
	var linksList = document.links;
	var contents = "<ul>";

	for (var i = 0; i < linksList.length; i++) {
		var currentLink = linksList[i];
		contents += "<li><a href='" + currentLink.href + "'>" +
		currentLink.innerHTML + "</li>";
	}

	contents += "</ul>";
	document.getElementById("links").innerHTML = contents;
}

window.addEventListener("load", processLinks, false);
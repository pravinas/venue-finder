var dom = {};

var venueInfo = [["Aeronaut Brewery", "Aeronaut Brewery was established in Somerville back in 1930. It has musical events almost on a daily basis, and has a great reputation."],
					 ["Cafe 1863", "Cafe 1863 specializes in serving delicious pizza, sandwiches, salads and frozen yogurts. We are open in Cambridge, MA."]];
var musicianInfo = [["Amy Who", "Amy Who is a singer, song writer, and a pianist of over 8 years. Her past experiences include performing live at Aeronaut and Cafe Andala."],
				  ["Taylor What", "Taylor What is a country musician from Western Massachusetts. She has played at venues such as Cafe 1863 and The Middle East."]];
var venuesHeaderText = "Featured Venues Near You";
var musiciansHeaderText = "Featured Musicians";

document.addEventListener("DOMContentLoaded", loadPage);

function one(selector) {
	return document.querySelector(selector);
}

function all(selector) {
	return Array.from(document.querySelectorAll(selector));
}

function loadPage() {
	dom.venuesTabButton = one("#venues-tab-button");
	dom.musiciansTabButton = one("#musicians-tab-button");
	dom.venuesTabHider = one("#venues-hider");
	dom.musiciansTabHider = one("#musicians-hider");
	dom.resultsHeader = one("#results-header");
	dom.resultTitles = all(".result-info b");
	dom.resultDescriptions = all(".result-info p")
	switchTab("venues");
}

function switchTab(tab) {
	var activeTabButton;
	var inactiveTabButton;
	var activeTabHider;
	var inactiveTabHider;
	var headerText;
	var resultsInfo;
	switch (tab) {
		case "venues":
			activeTabButton = dom.venuesTabButton;
			activeTabHider = dom.venuesTabHider;
			inactiveTabButton = dom.musiciansTabButton;
			inactiveTabHider = dom.musiciansTabHider;
			headerText = venuesHeaderText;
			resultsInfo = venueInfo;
			break;
		case "musicians":
			activeTabButton = dom.musiciansTabButton;
			activeTabHider = dom.musiciansTabHider;
			inactiveTabButton = dom.venuesTabButton;
			inactiveTabHider = dom.venuesTabHider;
			headerText = musiciansHeaderText;
			resultsInfo = musicianInfo;
			break;
	}
	activeTabButton.classList.remove("inactive-tab-button");
	activeTabButton.classList.add("active-tab-button");
	inactiveTabButton.classList.remove("active-tab-button");
	inactiveTabButton.classList.add("inactive-tab-button");
	activeTabHider.classList.remove("inactive-hider");
	activeTabHider.classList.add("active-hider");
	inactiveTabHider.classList.remove("active-hider");
	inactiveTabHider.classList.add("inactive-hider");
	dom.resultsHeader.innerHTML = headerText;
	for (var i in dom.resultTitles) {
		dom.resultTitles[i].innerHTML = resultsInfo[i][0];
		dom.resultDescriptions[i].innerHTML = resultsInfo[i][1];
	}
}
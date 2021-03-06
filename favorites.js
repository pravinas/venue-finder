var venueInfo = [["Brighton Music Hall", "Compact, standing-room-only venue featuring performances by alternative, indie & local bands"],
					 ["Hard Rock Cafe Boston", "Rock 'n' roll-themed chain with a high-energy vibe serving burgers and American classics"]];
var musicianInfo = [["Joey Campbell", "Alternative. Hip Hop, Punk. You name it, he'll sing it. And Well!!!"],
				  ["Ben Bitdiddle", "10 years of piano experience. Don't regret a single moment."]];
var venuesHeaderText = "Your Favorite Venues";
var musiciansHeaderText = "Your Favorite Musicians";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
	dom.venuesTabButton = one("#venues-tab-button");
	dom.musiciansTabButton = one("#musicians-tab-button");
	dom.venuesTabHider = one("#venues-hider");
	dom.musiciansTabHider = one("#musicians-hider");
	dom.resultsHeader = one("#results-header");
	dom.resultTitles = all(".result-info b");
	dom.resultDescriptions = all(".result-info p");
	dom.resultImages = all(".result-image");
	switchTab("venues");

	var hearts = document.getElementsByClassName("fa-heart");
	var toggleFavorite = function() {
		if (this.classList.contains("favorited")) {
			this.classList.remove("favorited");
		}
		else {
			this.className += " favorited"
		}

	};
	for (var i=0; i<hearts.length; i++) {
		var heart = hearts[i];
		heart.onclick = toggleFavorite;
	}

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
		dom.resultImages[i].style.setProperty("--bgImage", "url('images/" + resultsInfo[i][0] + ".png')");
	}
}

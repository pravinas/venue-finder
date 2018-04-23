var venueInfo = [["Aeronaut Brewery", "Aeronaut Brewery was established in Somerville back in 1930. It has musical events almost on a daily basis, and has a great reputation."],
					 ["Cafe 1863", "Cafe 1863 specializes in serving delicious pizza, sandwiches, salads and frozen yogurts. We are open in Cambridge, MA."]];
var musicianInfo = [["Amy Who", "Amy Who is a singer, song writer, and a pianist of over 8 years. Her past experiences include performing live at Aeronaut and Cafe Andala."],
				  ["Taylor What", "Taylor What is a country musician from Western Massachusetts. She has played at venues such as Cafe 1863 and The Middle East."]];
var venuesHeaderText = "Featured Venues Near You";
var musiciansHeaderText = "Featured Musicians";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
	dom.venuesTabButton = one("#venues-tab-button");
	dom.musiciansTabButton = one("#musicians-tab-button");
	dom.venuesTabHider = one("#venues-hider");
	dom.musiciansTabHider = one("#musicians-hider");
	dom.resultsHeader = one("#results-header");
	dom.resultTitles = all(".result-info b");
	dom.resultDescriptions = all(".result-info p");
	dom.filterButtons = all(".filter-button");
	dom.popupOverlay = all(".popup-overlay")[0];
	dom.filterPopupButtons = all(".filter-popup-button");
	dom.filterPopups = all(".filter-popup");
	dom.priceFilterSlider = one("#price-filter-slider");
	dom.priceRange = one("#price-range");
	dom.venueSizeFilterSlider = one("#venue-size-filter-slider");
	dom.venueSizeRange = one("#venue-size-range");
	switchTab("venues");

	for (var i in dom.filterButtons) {
		dom.filterButtons[i].onclick = function(e) {
    		showFilterPopup(e.target.id.substring(0, e.target.id.lastIndexOf("-")));
		}
	}

	for (var i in dom.filterPopupButtons) {
		var popupBtn = dom.filterPopupButtons[i];
		popupBtn.onclick = closeFilterPopup;
	}

	window.onclick = function(event) {
		if (event.target == dom.popupOverlay) {
			closeFilterPopup();
		}
	}

	var hearts = document.getElementsByClassName("fa-heart");
	var toggleFavorite = function() {
		if (this.classList.contains("favorited")) {
			this.classList.remove("favorited");
		}
		else {
			this.className += " favorited"
		}
		console.log(this.className);

	};
	for (var i=0; i<hearts.length; i++) {
		var heart = hearts[i];
		heart.onclick = toggleFavorite;
	}

	noUiSlider.create(dom.priceFilterSlider, {
		start: [40, 100],
		connect: true,
		range: {
			'min': 0,
			'max': 300
		},
		step: 5
	});
	dom.priceFilterSlider.onmouseup = updatePriceRange;
	updatePriceRange();
	noUiSlider.create(dom.venueSizeFilterSlider, {
		start: [0, 250],
		connect: true,
		range: {
			'min': 0,
			'max': 1000
		},
		step: 25
	});
	dom.venueSizeFilterSlider.onmouseup = updateVenueSizeRange;
	updateVenueSizeRange();
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

function showFilterPopup(filter) {
	dom.popupOverlay.style.display = "block";
	one("#" + filter + "-filter-popup").style.display = "block";
}

function closeFilterPopup() {
	dom.popupOverlay.style.display = "none";
	for (var i in dom.filterPopups) {
		var popup = dom.filterPopups[i];
		popup.style.display = "none";
	}
}



function updatePriceRange() {
	var vals = dom.priceFilterSlider.noUiSlider.get();
	dom.priceRange.innerHTML = "$" + vals[0] + " \u2014 $" + vals[1];
}

function updateVenueSizeRange() {
	var vals = dom.venueSizeFilterSlider.noUiSlider.get();
	dom.venueSizeRange.innerHTML = parseInt(vals[0]) + " \u2014 " + parseInt(vals[1]) + " people";
}

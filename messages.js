var dom = {};

// 0 is someone else said, 1 is you said
var contacts = {"Amy Who": [[0,"Hi there, did you want to collaborate?"]], "Aeronaut Brewery":[[1, "I was looking to book your venue for a performance next friday."], [0,"Sounds good. I'll book that now."]], "Taylor What":[[0,"Loved your concert yesterday."],[1,"Yeah man, thanks for showing up!"]], "Cafe 1863":[[0,"Great performance! Hope to see you again."]], "Ale Huh":[[1,"More placeholder text."],[0,"I know, isn't it a pain?"]]};

document.addEventListener("DOMContentLoaded", loadPage);

function one(selector) {
	return document.querySelector(selector);
}

function all(selector) {
	return Array.from(document.querySelectorAll(selector));
}

function loadPage() {
	dom.contactList = one("#contacts");
	loadContacts();
}

function newConversation(){
	window.alert("New Conversation Functionality not yet implemented");
}

function loadContacts() {
	for (var contact in contacts){
		var divE = document.createElement("div");
		divE.setAttribute("class","contact");

		var pic = document.createElement("img");
		pic.setAttribute("class","contact-pic");
		pic.setAttribute("src", "placeholder-profile-pic.png");
		divE.appendChild(pic);

		var info = document.createElement("div");
		info.setAttribute("class", "contact-info");

		var title = document.createElement("div");
		title.setAttribute("class","contact-name");
		title.appendChild(document.createTextNode(contact));
		info.appendChild(title);

		var snipp = document.createElement("div");
		snipp.setAttribute("class","contact-snippet");
		var convLen = contacts[contact].length;
		snipp.appendChild(document.createTextNode(contacts[contact][convLen-1][1]))
		info.appendChild(snipp);

		divE.appendChild(info);

		dom.contactList.appendChild(divE);
	}
}
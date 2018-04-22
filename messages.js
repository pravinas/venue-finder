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
	dom.content = one("#content");
	loadContactsPage();
}

function newConversation(){
	window.alert("New Conversation Functionality not yet implemented");
}

function loadContactsPage() {
	var header = document.createElement("div");
	header.setAttribute("id","header");
	var headtable = document.createElement("div");
	headtable.setAttribute("id", "head-table");
	header.appendChild(headtable);
	var messagesTitle = document.createElement("div");
	messagesTitle.setAttribute("class","cell");
	messagesTitle.setAttribute("style","width:85%;");
	messagesTitle.appendChild(document.createTextNode("Messages"));
	headtable.appendChild(messagesTitle);
	var plusCell = document.createElement("div");
	plusCell.setAttribute("class","cell");
	plusCell.setAttribute("style","width:15%;");
	headtable.appendChild(plusCell);
	var plusButton = document.createElement("button");
	plusButton.setAttribute("id","new-conversation");
	plusButton.setAttribute("onclick","newConversation();")
	plusButton.appendChild(document.createTextNode("+"));
	plusCell.appendChild(plusButton);

	dom.contactHeader = header;
	dom.content.appendChild(header);

	var searchArea = document.createElement("div");
	searchArea.setAttribute("id","search-area");
	var searchBar = document.createElement("span");
	searchBar.setAttribute("id","search-bar");
	searchArea.appendChild(searchBar);
	var search = document.createElement("i");
	search.setAttribute("class", "fas fa-search");
	searchBar.appendChild(search);
	var sbinput = document.createElement("input");
	sbinput.setAttribute("id","search-bar-input");
	sbinput.setAttribute("placeholder","Try \"Amy Who\"")
	searchBar.appendChild(sbinput);

	dom.contactSearch = searchArea;
	dom.content.appendChild(dom.contactSearch);

	dom.contactList = document.createElement("div");
	dom.contactList.setAttribute("id", "contacts");

	for (var contact in contacts){
		var divE = document.createElement("button");
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
		var conversation = contacts[contact];
		var convLen = conversation.length;
		var lastLine = conversation[convLen-1];
		if (lastLine[0]){
			snipp.appendChild(document.createTextNode(contact+": "+lastLine[1]));
		}
		else {
			snipp.appendChild(document.createTextNode("You: "+lastLine[1]));
		}

		info.appendChild(snipp);

		divE.appendChild(info);

		dom.contactList.appendChild(divE);
	}
	dom.content.appendChild(dom.contactList);
}

function loadConversation(contactName){

}
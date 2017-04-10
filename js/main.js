$(document).ready(function() {
	
	var allMusic = [];
	var item1 = new Item("Shape of You", "Ed Sheeran", 2017);
	var item2 = new Item("Hard Pill to Swallow", "Unknown", 2016);
	var item3 = new Item("Paris", "Chainsmokers", 2017);
	var item4 = new Item("Castle on the Hill", "Ed Sheeran", 2017);
	var item5 = new Item("Skylines", "Glades", 2015);
	var item6 = new Item("Retreat", "Trella", 2016);
	var item7 = new Item("Automatic", "The Mowgli's", 2016);
	addItemToList(item1);
	addItemToList(item2);
	addItemToList(item3);
	addItemToList(item4);
	addItemToList(item5);
	addItemToList(item6);
	addItemToList(item7);

	function Item(name, artist, year) {
		this.name = name;
		this.artist = artist;
		this.year = year;
		this.stock = true;
	}

	function addItemToList(Item) {
		allMusic.push(Item);
		displayItem();
	}
	
	function removeItemFromList(Item) {
		
		var curItem = Item;
		for (var i=0; i<allMusic.length; i++){
			if (curItem.name === allMusic[i].name || curItem.artist === allMusic[i].artist){
				allMusic.splice(i, 1);
			}
		}

		$('<li />', {html: curItem.name + " removed"}).appendTo('ul.itemList');
		console.log(allMusic.length);
		logAllItems();
	}

	//var item1 = new Item("Yo", "YoYo", 2000);
	function displayItem() {
		$('<li />', {html: allMusic[allMusic.length-1].name + " : " + 
			allMusic[allMusic.length-1].artist}).appendTo('ul.itemList');
		console.log(allMusic.length);
		logAllItems();
	}

	function logAllItems() {
		for(var i = 0; i < allMusic.length; i++) {
			console.log(allMusic[i]);
		}
	}

	$('#add').click(function() {
		var title = $('#title').val();
		var artist = $('#artist').val();
		var year = $('#year').val();
		if(title.length && artist.length && year.length) {
			var temp = new Item(title, artist, year);
			addItemToList(temp);
		}
		$('.bruh').children('input').val('')
	});
	
	$('#remove').click(function() {
		var title = $('#title').val();
		var artist = $('#artist').val();
		var year = $('#year').val();
		if(title.length && artist.length && year.length) {
			var temp = new Item(title, artist, year);
			removeItemFromList(temp);
			
		}
		$('.bruh').children('input').val('')
	});

	// pressing search button might cause conflict between going to searchpage and calling this function
	/*$('#srch').click(function() { // also try to find out how to keep search text as text placeholder on html file + keep button
		//console.log("HELLO"); // dont even know if this function is being called (get output working first to find out)
		
		var temp = document.getElementById('srchText');
		
		var searchText = document.getElementById('searchText');
		var searchText = $('#searchText').val();
		
		for (var i = 0; i < allMusic.length; i++)
		{
			var currItem = allMusic[i];
			if (currItem.name.includes(searchText) || currItem.artist.includes(searchText) || currItem.year.includes(searchText))
			{
				console.log(currItem); // Output the item somehow
			}
		}
	});*/
	
	$('#searchButton').click(function()
	{
		clearPage(document.getElementById('searchResults'));
		//document.getElementById('searchResults').innerHTML;
		var srchText = ((document.getElementById("searchText")).value).toLowerCase();
		
		//clearPage(document.getElementById('searchSection'));
		document.getElementById('searchResultsTitle').innerHTML = 'Search Results';
		
		for (var i = 0; i < allMusic.length; i++)
		{
			var currItem = allMusic[i];
			var currName = currItem.name.toLowerCase();
			var currArtist = currItem.artist.toLowerCase();
			
			if (currName.includes(srchText) || currArtist.includes(srchText))
			{
				document.getElementById('searchResults').innerHTML += "<br>" + currItem.name + " : " + currItem.artist;
			}
		}
		return false;
	}
	);
	
	function clearPage(element)
	{
		element.innerHTML = "";
	}
	
});
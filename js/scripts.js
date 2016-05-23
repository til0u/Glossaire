(function() {
	var options = {
		valueNames: ['word', 'definition'],
		item: '<li><span class="word"></span><span class="definition"></span></li>'
	};

	var userList = new List('definition', options, values);
	userList.sort("word");

	document.getElementById('searchInput').addEventListener('keyup', function(e) {
		var searchString = e.target.value;
		userList.search(searchString, ['word']);
		//userList.search(searchString);
	});

	document.getElementById('count').innerHTML = userList.size()

})();
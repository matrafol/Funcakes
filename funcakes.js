const menuFilter = document.getElementsByClassName('menu_filter');
const menuItems = document.getElementsByClassName('menu_items');

// Get the index of menuFilter or menuItems
// Set the display of all index to none except that index

for (var i = 0; i < menuFilter.length; i++) {
	menuFilter[i].addEventListener('click', function(e){

		// Get the filter category like cakes, breads, etc. 
		var filter = this.className.split(' ').pop();

		// Get the specific element to display later
		var menuCategory = document.getElementsByClassName('menu_items '+ filter)[0];

		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.display = 'none';

			// If the filter has a match in menuItems add the display flex property
			// Of that specific element

			if(menuItems[i].className.indexOf(filter) > -1){
				menuCategory.style.display = 'flex';
			}
		}
		e.preventDefault();
	});
}

const menuFilter = document.getElementsByClassName('menu_filter');
const menuItems = document.getElementsByClassName('menu_items');

const menu = document.getElementsByClassName('nav_links')[1];
const services = document.getElementsByClassName('nav_links')[2];
const contactUs = document.getElementsByClassName('nav_links')[3];
const scrollUp = document.getElementById('scroll_up_container');

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

function smoothScroll(targetElement, duration){

	// getBoundingClientRect() returns the target's coordinates

	var target = document.querySelector(targetElement);
	var targetPosition = target.getBoundingClientRect().top;

	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if(startTime === null) {
			startTime = currentTime;
		}
		
		var timeElapsed = currentTime - startTime;
		var run = easeAnimation(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);	
			
		if(timeElapsed < duration) {
			// requestAnimationFrame is a method that updates the content everytime
			// the page is moved
			requestAnimationFrame(animation);
		}	
	}

	// An ease algorithm to make the scroll animation smooth
	function easeAnimation(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t*t + b;
		t -= 2;
		return c/2*(t*t*t + 2) + b;
	};

	requestAnimationFrame(animation);
}

// Closure function so that it will be called immediately whenever the page loads

(function toggleScrollUp(){
	var navigation = document.getElementById('navigation');

	if(window.pageYOffset > navigation.getBoundingClientRect().height){
		scrollUp.style.visibility = 'visible';
	} else{
		scrollUp.style.visibility = 'hidden';
	}
	requestAnimationFrame(toggleScrollUp);
}());

menu.addEventListener('click', function(e){
	smoothScroll('#menu', 1000);
	e.preventDefault();
});

services.addEventListener('click', function(e){
	smoothScroll('#service', 1000);
	e.preventDefault();
});

contactUs.addEventListener('click', function(e){
	smoothScroll('#sticky_footer', 1000);
	e.preventDefault();
});

scrollUp.addEventListener('click', function(e){
	smoothScroll('#main_nav', 1000);
	e.preventDefault();
});

const item = document.getElementsByClassName('item new');

(function newItemTag(){
	for (var i = 0; i < item.length; i++) {
		var newItemTag = document.createElement("span");
		newItemTag.innerHTML = 'New';
		newItemTag.className = "new_item";
		// Append the tag as the first child
		item[i].insertAdjacentElement('afterbegin', newItemTag);
	}
}());


/*
const closeButton = document.getElementsByClassName('close_button');
const modal = document.getElementsByClassName('image_modal_container');*

for (var i = 0; i < item.length; i++) {
	item[i].addEventListener('click', function(e){*/
		//console.log(this.className.indexOf(menuItems.className));
		//alert(menuItems[i].className);
		//if(this.className.indexOf(menuItems) > -1){
			//alert('gfdg');
		//}
		//var test = document.createElement("div");
		//test.className = "image_modal_container";
		/*this.innerHTML += '<div class="image_modal_container"><div class="image_modal">' +
								'<a href="#" class="close_button">&times;</a>' +
								'<img src="images/cakes/choco-mocha-cake.jpg">' +
							'</div></div>';*/
		//console.log(this.innerHtml);	
		//modal[0].style.display = 'block';
	//});
//}


	/*var test = (function(e){
		item[i].addEventListener('click', function(e){
			alert(i);
			imageModal(i);
		});
	});*/

	/*closeButton[i].addEventListener('click', function(e){
		this.parentNode.parentNode.style.display = 'none';
		e.preventDefault();
	});

/*if(this.innerHtml.indexOf(menuItems, e.target) > -1){
			alert(this.indexOf(menuItems, e.target));
		}
		const idx = [...this.children]
	    .filter(el => el.indexOf('menuItems') > -1)
	    .indexOf(e.target);

	    if (idx > -1) {
		    alert('asd');
		}

for (var i = 0; i < item.length; i++) {
	test(i);
}

function imageModal(index){
	modal[index].style.display = 'block';
}
*/


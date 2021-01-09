/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// global variable to stor sections data
const sections = document.querySelectorAll('section');
// global variable to store navigation bar data
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// function that build navigation bar list items
const createNavItems = () => {
	// loop over each section to get needed informations
	sections.forEach(section => {
		//getting and store the section name
		let dataNav = section.getAttribute('data-nav');
		// create link to store section name and link that connect to the section
		 const link = document.createElement('a');
		 // store the section name
		 const sectionName = document.createTextNode(dataNav);
		 // add the section name to the link
		 link.appendChild(sectionName)
		
		// add style to the links
		 link.classList.add('menu__link');

		 // create list item to store each link
		 const li = document.createElement('li');

		 // append each link to the list item
		 li.appendChild(link);

		 // append the list item to the navigation bar
		 navbar.appendChild(li);


		 // store section id to connect it with the link referance
		const sectionId = section.getAttribute("id");
		link.setAttribute("href", `#${sectionId}`);




		// scroll smoothly to the target section 
		link.onclick = function(event){
			event.preventDefault();
			section.scrollIntoView({behavior: "smooth"});
		}
	})

	console.log(navbar)
}


// Add class 'active' to section when near top of viewport

// event to highlight the active section
window.onscroll = function(){
    
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200) {
            // console.log(window.scrollY, s.id, s.offsetTop)
            // remove your-active-class from out of view sections
            document.querySelector('.your-active-class').classList.remove('your-active-class');
            // add your-active-class on the current section
            section.classList.add('your-active-class');
        }
    });

}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavItems();
// Scroll to section on link click

// Set sections as active



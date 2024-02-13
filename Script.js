
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.children[1].style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.children[1].style.display = 'none';
        });
    });
});

// Existing DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Function to reset menu state on window resize
    function resetMenuOnResize() {
        if (window.innerWidth > 768) {
            // If larger than 768px, remove the 'is-active' class and reset styles
            navMenu.classList.remove('is-active');
            hamburger.classList.remove('opened');
        }
    }

    // Add the resize event listener
    window.addEventListener('resize', resetMenuOnResize);
});


document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function() {
        // Toggle a class that indicates the menu is open
        this.classList.toggle('opened');
        navMenu.classList.toggle('is-active');
    });

    // Function to handle the resizing of the window
    function handleResize() {
        if (window.innerWidth > 768) {
            // If the window is resized above 768px, reset the menu state
            hamburger.classList.remove('opened');
            navMenu.classList.remove('is-active');
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize);
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('.menu-item-dropdown .menu-title');
  
    dropdownTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('active');
      });
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const recipeSection = document.getElementById("recipes");
    
    // Function to check if the section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add the animate class if the section is in view
    function checkVisibility() {
        if (isInViewport(recipeSection)) {
            recipeSection.classList.add("animate");
            // Remove the event listener after the animation is triggered
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    // Initial check in case the section is already in view
    checkVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", checkVisibility);
});


// Select the navbar element
const navbar = document.querySelector("nav");

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled"); // Add class when scrolled down
    } else {
        navbar.classList.remove("scrolled"); // Remove class when at the top
    }
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

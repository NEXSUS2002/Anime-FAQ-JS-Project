const accordionBtns = document.querySelectorAll(".accodion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        // Close all open accordions
        accordionBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove("active");
                const otherAccordionDescription = otherBtn.nextElementSibling;
                const otherDownArrow = otherBtn.querySelector(".icon");
                otherAccordionDescription.style.maxHeight = null;
                otherDownArrow.classList.remove("rotate");
            }
        }); 
        
        // Toggle the clicked accordion
        this.classList.toggle("active");
        const accordionDescription = this.nextElementSibling;
        const downArrow = this.querySelector(".icon");

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            downArrow.classList.toggle("rotate");
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + "rem";
            downArrow.classList.toggle("rotate");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let siteTitle = "Ink & Quill";
    let elements = document.querySelectorAll("[data-title-replace]");
    
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace('{title}', siteTitle);
    });

    document.title = siteTitle;
});

const texts = ["Your Word-Play", "Your Business", "Today!"];
const outputElement = document.getElementById("type-output");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false; // Flag to determine whether we're adding or deleting text

function typeWriter() {
    // Base string that always remains
    const baseString = "Elevate ";
    
    if (!isDeleting && charIndex < texts[textIndex].length) {
        // Adding text
        outputElement.innerHTML = baseString + texts[textIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 70);
    } else if (isDeleting && charIndex >= 0) {
        // Deleting text
        outputElement.innerHTML = baseString + texts[textIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(typeWriter, 70);
    } else if (charIndex === texts[textIndex].length) {
        // When the text is fully typed, start deleting after a pause
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 1200);
    } else if (charIndex < 0) {
        // When the text is fully deleted, move to the next text and start typing
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 300); // Small pause before typing the next text
    }
}

typeWriter();

document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        document.querySelector('.navbar h1').style = "display: block;";
    } else {
document.querySelector('.navbar h1').style = "display: none; ";
    }
    navLinks.classList.toggle('active');

});

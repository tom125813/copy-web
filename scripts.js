document.addEventListener("DOMContentLoaded", function() {
    let siteTitle = "Nexus Copywriting";
    let elements = document.querySelectorAll("[data-title-replace]");
    
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace('{title}', siteTitle);
    });

    document.title = siteTitle;
});

const companyName = "Nexus Copywriting";
    document.body.innerHTML = document.body.innerHTML.replace(/{title}/g, companyName);

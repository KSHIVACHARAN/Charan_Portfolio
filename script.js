// Initialize Lucide icons

lucide.createIcons();


// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Scroll animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.1
});


cards.forEach(card => {

    observer.observe(card);

});


console.log("Welcome to Shivacharan's Portfolio!");
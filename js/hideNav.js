window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.remove("opacity-0", "-translate-y-full");
    } else {
        navbar.classList.add("opacity-0", "-translate-y-full");
    }
});
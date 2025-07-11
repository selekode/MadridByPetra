window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.remove("opacity-0", "-translate-y-full");
    } else {
        navbar.classList.add("opacity-0", "-translate-y-full");
    }
});

document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
(() => {
    const btn     = document.getElementById("mobile-menu-btn");
    const menu    = document.getElementById("mobile-menu");
    const overlay = document.getElementById("mobile-menu-overlay");
    const icon    = document.getElementById("mobile-menu-icon");

    if (!btn || !menu || !overlay) return;

    const openMenu = () => {
        menu.classList.add("is-open");
        overlay.classList.add("is-open");
        btn.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("aria-label", "Close menu");
        menu.setAttribute("aria-hidden", "false");
        if (icon) icon.textContent = "close";
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        menu.classList.remove("is-open");
        overlay.classList.remove("is-open");
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
        menu.setAttribute("aria-hidden", "true");
        if (icon) icon.textContent = "menu";
        document.body.style.overflow = "";
    };

    const toggleMenu = () =>
        menu.classList.contains("is-open") ? closeMenu() : openMenu();

    // Toggle on hamburger click
    btn.addEventListener("click", toggleMenu);

    // Close when clicking the overlay
    overlay.addEventListener("click", closeMenu);

    // Close when any mobile nav link is clicked
    menu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
            closeMenu();
            btn.focus();
        }
    });

    // Close if the viewport grows to desktop width (prevents ghost state)
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", (e) => {
        if (e.matches) closeMenu();
    });
})();

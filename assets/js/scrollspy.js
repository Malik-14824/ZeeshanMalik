(() => {
    const navLinks = [...document.querySelectorAll('nav .nav-link[href^="#"]')];
    if (!navLinks.length) return;

    const sectionMap = navLinks
        .map((link) => {
            const id = link.getAttribute("href");
            if (!id || id === "#") return null;
            const section = document.querySelector(id);
            if (!section) return null;
            return { link, section };
        })
        .filter(Boolean);

    if (!sectionMap.length) return;

    const activateLink = (activeSectionId) => {
        sectionMap.forEach(({ link, section }) => {
            const isActive = `#${section.id}` === activeSectionId;
            link.classList.toggle("is-active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const selectByScrollPosition = () => {
        const fromTop = window.scrollY + 130;
        let current = sectionMap[0];

        sectionMap.forEach((item) => {
            if (item.section.offsetTop <= fromTop) {
                current = item;
            }
        });

        activateLink(`#${current.section.id}`);
    };

    // Keep smooth navigation and active state in sync.
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("href");
            if (!target || target === "#") return;
            activateLink(target);
        });
    });

    window.addEventListener("scroll", selectByScrollPosition, { passive: true });
    window.addEventListener("resize", selectByScrollPosition);
    window.addEventListener("load", selectByScrollPosition);

    selectByScrollPosition();
})();

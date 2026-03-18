(() => {
    const navLinks = [
        ...document.querySelectorAll('a.nav-link[href^="#"], a.mobile-nav-link[href^="#"]'),
    ];
    if (!navLinks.length) return;

    const groupedByHash = navLinks.reduce((map, link) => {
        const hash = link.getAttribute("href");
        if (!hash || hash === "#") return map;

        const section = document.querySelector(hash);
        if (!section) return map;

        if (!map.has(hash)) {
            map.set(hash, { hash, section, links: [] });
        }

        map.get(hash).links.push(link);
        return map;
    }, new Map());

    const sectionMap = [...groupedByHash.values()];

    if (!sectionMap.length) return;

    const getHeaderOffset = () => {
        const header = document.querySelector(".header-modern-divider");
        if (!header) return 0;
        return Math.ceil(header.getBoundingClientRect().height);
    };

    const syncAnchorOffset = () => {
        const offset = getHeaderOffset();
        if (!offset) return;
        document.documentElement.style.setProperty("--anchor-offset", `${offset}px`);
    };

    const activateLink = (activeSectionId) => {
        sectionMap.forEach(({ hash, links }) => {
            const isActive = hash === activeSectionId;

            links.forEach((link) => {
                link.classList.toggle("is-active", isActive);
                if (isActive) {
                    link.setAttribute("aria-current", "page");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    };

    const selectByScrollPosition = () => {
        const headerOffset = getHeaderOffset();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const fromTop = window.scrollY + headerOffset + 4;

        let current = sectionMap[0];
        let maxVisiblePixels = 0;

        sectionMap.forEach((item) => {
            if (item.section.offsetTop <= fromTop) {
                current = item;
            }

            const rect = item.section.getBoundingClientRect();
            const visibleTop = Math.max(rect.top, headerOffset);
            const visibleBottom = Math.min(rect.bottom, viewportHeight);
            const visiblePixels = Math.max(0, visibleBottom - visibleTop);

            if (visiblePixels > maxVisiblePixels) {
                maxVisiblePixels = visiblePixels;
                current = item;
            }
        });

        activateLink(current.hash);
    };

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("href");
            if (!target || target === "#") return;
            if (!sectionMap.some((item) => item.hash === target)) return;

            // Keep active state immediate while preserving native hash navigation.
            activateLink(target);
        });
    });

    window.addEventListener("hashchange", () => {
        const { hash } = window.location;
        if (!hash || !sectionMap.some((item) => item.hash === hash)) return;
        activateLink(hash);
    });

    window.addEventListener("scroll", selectByScrollPosition, { passive: true });
    window.addEventListener("resize", () => {
        syncAnchorOffset();
        selectByScrollPosition();
    });
    window.addEventListener("load", () => {
        syncAnchorOffset();
        selectByScrollPosition();
    });

    if (window.location.hash && sectionMap.some((item) => item.hash === window.location.hash)) {
        activateLink(window.location.hash);
    }

    syncAnchorOffset();
    selectByScrollPosition();
})();

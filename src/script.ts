interface nav_HTMLButtonElement extends HTMLButtonElement {
    showTargetSelector: string | undefined;
}

const about_nav: nav_HTMLButtonElement = window.document.querySelector("#about_nav") as nav_HTMLButtonElement;
const projects_nav: nav_HTMLButtonElement = window.document.querySelector("#projects_nav") as nav_HTMLButtonElement;
const contacts_nav: nav_HTMLButtonElement = window.document.querySelector("#contacts_nav") as nav_HTMLButtonElement;
about_nav.addEventListener("click", navigateCallback, false);
projects_nav.addEventListener("click", navigateCallback, false);
contacts_nav.addEventListener("click", navigateCallback, false);

about_nav.showTargetSelector = "#about";
projects_nav.showTargetSelector = "#projects";
contacts_nav.showTargetSelector = "#contacts";
const targetSelectors: string[] = [
    about_nav.showTargetSelector,
    projects_nav.showTargetSelector,
    contacts_nav.showTargetSelector
];

function navigateCallback(ctx: Event): void {
    document.querySelectorAll("header nav ul li button").forEach((element: Element): void => {
        (element as HTMLElement).style.backgroundColor = "#2f5d88";
    });
    const target: nav_HTMLButtonElement = ctx.currentTarget as nav_HTMLButtonElement;
    target.style.backgroundColor = "#4978ab";
    targetSelectors.forEach((selector: string): void => {
        const item: HTMLElement = document.querySelector(selector) as HTMLElement;
        item.style.display = "none";
        if (selector.localeCompare(target.showTargetSelector as string) === 0) {
            item.style.display = "block";
        }
    });
}


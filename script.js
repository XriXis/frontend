const about_nav = window.document.querySelector("#about_nav");
const projects_nav = window.document.querySelector("#projects_nav");
const contacts_nav = window.document.querySelector("#contacts_nav");
about_nav.addEventListener("click", navigateCallback, false);
projects_nav.addEventListener("click", navigateCallback, false);
contacts_nav.addEventListener("click", navigateCallback, false);
about_nav.showTargetSelector = "#about";
projects_nav.showTargetSelector = "#projects";
contacts_nav.showTargetSelector = "#contacts";
targetSelectors = [
    about_nav.showTargetSelector,
    projects_nav.showTargetSelector,
    contacts_nav.showTargetSelector
];
function navigateCallback(ctx){
    document.querySelectorAll("header nav ul li button").forEach(element => {
        element.style.backgroundColor = "#2f5d88";
    });
    ctx.currentTarget.style.backgroundColor = "#4978ab";
    targetSelectors.forEach(selector => {
        const item = document.querySelector(selector);
        item.style.display = "none";   
        if (selector.localeCompare(ctx.currentTarget.showTargetSelector)===0){
            item.style.display = "block";
        }     
    });
}


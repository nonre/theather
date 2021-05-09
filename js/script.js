const menuBtn = document.querySelector(".menu-btn");
const siteList = document.querySelector(".main-nav__list");
const socialsList = document.querySelector(".header__socials-container");
const socialsNav = socialsList.cloneNode(true);

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("_open");
    siteList.classList.toggle("_active");
    document.body.classList.toggle("lock");
    if (siteList.classList.contains("_active") && siteList.contains(socialsNav) === false) {
        const listItem = document.createElement('li');
        listItem.classList.add('main-nav__list-item');
        siteList.append(listItem);
        listItem.append(socialsNav);
    }
});

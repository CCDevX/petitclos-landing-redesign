import "./index.scss";
import { loadPage } from "./common/JavaScript/helper/navigation-helper";
import { initPage } from "./common/JavaScript/helper/page-init";
import { pageConfig } from "./common/JavaScript/config/page-config";

const menuBtn = document.querySelector("#menu-icon");
const topNav = document.querySelector(".top-nav");

const initNavMenu = () => {
  const logoUrl = new URL("./assets/img/logo.png", import.meta.url).href;
  const img = document.querySelector("#logo");
  img.src = logoUrl;
  const navLinks = topNav.querySelectorAll(".menu-list li a");
  bindLinkEvents(navLinks);

  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.innerHTML = topNav.innerHTML;

  const mobileNavLink = mobileMenu.querySelectorAll("ul li a");
  bindLinkEvents(mobileNavLink);

  mobileNavLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove "active" class from all navigation links
      mobileNavLink.forEach((el) => el.classList.remove("active"));

      // Add "active" class to the clicked link
      e.currentTarget.classList.add("active");

      // Load the corresponding page based on data-page attribute
      const page = e.currentTarget.getAttribute("data-page");
      loadPage(page, pageConfig, initPage);
    });
  });

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      console.log("enter resize");
      mobileMenu.classList.remove("active");
    }
  });
};

const bindLinkEvents = (links) => {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      links.forEach((el) => el.classList.remove("active"));

      e.currentTarget.classList.add("active");

      const page = e.currentTarget.getAttribute("data-page");
      loadPage(page, pageConfig, initPage);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initNavMenu();
  loadPage("home", pageConfig, initPage); // Load home page by default
});

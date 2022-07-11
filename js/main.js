// changing the color of header according to the window scroll
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".navbar ul li a");
let menu_links = document.querySelectorAll(".menu ul li a");
window.addEventListener("scroll", () => {
  let user_position = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      user_position >= section.offsetTop - 100 &&
      user_position <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.id === link.className.toLocaleLowerCase()) {
          removeactive(links);
          setactive(link);
        }
      });
      menu_links.forEach((link) => {
        if (section.id === link.className.toLocaleLowerCase()) {
          removeactive(menu_links);
          setactive(link);
        }
      });
    }
  });
});
function removeactive(links) {
  links.forEach((element) => {
    element.classList.remove("active");
  });
}
function setactive(link) {
  link.classList.add("active");
}
// opening the menu with a click
let menu = document.querySelector(".navbar .container .menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// animation function
function animate(parent, ...childs) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= parent.offsetTop - 100) {
      childs.forEach((element) => {
        let childarray = Array.from(element);
        if (childarray.length === 0) {
          element.style.cssText =
            "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
        } else {
          childarray.forEach((e) => {
            e.style.cssText =
              "opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform: scale(1);-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);";
          });
        }
      });
    }
  });
}
//adding animation
let about = document.querySelector(".about");
let about_image_first = document.querySelector(".about .container .first img");
let about_content_first = document.querySelector(
  ".about .container .first .content"
);
let about_image_second = document.querySelector(
  ".about .container .second img"
);
let about_content_second = document.querySelector(
  ".about .container .second .content"
);
animate(
  about,
  about_image_first,
  about_content_first,
  about_image_second,
  about_content_second
);
let Work = document.querySelector(".work");
let work_headding = document.querySelector(".work .heading");
let work_cards = document.querySelector(".work .work_cards");
animate(Work, work_headding, work_cards);
let testimonails = document.querySelector(".testimonials");
let testimonails_heading = document.querySelector(".testimonials .heading");
let testimonails_box_first = document.querySelector(".testimonials .first");
let testimonails_box_second = document.querySelector(".testimonials .second");
let testimonails_box_third = document.querySelector(".testimonials .third");
animate(
  testimonails,
  testimonails_heading,
  testimonails_box_first,
  testimonails_box_second,
  testimonails_box_third
);
let price = document.querySelector(".pricing");
let price_heading = document.querySelector(".pricing .heading");
let price_tags = document.querySelector(".pricing .prices");
animate(price, price_heading, price_tags);
let blog = document.querySelector(".blog-entries");
let blog_heading = document.querySelector(".blog-entries .heading");
let blog_content = document.querySelector(".blog-entries .blogs");
animate(blog, blog_heading, blog_content);
// add increasing number when up to specefic offset
let section = document.querySelector(".numbers");
let nums = document.querySelectorAll(".number strong");
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > section.offsetTop - 200) {
    if (!started) {
      nums.forEach((strong) => startcount(strong));
    }
    started = true;
  }
});
function startcount(ele) {
  let goal = ele.dataset.goal;
  let counting = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML == goal) {
      clearInterval(counting);
    }
  }, 2000 / goal);
}

let menu = document.querySelector(".navigation .container .menu");
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

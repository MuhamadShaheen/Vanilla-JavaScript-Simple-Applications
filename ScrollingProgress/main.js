let scroller = document.querySelector(".scroller");
let fullHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function() {
    scroller.style.width = `${(document.documentElement.scrollTop / fullHeight) * 100}%`;
}
    let toggler = document.querySelector(".menu");
    let close = document.querySelector(".close");
    let nav = document.querySelector("nav");
    console.log(toggler);
    toggler.onclick = function() {
        console.log("clicked");
        nav.classList.add("open");
    }

    close.onclick = function() {
        nav.classList.remove("open");
    }
    
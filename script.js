// navbar sticky effect code

window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("home").className = "sticky";
    } else {
        document.getElementById("home").className = "";
    }
}

// hamburger code

document.querySelector(".hamburger").addEventListener("click", (e) => {

    document.querySelector(".navigation").classList.toggle("abdullah");
});


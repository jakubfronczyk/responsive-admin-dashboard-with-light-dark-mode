const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".theme-toggler")


//show sidebar
menuBtn.addEventListener("click",() => {
    sideMenu.classList.toggle("active");
})
//close sidebar
closeBtn.addEventListener("click",() => {
    sideMenu.classList.toggle("active");
})

//change theme
themeToggler.addEventListener("click",() => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:first-child').classList.toggle('active');
    themeToggler.querySelector('span:last-child').classList.toggle('active');
})
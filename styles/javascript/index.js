const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close");
const themeToggle = document.querySelector(".theme-toggle")

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    themeToggle.querySelector('img:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('img:nth-child(2)').classList.toggle('active');
})
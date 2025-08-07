window.addEventListener("scroll", () => {
    if (window.scrollY > 700){
        document.querySelector(".menu").classList.add("menu-fixed")
        document.querySelector(".scroll-top").style.transform = "translateX(0)"
    }else{
        document.querySelector('.menu').classList.remove('menu-fixed')
        document.querySelector(".scroll-top").style.transform = "translateX(100px)"
    }
})
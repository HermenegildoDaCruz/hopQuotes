window.addEventListener("scroll", () => {
    if (window.scrollY > 900){
        document.querySelector(".scroll-top").style.transform = "translateX(0)"
    }else{
        document.querySelector(".scroll-top").style.transform = "translateX(100px)"
    }
})
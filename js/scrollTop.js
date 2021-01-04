window.onscroll = () => {
    scroll()
}

function scroll(){
    const btnTop = window.document.querySelector(".scrollTop")

    if (document.documentElement.scrollTop > 350) {
        btnTop.classList.add("visible")

        btnTop.addEventListener("click", () => {
            document.documentElement.scrollTop = 0
        })
    } else {
        btnTop.classList.remove("visible")
    }
}
menu.onclick = function myFunction(){
    let x = document.getElementById('myTopnav')

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function (event){
        event.preventDefault();
        const blockID = anchor.getAttribute("href")
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = + new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        if (pageYOffset > 100) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

console.log('120/150')
const circles = document.querySelectorAll(".circle");

for (let i = 0; i < 5; i++) {
    let circle = circles[i];
    animateCircles(circle);
    console.log(new Date().getSeconds());
}

function addFinishHandler(anim, el) {
    anim.addEventListener('finish', function (e) {
        animateCircles(el);
    }, false)
}

function animateCircles(circle) {

    let maxY = document.documentElement.clientHeight,
        maxX = document.documentElement.clientWidth;

    circle.keyframes = [{
        opacity: 0,
        transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"

    }, {
        opacity: .2,
        transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
    }, {
        opacity: 0,
        transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
    }];

    circle.animProps = {
        duration: 10000 + Math.random() * 15000,
        easing: "ease-out",
        iterations: 1
    };

    let animationPlayer = circle.animate(circle.keyframes, circle.animProps);
    addFinishHandler(animationPlayer, circle);
}
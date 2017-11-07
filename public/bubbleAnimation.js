$(window).on('load', function () {

    const circles = $(".circle");
    const square = $(".square");

    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        animateCircles(circle);
    }
    thissquare();
    setInterval(thissquare, 10000);

    function addFinishHandler(anim, el) {
        anim.addEventListener('finish', function (e) {
            animateCircles(el);
        }, false)
    }

    function thissquare() {
        animateSquare();
        square.playKeyframe('animatesquare 10s infinite');

    }

    function animateCircles(circle) {
        let maxY = document.documentElement.clientHeight,
            maxX = document.documentElement.clientWidth;
        circle.keyframes = [{
            opacity: 0,
            transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)",
            "-webkit-transform": "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"

        }, {
            opacity: .2,
            transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)",
            "-webkit-transform": "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
        }, {
            opacity: 0,
            transform: "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)",
            "-webkit-transform": "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
        }];

        circle.animProps = {
            duration: 10000 + Math.random() * 15000,
            easing: "ease-out",
            iterations: 1
        };

        let animationPlayer = circle.animate(circle.keyframes, circle.animProps);
        addFinishHandler(animationPlayer, circle);
    }

    function animateSquare() {
        let maxY = document.documentElement.clientHeight,
            maxX = document.documentElement.clientWidth;

        $.keyframe.define([{
            name: 'animatesquare',
            '0%': {
                'opacity': 0,
                'transform': "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
            },
            '30%': {
                'opacity': 0.2,
                'transform': "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
            },
            '100%': {
                'opacity': 0,
                'transform': "translate3d(" + (Math.random() * maxX) + "px," + (Math.random() * maxY) + "px, 0px)"
            },
        }])
    }

});
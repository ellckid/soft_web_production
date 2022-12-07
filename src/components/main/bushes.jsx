
import React from "react";
import classes from '../main/css/bushes.module.css';


function Bushes() {
    const leaf = [
        'leaf1',
        'leaf2',
        'leaf3',
        'leaf4',
        'leaf5'
    ]

    function animate(options) {

        var start = performance.now();

        requestAnimationFrame(function animate(time) {
            // timeFraction от 0 до 1
            var timeFraction = (time - start) / options.duration;
            if (timeFraction > 1) timeFraction = 1;
            // текущее состояние анимации
            var progress = options.timing(timeFraction)
            options.draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    }

    function makeEaseInOut(timing) {
        return function (timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        }
    }
    function ttiming(timeFraction) {
        return Math.pow(timeFraction, 2);
    }
    let EaseInOut = makeEaseInOut(ttiming);

    function rotation(sid) {
        animate({
            duration: 1800,
            timing: EaseInOut,
            draw: function (progress) {

                sid.map((item) => {
                    let elem = document.getElementById(item);
                    elem.style.transform = `rotate(${progress * 720}deg)`;
                })

            }
        });
    };


    return (
        <div className={classes.bushes_container}>
            <img src="/assets/img/leaf.png" id='leaf1' onClick={() => { rotation(leaf) }} className={classes.leaf1} />
            <img src="/assets/img/leaf.png" id='leaf2' onClick={() => { rotation(leaf) }} className={classes.leaf2} />
            <img src="/assets/img/leaf.png" id='leaf3' onClick={() => { rotation(leaf) }} className={classes.leaf3} />
            <img src="/assets/img/leaf.png" id='leaf4' onClick={() => { rotation(leaf) }} className={classes.leaf4} />
            <img src="/assets/img/leaf.png" id='leaf5' onClick={() => { rotation(leaf) }} className={classes.leaf5} />

            <img className={classes.bushes} src="/assets/img/bush.png"></img>
        </div>

    )
}

export default Bushes;
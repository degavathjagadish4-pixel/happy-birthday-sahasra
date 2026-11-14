/* =====================================
   SAHASRA BIRTHDAY CARD
===================================== */


/* =====================================
   GET ELEMENTS
===================================== */

const music =
    document.getElementById("birthdayMusic");

const lights =
    document.getElementById("fairyLights");

const balloons =
    document.getElementById("balloons");


/* =====================================
   CREATE FAIRY LIGHTS
===================================== */

for (let i = 0; i < 30; i++) {

    const bulb =
        document.createElement("div");

    bulb.className = "bulb";

    bulb.style.animationDelay =
        Math.random() * 2 + "s";

    lights.appendChild(bulb);
}


/* =====================================
   START BIRTHDAY
===================================== */

function startBirthday() {

    /* Start music */

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Music waiting for permission.");
    });


    /* Turn on lights */

    lights.classList.add("on");


    /* Scene 1 → Scene 2 */

    showScene(2);


    /*
        TIMELINE

        0 sec    = Lights
        4 sec    = Balloons
        9 sec    = Birthday name
        14 sec   = Message
        29 sec   = Photo 1
        35 sec   = Photo 2
        41 sec   = Photo 3
        47 sec   = Photo 4
        53 sec   = Photo 5
        59 sec   = Photo 6
        65 sec   = Final
    */


    setTimeout(() => {

        createBalloons();

        showScene(5);

    }, 4000);


    setTimeout(() => {

        showScene(5);

    }, 9000);


    /*
        MESSAGE NOW LASTS
        FROM 14s TO 29s
        = 15 SECONDS
    */

    setTimeout(() => {

        showScene(5);

    }, 14000);


    /* PHOTO 1 */

    setTimeout(() => {

        showScene(6);

    }, 29000);


    /* PHOTO 2 */

    setTimeout(() => {

        showScene(7);

    }, 35000);


    /* PHOTO 3 */

    setTimeout(() => {

        showScene(8);

    }, 41000);


    /* PHOTO 4 */

    setTimeout(() => {

        showScene(9);

    }, 47000);


    /* PHOTO 5 */

    setTimeout(() => {

        showScene(10);

    }, 53000);


    /* PHOTO 6 */

    setTimeout(() => {

        showScene(11);

    }, 59000);


    /* FINAL */

    setTimeout(() => {

        showScene(12);

        createConfetti();

    }, 65000);

}


/* =====================================
   SHOW SCENE
===================================== */

function showScene(number) {

    document
        .querySelectorAll(".scene")
        .forEach(scene => {

            scene.classList.remove("active");

        });


    const scene =
        document.getElementById(
            "scene" + number
        );


    if (scene) {

        scene.classList.add("active");

    }

}


/* =====================================
   CREATE BALLOONS
===================================== */

function createBalloons() {

    const colors = [

        "#ff477e",
        "#ff719f",
        "#ffd166",
        "#8c7cff",
        "#65d6ff",
        "#d66cff",
        "#ff9f43"

    ];


    for (let i = 0; i < 30; i++) {

        const balloon =
            document.createElement("div");


        balloon.className =
            "balloon";


        balloon.style.left =
            Math.random() * 100 + "vw";


        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        balloon.style.animationDelay =
            Math.random() * 4 + "s";


        balloons.appendChild(balloon);


        setTimeout(() => {

            balloon.remove();

        }, 12000);

    }

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const colors = [

        "#ff477e",
        "#ffd166",
        "#8c7cff",
        "#65d6ff",
        "#ffffff",
        "#ff9f43"

    ];


    for (let i = 0; i < 150; i++) {

        const piece =
            document.createElement("div");


        piece.style.position =
            "fixed";


        piece.style.width =
            "8px";


        piece.style.height =
            "12px";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.top =
            "-20px";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.zIndex =
            "100";


        piece.style.borderRadius =
            "2px";


        document.body.appendChild(piece);


        const duration =
            3000 +
            Math.random() * 4000;


        const rotation =
            Math.random() * 1000;


        piece.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {

                    transform:
                        `translateY(110vh)
                         rotate(${rotation}deg)`,

                    opacity: 0

                }

            ],

            {

                duration: duration,

                easing:
                    "cubic-bezier(.2,.7,.3,1)"

            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

    const container =
        document.getElementById("hearts");


    setInterval(() => {

        const heart =
            document.createElement("span");


        heart.innerHTML = "❤️";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            10 +
            Math.random() * 20 +
            "px";


        heart.style.opacity =
            .7;


        heart.style.zIndex =
            "4";


        container.appendChild(heart);


        heart.animate(

            [

                {
                    transform:
                        "translateY(0)",

                    opacity: 0
                },

                {

                    transform:
                        "translateY(-110vh)",

                    opacity: .8

                },

                {

                    transform:
                        "translateY(-120vh)",

                    opacity: 0

                }

            ],

            {

                duration:
                    6000 +
                    Math.random() * 4000,

                easing:
                    "linear"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 700);

}


createHearts();


/* =====================================
   EXIT
===================================== */

function exitBirthday() {

    /* Stop music */

    music.pause();

    music.currentTime = 0;


    /* Remove balloons */

    balloons.innerHTML = "";


    /* Turn off lights */

    lights.classList.remove("on");


    /* Hide every normal scene */

    document
        .querySelectorAll(".scene")
        .forEach(scene => {

            scene.classList.remove("active");

        });


    /* Show exit screen */

    document
        .getElementById("exitScene")
        .classList.add("active");


    /*
        Browsers normally do NOT allow
        JavaScript to close a tab that
        was opened manually.

        So instead we show a nice
        goodbye screen.
    */

}
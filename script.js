/* Hitung Hari Jadian */

const jadian =
new Date("2026-06-18");

const sekarang =
new Date();

const selisih =
Math.floor(
(sekarang-jadian)
/
(1000*60*60*24)
);

document.getElementById(
"dayCounter"
).innerHTML = selisih;

/* Bintang */

for(let i=0;i<300;i++){

    const star =
    document.createElement("div");

    star.className="star";

    let size =
    Math.random()*3;

    star.style.width =
    size+"px";

    star.style.height =
    size+"px";

    star.style.left =
    Math.random()*window.innerWidth+"px";

    star.style.top =
    Math.random()*window.innerHeight+"px";

    star.style.animationDelay =
    Math.random()*3+"s";

    document.body.appendChild(star);
}

/* Meteor */

function createMeteor(){

    const meteor =
    document.createElement("div");

    meteor.className =
    "meteor";

    meteor.style.left =
    Math.random()*window.innerWidth+"px";

    meteor.style.top =
    Math.random()*250+"px";

    document.body.appendChild(meteor);

    setTimeout(()=>{
        meteor.remove();
    },2000);
}

setInterval(createMeteor,1200);

/* Hati */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className =
    "heart";

    heart.innerHTML =
    "❤️";

    heart.style.left =
    Math.random()*window.innerWidth+"px";

    heart.style.fontSize =
    (20+Math.random()*40)+"px";

    heart.style.animationDuration =
    (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);
}

setInterval(createHeart,300);

/* Musik */

function playMusic(){

    document
    .getElementById("music")
    .play();

}

/* Pesan Rahasia */

function openLetter(){

    document
    .getElementById("letter")
    .style.display="block";

}

/* Alasan Sayang */

const reasons = [

"❤️ Karena senyummu membuat hariku lebih indah",
"💕 Karena kamu selalu ada untukku",
"🌙 Karena kamu menenangkan pikiranku",
"✨ Karena kamu adalah rumah ternyaman",
"🥰 Karena aku bahagia saat bersamamu",
"🌹 Karena kamu spesial",
"💖 Karena kamu adalah Raisa"

];

let index = 0;

setInterval(()=>{

    document
    .getElementById("reason")
    .innerHTML =
    reasons[index];

    index++;

    if(index >= reasons.length){
        index = 0;
    }

},3000);
let templateText = ['loading','подождите, пока не готово.','ロシアのデジタル'];
let templateFont = ['Cyberpunk','F77 Minecraft','Nico Moji'];

let label = document.getElementById('changing');
let circle_el = document.getElementById('container');
let circle_svg = document.getElementById('circle_svg');

let i = 0;
let r = 0;
var x = 0;
var y = 0;

setInterval(function (){
    if(i >= templateText.length){
        i=0;
    }

    r = Math.ceil(Math.random()*100);

    label.style.fontFamily = templateFont[i];
    if (r>75 && i === 0){
        label.style.fontFamily = 'Webdings';
    }
    label.innerHTML = templateText[i];
    i++;
},2000);


let centralize = function (){
    //gen container
    x = $(window).height()/2-circle_el.offsetHeight/2;
    circle_el.style.marginTop = x + 'px';
    //circle svg
    y = $(window).width()/2-400;
    circle_svg.style.marginLeft = y + 'px';


};

centralize();

window.addEventListener("resize",centralize);

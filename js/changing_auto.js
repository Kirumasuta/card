var templateText = ['loading','подождите, пока не готово.','ロシアのデジタル'];
var templateFont = ['Monoton-Regular','F77 Minecraft','Nico Moji'];

var label = document.getElementById('changing');
var circle_el = document.getElementById('container');

var i = 0;

setInterval(function (){
    if(i >= templateText.length)
    {i=0;}

    label.style.fontFamily = templateFont[i];
    label.innerHTML = templateText[i];
    i++;
},2000);


// var centralize = function (){
//     // circle_el.style.marginLeft = ($(window).width() - circle_el.offsetWidth)/2 + 'px';
//     circle_el.style.marginTop = ($(window).height()-75)/2 + 'px';
// };
//
// centralize();
//
// window.addEventListener("resize",centralize);

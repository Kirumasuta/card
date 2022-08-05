var templateText = ['loading','подождите, пока не готово.','ロシアのデジタル'];
var templateFont = ['Nico Moji','F77 Minecraft','Nico Moji'];
var label = document.getElementById('changing');

var i = 0;

setInterval(function (){
    if(i > templateText.length)
    {i=0;}

    label.style.fontFamily = templateFont[i];
    label.innerHTML = templateText[i];
    i++;
},2500);
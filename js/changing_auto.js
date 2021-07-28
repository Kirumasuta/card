var fonts = ['Webdings','Parchment', 'Poor Richard','Maiandra GD','a_AlternaSw','Wingdings'];


var i = 0;

setInterval(function (){
    if(i > fonts.length)
    {i=0;}
    label.style.fontFamily = fonts[i];
    i++;
    centralize();
},300);
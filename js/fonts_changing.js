var label = document.getElementById('label');


var centralize = function (){
    label.style.marginLeft = ($(window).width() - label.offsetWidth)/2 + 'px';
};

centralize();

window.addEventListener("resize",centralize);
var i = 0;
label.addEventListener("mouseenter",function (){
    //label.css('font-family','Webdings');
    var fonts = ['Webdings','Parchment', 'Poor Richard','Maiandra GD','a_AlternaSw','Wingdings'];

    if(i > fonts.length)
    {i=0;}
    label.style.fontFamily = fonts[i];
    i++;
    centralize();
});

label.addEventListener("mouseleave",function (){
    //label.css('font-family','MariageAntD');
    label.style.fontFamily = 'MariageAntD';
    centralize();
});

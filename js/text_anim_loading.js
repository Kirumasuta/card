var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
var rules = document.createTextNode('@-webkit-keyframes move {'+
    'to { transform: translateX(-100%); }'+
    '}');
cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);

//__________________

var obj_anim_1 = document.getElementById('container');
// var obj_anim_2 = document.getElementById('contact');
var obj_track = document.getElementById('moving');


let offset_y = document.getElementById('container');
let offset_x = document.getElementById('circle_svg');

document.addEventListener('mousemove', (event) => {

    //shake anim
    if (event.clientX < obj_track.getBoundingClientRect().x+obj_track.getBoundingClientRect().width
            && event.clientX > obj_track.getBoundingClientRect().x
        &&
        event.clientY < obj_track.getBoundingClientRect().y+obj_track.getBoundingClientRect().height
            && event.clientY > obj_track.getBoundingClientRect().y){
        obj_anim_1.style.animation = 'shake 0.5s infinite';
        speed = 0.06;
        // obj_anim_2.style.animation = 'shake 0.5s infinite';
    }
    else if (obj_anim_1.style.animation !== null){
        obj_anim_1.style.animation = '';
        speed = 0.02;
        // obj_anim_2.style.animation = '';
    }
    //shake anim

});
var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
var rules = document.createTextNode('@-webkit-keyframes move {'+
    'to { transform: translateX(-100%); }'+
    '}');
cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);

//__________________

var obj_anim = document.getElementById('container');
var obj_track = document.getElementById('moving');

document.addEventListener('mousemove', (event) => {
    if (event.clientX < obj_track.getBoundingClientRect().x+obj_track.getBoundingClientRect().width
            && event.clientX > obj_track.getBoundingClientRect().x
        &&
        event.clientY < obj_track.getBoundingClientRect().y+obj_track.getBoundingClientRect().height
            && event.clientY > obj_track.getBoundingClientRect().y){
        obj_anim.style.animation = 'shake 0.5s infinite';
    }
    else if (obj_anim.style.animation !== null){
        obj_anim.style.animation = '';
    }

});
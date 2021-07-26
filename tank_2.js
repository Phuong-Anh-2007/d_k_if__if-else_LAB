let tank = document.getElementById('tank');
let boom = document.getElementById('boom');

function click_top() {
    let top_tank=parseInt(tank.style['top']);
    let left_tank = parseInt(tank.style['left']);
    let top_boom = parseInt(boom.style['top']);
    let left_boom = parseInt(boom.style['left']);
    tank.style['top']= top_tank - 19 +'px';
    top_tank=parseInt(tank.style['top']);
    left_tank = parseInt(tank.style['left']);

    if ((top_tank == top_boom) && (left_boom==left_tank)) {
        tank.style.backgroundImage = 'url("img/explosion.png")';
        tank.style.zIndex='1';
    }


}  

function click_bottom() {
    let top_tank=parseInt(tank.style['top']);
    let left_tank = parseInt(tank.style['left']);
    let top_boom = parseInt(boom.style['top']);
    let left_boom = parseInt(boom.style['left']);
    tank.style['top']= top_tank + 19 +'px';
    top_tank=parseInt(tank.style['top']);
    left_tank = parseInt(tank.style['left']);

    if ((top_tank == top_boom) && (left_boom==left_tank)) {
        tank.style.backgroundImage = 'url("img/explosion.png")';
        tank.style.zIndex='1';
    }


}

function click_left() {
    let top_tank=parseInt(tank.style['top']);
    let left_tank = parseInt(tank.style['left']);
    let top_boom = parseInt(boom.style['top']);
    let left_boom = parseInt(boom.style['left']);
    tank.style['left']= left_tank - 19 +'px';
    top_tank=parseInt(tank.style['top']);
    left_tank = parseInt(tank.style['left']);

    if ((top_tank == top_boom) && (left_boom==left_tank)) {
        tank.style.backgroundImage = 'url("img/explosion.png")';
        tank.style.zIndex='1';
    }


}



function click_right() {
    let top_tank=parseInt(tank.style['top']);
    let left_tank = parseInt(tank.style['left']);
    let top_boom = parseInt(boom.style['top']);
    let left_boom = parseInt(boom.style['left']);
    tank.style['left']= left_tank + 19 +'px';
    top_tank=parseInt(tank.style['top']);
    left_tank = parseInt(tank.style['left']);

    if ((top_tank == top_boom) && (left_boom==left_tank)) {
        tank.style.backgroundImage = 'url("img/explosion.png")';
        tank.style.zIndex='1';
    }


}






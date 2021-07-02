var last_position_of_x, last_position_of_y;
var current_position_of_mouse_x, current_position_of_mouse_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var w = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (w < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";


}
canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e) {
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("you touched")
}

canvas.addEventListener("touchmove", my_touch_move);

function my_touch_move(e) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}
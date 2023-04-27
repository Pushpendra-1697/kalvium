var square = document.querySelector("#drag-square");
var target = document.querySelector("#drop-target");
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
square.onmousedown = () => {
    dragElement();
};
var dragElement = (e) => {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmousemove = moveSquare; //when mouse moves
    document.onmouseup = stopSquare;//when mouse stop
};
var moveSquare = (e) => {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the new square position
    square.style.top = (square.offsetTop - pos2) + "px";
    square.style.left = (square.offsetLeft - pos1) + "px";
    if (isOverlapping(square, target)) { // for checking squre is over the target or not?
        target.style.backgroundColor = "green";
    } else {
        target.style.backgroundColor = "blue";
    }
};
var stopSquare = () => {
    document.onmouseup = null;
    document.onmousemove = null;
    // Check if the square is over the target
    if (isOverlapping(square, target)) {
        alert("Square dropped over target!");
    } else {
        alert("Square dropped not over target!");
    }
};
var isOverlapping = (ele1, ele2) => {
    var rect1 = ele1.getBoundingClientRect();
    var rect2 = ele2.getBoundingClientRect();
    // condition for elements overlap
    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
};

//right: 440px 
// left: 340px
//true
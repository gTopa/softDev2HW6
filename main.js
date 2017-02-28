var svg=document.getElementById("vimage");
var x=-1
var y=-1
var makeCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    var c = document.createElementNS("https://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",mouseX);
    c.setAttribute("cy",mouseY);
    c.setAttribute("r", "100");
    c.setAttribute("fill","yellow");
    document.getElementById("vimage").appendChild(c);
    console.log("hi");    
    if(x!=-1&&y!=-1){
	var a = document.createElementNS("https://www.w3.org/2000/svg","line");
	a.setAttribute("x1",x);
	a.setAttribute("y1",y);
	a.setAttribute("x2",mouseX);
	a.setAttribute("y2",mouseY);
	document.getElementById("vimage").appendChild(a);
	console.log("hi");
    };
    x=mouseX;
    y=mouseY;
};

svg.addEventListener("click", makeCircle);

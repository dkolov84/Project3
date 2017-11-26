var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a href='images/igallery/image0.JPG' ><img alt='Moon over Michigan' src='images/igallery/image0.JPG' height='225' width='300' border='0' /></a>"; //a linked image
    items[1]="<a href='images/igallery/image1.JPG'><img alt='Castle Rock Lake' src='images/igallery/image1.JPG' height='225' width='300' border='0' /></a>"; //a linked image
    items[2]="<a href='images/igallery/image2.JPG'><img alt='Apple River' src='images/igallery/image2.JPG' height='225' width='300' border='0' /></a>"; //a linked image
    items[3]="<a href='images/igallery/image3.JPG'><img alt='Campfire' src='images/igallery/image3.JPG' height='225' width='300' border='0' /></a>"; //a linked image
    items[4]="<a href='images/igallery/image4.JPG'><img alt='Vegas Baby!' src='images/igallery/image4.JPG' height='225' width='300' border='0' /></a>"; //a linked image
    items[5]="<a href='images/igallery/image5.JPG'><img alt='Vegas Baby2!' src='images/igallery/image5.JPG' height='225' width='300' border='0' /></a>"; //a linked image
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->

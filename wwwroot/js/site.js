var divxPos = 0;
var sube = true;
window.onload = function(){
    load();
    //createDrivingDirectionsMap();
}

function load()
{
    var test = document.getElementById("testElement");    
    test.style.left = divxPos++ + 'px';
    subeBaja();
    setTimeout(() => load(), 50);
}

function subeBaja()
{
    var progressBar = document.getElementById("progressBar");
    progressBar.value = (sube) ? progressBar.value + 1 : progressBar.value - 1;
    if (progressBar.value == 100)
        sube = false;
    if (progressBar.value == 0)
        sube = true;
    
}
function top() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.top)-5+'px';
}

function dow() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.top)+5+'px';
}

function right() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.left)+5+'px';
}

function left() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.left)-5+'px';
}

function moveSelection(evt) {
    switch (evt.key) {
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            top();
            break;
        case 40:
            dow();
            break;
    }
}

function doarr() {
    window.addEventListener("keydown",moveSelection);
}
function top_() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.top)-5+'px';
}

function dow_() {
    let mg=document.getElementById("map");
    mg.style.top=parseInt(mg.style.top)+5+'px';
}

function right_() {
    let mg=document.getElementById("map");
    mg.style.left=parseInt(mg.style.left)+5+'px';
}

function left_() {
    let mg=document.getElementById("map");
    mg.style.left=parseInt(mg.style.left)-5+'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            left_();
            break;
        case 39:
            right_();
            break;
        case 38:
            top_();
            break;
        case 40:
            dow_();
            break;
    }
}

function doarr() {
    window.addEventListener('keydown',moveSelection);
}
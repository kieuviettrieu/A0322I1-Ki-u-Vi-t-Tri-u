function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.setImage=function(image)
    {
        this.image=image;
    }

    this.getHeroElement = function(){
        return '<img onclick="onimage()" width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }


    this.moveLeft=function () {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }

    this.moveTop = function(){
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

    this.moveDow = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start_right(){
    clearTimeout(setTimeout(start_left,500))
    if(hero.left < window.innerWidth - hero.size-30){
        hero.moveRight();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start_right, 500);
    }
    else
    {
        clearTimeout(setTimeout(start_right,500));
    }
}


function start_left(){
    clearTimeout(setTimeout(start_right,500));
    if(hero.left> 10)
    {
        hero.moveLeft();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start_left, 500);
    }
    else
    {
        clearTimeout(setTimeout(start_left,500))
    }
}

function start_top(){
    clearTimeout(setTimeout(start_right,500));
    if(hero.top> 10)
    {
        hero.moveTop();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start_top, 500);
    }
    else
    {
        clearTimeout(setTimeout(start_top,500))
    }
}

function start_dow(){
    clearTimeout(setTimeout(start_right,500));
    if(hero.top<window.innerHeight-100)
    {
        hero.moveDow();
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start_dow, 500);
    }
    else
    {
        clearTimeout(setTimeout(start_dow,500))
    }
}



function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            hero.setImage("doremon.jpg")
            start_left();
            break;
        case 39:
            hero.setImage("naruto.jpg")
            start_right();
            break;
        case 38:
            hero.setImage("pikachu.png")
            start_top();
            // top_();
            break;
        case 40:
            hero.setImage('conan.jpg')
            start_dow();
            // dow_();
            break;
    }
}


function doarr() {
    window.addEventListener('keydown',moveSelection);
}
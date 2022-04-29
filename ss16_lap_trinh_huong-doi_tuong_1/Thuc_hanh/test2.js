function ondate()
{
    let Mydate=function (day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;

        this.setDate=function (day,month,year) {
            this.day=day;
            this.month=month;
            this.year=year;
        }

        this.setDay=function (day) {
            this.day=day;
        }

        this.setMonth=function (month) {
            this.month=month;
        }

        this.setYear=function (year) {
            this.year=year;
        }

        this.getDay=function () {
            return this.day;
        }

        this.getMonth=function () {
            return this.month;
        }

        this.getYear=function () {
            return this.year;
        }

        this.tostring=function () {
            return this.day+'//'+this.month+'//'+this.year;
        }
    };

    let mydate=new Mydate(24,4,2022);
    console.log(mydate.tostring());
}

function oncircle() {
    let Circle=function (radius,color) {
        this.radius=radius;
        this.color=color;

        this.setRadius=function (radius) {
            this.radius=radius;
        }

        this.setColor=function (color) {
            this.color=color;
        }

        this.getRadius=function () {
            return this.radius;
        }

        this.getColor=function () {
            return this.color;
        }

        this.getArea=function () {
            return Math.PI*this.radius*this.radius;
        }
    };

    let circle=new Circle(5,'red');
    console.log("R = "+circle.getRadius()+", thì S = "+circle.getArea())
}

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function onve() {
    let num=parseInt(document.getElementById("intN").value)
    for (let i=0; i<num; i++)
    {
        createCircle();
    }
    document.getElementById("intN").value='';
}

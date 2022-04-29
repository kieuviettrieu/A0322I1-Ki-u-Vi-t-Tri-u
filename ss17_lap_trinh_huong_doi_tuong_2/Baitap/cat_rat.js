let Rat=function (name,weight,speed,status) {
    this.names=name;
    this.weigh=weight;
    this.speed=speed;
    this.statu=status;
    this.chirp="chít, chít...";

    this.setName=function (name) {
        this.names=name;
    }

    this.getName=function () {
        return this.names;
    }

    this.setWeigh=function (weight) {
        this.weigh=weight;
    }

    this.getWeigh=function () {
        return this.weigh;
    }

    this.setSpeed=function (speed) {
        if(speed<=30)
        {
            this.speed=speed;
        }
    }

    this.getSpeed=function () {
        return this.speed;
    }

    this.setStatus=function (status) {
        this.statu=status;
    }

    this.getStatus=function () {
        return this.statu;
    }

    this.setChirp=function (chirp) {
        this.chirp=chirp;
    }

    this.getChirp=function () {
        return this.chirp;
    }

    this.to_str=function () {
        return this.names+" nặng "+this.weigh+"kg, có tốc độ "+this.speed+"km"
    }
}

let Cat=function (name,weight,speed) {
    if(speed>48)
        speed=0;

    const speed_max=48;
    this.name_=name;
    this.weight_=weight;
    this.speed_=speed;
    this.chirp_="meo, meo...";
    this.rat_;

    this.setRat=

    this.setName=function (name) {
        this.name_=name;
    }

    this.getName=function () {
        return this.name_;
    }

    this.setWeigh=function (weight) {
        this.weight_=weight;
    }

    this.getWeigh=function () {
        return this.weight_;
    }

    this.setSpeed=function (speed) {
        if(speed<=48)
        {
            this.speed_=speed;
        }
    }

    this.getSpeed=function () {
        return this.speed_;
    }

    this.maxspeed=function () {
        this.speed_=speed_max;
    }

    this.setChirp=function (chirp) {
        this.chirp_=chirp;
    }

    this.getChirp=function () {
        return this.chirp_;
    }

    this.catch_rat=function (rat) {
        if(this.speed_>rat.speed)
        {
            return true;
        }

        return false;
    }

    this.eat_rat=function (rat) {
        if(this.catch_rat(rat))
        {
            if(rat.statu)
            {
                this.weight_+=rat.getWeigh();
                rat.setWeigh(0);
                rat.setStatus(false);
                return true;
            }
        }
        return false
    }

    this.to_string=function () {
        return this.name_+" đã nặng "+this.weight_+"kg rồi,tốc độ "+this.speed_+"km";
    }
}

let rat=new Rat("Jery",4,3,true);
let cat=new Cat("Tom",12,0);

function on_tang_cat() {
    cat.setSpeed(cat.getSpeed()+5);
}

function on_max() {
    cat.maxspeed();
}

function on_bat() {
    let str="Mèo đã bắt được chuột!";
    if(cat.catch_rat(rat)===false)
    {
        str="Tốc độ mèo thấp hơn chuột!";
    }
    document.getElementById("idout").innerText=str;
}

function on_eat() {
    if(cat.catch_rat(rat)===false)
    {
        document.getElementById("idout").innerText="Chưa bắt được chuột!";
    }
    else
    if(cat.eat_rat(rat))
    {
        document.getElementById("idout").innerText="Mèo đã lên cân rồi!";
    }
    else
    {
        document.getElementById("idout").innerText="Dở quá....,ko thèm!";
    }
}

function click_me() {
    document.getElementById("idout").innerText=cat.to_string();
}

function click_rat() {
    document.getElementById("idout").innerText=rat.to_str();
}

function on_tang_rat() {
    rat.setSpeed(rat.getSpeed()+5);
}

function on_noi() {
    document.getElementById("idout").innerText=rat.getChirp();
}

function on_noi_() {
    document.getElementById("idout").innerText=cat.getChirp();
}


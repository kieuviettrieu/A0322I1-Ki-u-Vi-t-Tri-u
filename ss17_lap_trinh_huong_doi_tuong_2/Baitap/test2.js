let SwitchButton=function (status,lamp) {
    this.statu=status;
    this.lamp=lamp;
    this.bodem=0;

    this.switchOff=function()
    {
        if(this.bodem<10)
        {
            this.bodem++;
            this.statu=false;
        }
    }

    this.switchOn=function () {
        if(this.bodem<10)
        {
            this.bodem++;
            this.statu=true;
        }
    }

    this.conectToLamp=function (electriclam) {
        this.lamp=electriclam;
    }

    this.Switchbutton=function () {
        if(this.bodem>=10)
        {
            document.getElementById("ido").innerText="Đèn cháy!";

        }
        else
        {
            document.getElementById("ido").innerText="Đèn bình thường!";
        }
    }
};


let ElectrucLamp=function (status) {
    this.status_=status;

    this.turnOff_=function () {
        this.status_=false;
    }

    this.turnOn_=function () {
        this.status_=true;
    }

    this.electriclamp=function () {
        return this.status_;
    }
};

let den=new ElectrucLamp(true);
let tac=new SwitchButton(true,den);

function onden() {
    tac.switchOn();
    document.getElementById("idon").innerText="Bật";
    tac.Switchbutton();
}

function offden() {
    tac.switchOff();
    document.getElementById("idon").innerText="Tắt";
    tac.Switchbutton();
}
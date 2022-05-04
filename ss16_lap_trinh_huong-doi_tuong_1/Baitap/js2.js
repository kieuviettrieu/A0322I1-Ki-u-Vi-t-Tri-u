let Mobile=function (pin) {
    this.pin=pin;
    this.array_soanthao=[];
    this.array_thuden=[];
    this.array_dagui=[];
    this.status=false;
    this.setStatus=function (status) {
        this.pin--;
        this.status=status;
    }
    this.getStatus=function () {
        this.pin--;
        return this.status;
    }
    this.sac_mobile=function () {
        pin=100;
    }

    this.gui_tin=function (tin,app) {
        this.pin--;
        this.array_dagui.push(tin);
        app.add_tin_khac(tin);
    }

    this.add_tin_khac=function (tin) {
        this.array_thuden.push(tin);
    }

    this.tin_tostring=function () {
        let str=this.array_dagui.join("<br>")
        return str;
    }

    this.thu_den=function () {
        let str=this.array_thuden.join("<br>");
        return str;
    }
}

let nokia=new Mobile(100);
let iphone=new Mobile(70);

function id_gui1() {
    let tin=document.getElementById("id_are1").value;
    if(tin!=='')
    {
        nokia.gui_tin(tin,iphone);
        document.getElementById("id_are1").value='';
        alert("Đã gửi!");
    }
    else
    {
        alert("Errol!");
    }
}


function id_dagui1() {
    if(nokia.array_dagui.length>0)
    {
        document.getElementById("id_xem1").innerHTML=nokia.tin_tostring();
    }
    else
    {
        document.getElementById("id_xem1").innerHTML="Trống!"
    }
}

function id_gui2() {
    let tin=document.getElementById("id_are2").value;
    if(tin!=='')
    {
        iphone.gui_tin(tin,nokia);
        document.getElementById("id_are2").value='';
        alert("Đã gửi!");
    }
    else
    {
        alert("Errol!");
    }
}


function id_dagui2() {
    if(iphone.array_dagui.length>0)
    {
        document.getElementById("id_xem2").innerHTML=iphone.tin_tostring();
    }
    else
    {
        document.getElementById("id_xem2").innerHTML="Trống!"
    }
}

function thuden1() {
    if(nokia.array_thuden.length>0)
    {
        document.getElementById("id_den1").innerHTML=nokia.thu_den();
    }
    else
    {
        document.getElementById("id_den1").innerHTML="Trống!"
    }
}

function thuden2() {
    if(iphone.array_thuden.length>0)
    {
        document.getElementById("id_den2").innerHTML=iphone.thu_den();
    }
    else
    {
        document.getElementById("id_den2").innerHTML="Trống!"
    }
}



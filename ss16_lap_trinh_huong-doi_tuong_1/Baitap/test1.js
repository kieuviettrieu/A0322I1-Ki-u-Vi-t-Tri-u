let Rectangle=function (dai,rong) {
    this.dai=dai;
    this.rong=rong;

    this.getDientich=function () {
        return this.dai*this.rong;
    }

    this.getChuvi=function () {
        return (this.dai+this.rong)*2;
    }

    this.vecanvas=function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.fillRect(50,100,this.dai,this.rong);
        ctx.fillStyle="red";
        ctx.fill();
    }
}


function onSub() {
    let dai=parseInt(document.getElementById("id_dai").value);
    let rong=parseInt(document.getElementById("id_rong").value);
    let retang=new Rectangle(dai,rong);
    document.getElementById("id_S").innerText="Diện tích = "+retang.getDientich()+
                                                      ", Chu vi = "+retang.getChuvi();
    retang.vecanvas();
}

let Temperature=function (do_C) {
    this.do_C=do_C;

    this.setDo_C=function (do_C) {
        this.do_C=do_C;
    }

    this.getDo_C=function () {
        return this.do_C;
    }

    this.getDo_F=function () {
        return this.do_C*1.8+32;
    }

    this.getDo_K=function () {
        return this.do_C+273.15;
    }
}

function ondo_C() {
    let doc=parseInt(document.getElementById("id_C").value);
    let tem=new Temperature(doc);
    document.getElementById("idout").innerText="Độ F = "+tem.getDo_F()+"F, Độ Kenvin = "+tem.getDo_K()+"K";
}


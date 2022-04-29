let TiVi=function (kenh,valum,status) {
    this.kenh_=kenh;
    this.valum_=valum;
    this.statu_=status;

    this.setKenh_=function (kenh) {
        if(kenh<0) this.kenh_=99;
        else
        if(kenh>99) this.kenh_=0;
        else
        {
            this.kenh_=kenh;
        }
    }

    this.getKenh_=function () {
        return this.kenh_;
    }

    this.setValum_=function (valum) {
        if(valum<=100 && valum>=0)
        {
            this.valum_=valum;
        }
    }
    this.getValum_=function () {
        return this.valum_;
    }

    this.onStatu_=function () {
        if(this.statu_)
        {
            this.statu_=false;
        }
        else {
            this.statu_=true;
        }
    }

    this.getStatu_=function () {
        return this.statu_;
    }
}

let Remote=function (id) {
    this.id=id;

    this.setID=function (id) {
        this.id=id;
    }

    this.setKenh=function (kenh) {
        this.id.setKenh_(kenh);
    }
    this.getKenh=function () {
        return this.id.getKenh_();
    }
    this.setValum=function (valum) {
        this.id.setValum_(valum);
    }
    this.getValum=function () {
        return this.id.getValum_();
    }
}

let tivi=new TiVi(0,50,false);

let remote=new Remote(tivi,tivi.getValum_());

function on_TiVi() {
    tivi.onStatu_();
    document.getElementById("id_sta").innerText=tivi.getStatu_();
}

function chuyen_toi() {
    remote.setKenh(remote.getKenh()+1);
    document.getElementById("id_kenh").innerText=remote.getKenh();
}

function chuyen_lui() {
    remote.setKenh(remote.getKenh()-1);
    document.getElementById("id_kenh").innerText=remote.getKenh();
}

function valum_tang() {
    remote.setValum(remote.getValum()+1);
    document.getElementById("id_valum").innerText=remote.getValum();
}

function valum_giam() {
    remote.setValum(remote.getValum()-1);
    document.getElementById("id_valum").innerText=remote.getValum();
}

function onload() {
    document.getElementById("id_sta").innerText=tivi.getStatu_();
    document.getElementById("id_kenh").innerText=remote.getKenh();
    document.getElementById("id_valum").innerText=remote.getValum();
}
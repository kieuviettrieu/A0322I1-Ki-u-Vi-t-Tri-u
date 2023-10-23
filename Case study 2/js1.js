let Array_Quanly={
    customer:[],
    employee:[],
    villa:[],
    house:[],
    room:[],
    hopdongthue:[],

    addHopdongthue(hopdong)
    {
        this.hopdongthue.push(hopdong);
    },
    setHopdpngthue(hopdong)
    {
        this.hopdongthue=hopdong;
    },
    getHopdongthue()
    {
        return this.hopdongthue;
    },

    addCustomer(ad)
    {
        this.customer.push(ad);
    },
    setCustomer(c)
    {
        this.customer=c;
    },
    removeCustomer(x)
    {
        this.customer.splice(x,1);
    },

    getCustomer()
    {
        return this.customer;
    },

    addEmployee(ade)
    {
        this.employee.push(ade);
    },
    setEmployee(e)
    {
        this.employee=e;
    },
    getEmployee()
    {
        return this.employee;
    },

    addVilla(adv)
    {
        this.villa.push(adv);
    },
    setVilla(v)
    {
        this.villa=v;
    },
    getVilla()
    {
        return this.villa;
    },

    addHouse(adh)
    {
        this.house.push(adh);
    },
    setHouse(h)
    {
        this.house=h;
    },
    getHouse()
    {
        return this.house;
    },

    addRoom(adr)
    {
        this.room.push(adr);
    },
    setRoom(r)
    {
        this.room=r;
    },
    getRoom()
    {
        return this.room;
    }
};


let Banggia_USD={
    Villa:500,
    House:300,
    Room:100
};

//Vip, Business,  Normal
let Giamgia={
    vip:20/100,
    business:15/100,
    normal:10/100,

    getVip()
    {
        return this.vip;
    },

    getBusiness()
    {
        return this.business;
    },

    getNormal()
    {
        return this.normal;
    }
};

let Trinhdo={
    trungcap:"Trung cấp",
    caodang:"Cao đẳng",
    daihoc:"Đại hoc",
    saudaihoc:"Sau đại học"
};

//: Lễ tân, phục vụ, chuyên viên, giám sát, quản lý, giá đốc
let Vitri={
    letan:"Lễ tân",
    phucvu:"Phục vụ",
    chuyenvien:"Chuyên viên",
    giamsat:"Giám sát",
    quanly:"Quản lý",
    giamdoc:"Giám đốc"
};


class Villa{
    constructor(dientich,chiphi,maxperson,kieuthue,tieucp,tiennghikhac,s_hoboi,sotang) {
        this.tendichvu="Villa";
        this.dientich=dientich;
        this.chiphi=chiphi;
        this.maxperson=maxperson;
        this.kieuthue=kieuthue;
        this.tieuchuanphong=tieucp;
        this.tiennghikhac=tiennghikhac;
        this.dientichhoboi=s_hoboi;
        this.sotang=sotang;
    }

    getTendichvu()
    {
        return this.tendichvu;
    }

    setDientich(dientich)
    {
        this.dientich=dientich;
    }
    getDientich()
    {
        return this.dientich;
    }

    setChiphi(chiphi)
    {
        this.chiphi=chiphi;
    }
    getChiphi()
    {
        return this.chiphi;
    }

    setMaxperson(maxperson)
    {
        this.maxperson=maxperson;
    }
    getMaxperson()
    {
        return this.maxperson;
    }

    setKieuthue(kieuthue)
    {
        this.kieuthue=kieuthue;
    }
    getKieuthue()
    {
        return this.kieuthue;
    }

    setTieuchuanphong(tieccp)
    {
        this.tieuchuanphong=tieccp;
    }
    getTieuchuanphong()
    {
        return this.tieuchuanphong;
    }

    setTiennghikhac(tiennk)
    {
        this.tiennghikhac=tiennk;
    }
    getTiennghikhac()
    {
        return this.tiennghikhac;
    }

    setDientichhoboi(s)
    {
        this.dientichhoboi=s;
    }
    getDientichhoboi()
    {
        return this.dientichhoboi;
    }

    setSotang(sotang)
    {
        this.sotang=sotang;
    }
    getSotang()
    {
        return this.sotang;
    }
};

class House{
    constructor(dientich,chiphi,maxperson,kieuthue,tieucp,tiennghikhac,sotang) {
        this.tendichvu="House";
        this.dientich=dientich;
        this.chiphi=chiphi;
        this.maxperson=maxperson;
        this.kieuthue=kieuthue;
        this.tieuchuanphong=tieucp;
        this.tiennghikhac=tiennghikhac;
        this.sotang=sotang;
    }

    getTendichvu()
    {
        return this.tendichvu;
    }

    setDientich(dientich)
    {
        this.dientich=dientich;
    }
    getDientich()
    {
        return this.dientich;
    }

    setChiphi(chiphi)
    {
        this.chiphi=chiphi;
    }
    getChiphi()
    {
        return this.chiphi;
    }

    setMaxperson(maxperson)
    {
        this.maxperson=maxperson;
    }
    getMaxperson()
    {
        return this.maxperson;
    }

    setKieuthue(kieuthue)
    {
        this.kieuthue=kieuthue;
    }
    getKieuthue()
    {
        return this.kieuthue;
    }

    setTieuchuanphong(tieccp)
    {
        this.tieuchuanphong=tieccp;
    }
    getTieuchuanphong()
    {
        return this.tieuchuanphong;
    }

    setTiennghikhac(tiennk)
    {
        this.tiennghikhac=tiennk;
    }
    getTiennghikhac()
    {
        return this.tiennghikhac;
    }

    setSotang(sotang)
    {
        this.sotang=sotang;
    }
    getSotang()
    {
        return this.sotang;
    }
};

class Room{
    constructor(dientich,chiphi,maxperson,kieuthue,dichvumienphi) {
        this.tendichvu="Room";
        this.dientich=dientich;
        this.chiphi=chiphi;
        this.maxperson=maxperson;
        this.kieuthue=kieuthue;
        this.dichvumienphi=dichvumienphi;
    }

    getTendichvu()
    {
        return this.tendichvu;
    }

    setDientich(dientich)
    {
        this.dientich=dientich;
    }
    getDientich()
    {
        return this.dientich;
    }

    setChiphi(chiphi)
    {
        this.chiphi=chiphi;
    }
    getChiphi()
    {
        return this.chiphi;
    }

    setMaxperson(maxperson)
    {
        this.maxperson=maxperson;
    }
    getMaxperson()
    {
        return this.maxperson;
    }

    setKieuthue(kieuthue)
    {
        this.kieuthue=kieuthue;
    }
    getKieuthue()
    {
        return this.kieuthue;
    }

    setDichvumienphi(dvmp)
    {
        this.dichvumienphi=dvmp;
    }
    getDichvumienphi()
    {
        return this.dichvumienphi;
    }
};

class Dichvudikem {
    constructor(tendv,donvi,giatien) {
        this.tendichvu=tendv;
        this.donvi=donvi;
        this.giatien=giatien;
    }

    setTendichvu(tedv)
    {
        this.tendichvu=tedv;
    }
    getTendichvu()
    {
        return this.tendichvu;
    }

    setDonvi(dv)
    {
        this.donvi=dv;
    }
    getDonvi()
    {
        return this.donvi;
    }

    setGiatien(gt)
    {
        this.giatien=gt;
    }
    getGiatien()
    {
        return this.giatien;
    }
};

//Nhân viên của furama
class Employee {
    constructor(hoten,ngaysinh,socccd,sodienthoai,email,trinhdo,vitri,luong,bophan) {
        this.hoten=hoten;
        this.ngaysinh=ngaysinh;
        this.socccd=socccd;
        this.sodienthoai=sodienthoai;
        this.email=email;
        this.trinhdo=trinhdo;
        this.vitri=vitri;
        this.luong=luong;
        this.bophan=bophan;
    }

    setHoten(hoten)
    {
        this.hoten=hoten;
    }
    getHoten()
    {
        return this.hoten;
    }

    setNgaysinh(ngaysinh)
    {
        this.ngaysinh=ngaysinh;
    }
    getNgaysinh()
    {
        return this.ngaysinh;
    }

    setSocccd(socccd)
    {
        this.socccd=socccd;
    }
    getSocccd()
    {
        return this.socccd;
    }

    setSodienthoai(sdt)
    {
        this.sodienthoai=sdt;
    }
    getSodienthoai()
    {
        return this.sodienthoai;
    }

    setEmail(email)
    {
        this.email=email;
    }
    getEmail()
    {
        return this.email;
    }

    setTrinhdo(trinhdo)
    {
        this.trinhdo=trinhdo;
    }
    getTrinhdo()
    {
        return this.trinhdo;
    }

    setVitri(vitri)
    {
        this.vitri=vitri;
    }
    getVitri()
    {
        return this.vitri;
    }

    setLuong(luong)
    {
        this.luong=luong;
    }
    getLuong()
    {
        return this.luong;
    }

    setBophan(bophan)
    {
        this.bophan=bophan;
    }
    getBophan()
    {
        return this.bophan;
    }
};

let Bophan={
    sale_marketing:[],
    hanhchinh:[],
    phucvu:[],
    quanly:[],

    addSale_Marketing(eml) {
        this.sale_marketing.push(eml);
    },
    getSale_Marketing() {
        return this.sale_marketing
    },

    addHanhchinh(eml)
    {
        this.hanhchinh.push(eml);
    },
    getHanhchinh()
    {
        return this.hanhchinh
    },

    addPhucvu(eml)
    {
        this.phucvu.push(eml);;
    },
    getPhucvu()
    {
        return this.phucvu
    },

    addQuanly(eml)
    {
        this.quanly.push(eml);
    },
    getQualy()
    {
        return this.quanly;
    }

};
let id_hopdong=1000;
class Hopdongthue {
    constructor(so_ngaythue,sotiencoc,tongthanhtoan,dagiamgia) {
        this.sohopdong=id_hopdong++;
        this.songaythue=so_ngaythue;
        this.sotiencoc=sotiencoc;
        this.tongthanhtoan=tongthanhtoan;
        this.dagiamgia=dagiamgia;
    }
    getDagiamgia()
    {
        return this.dagiamgia;
    }

    setSohopdong(sohopdong)
    {
        this.sohopdong=sohopdong;
    }
    getSohopdong()
    {
        return this.sohopdong;
    }

    setSongaythue(songaythue)
    {
        this.songaythue=songaythue;
    }
    getSongaythue()
    {
        return this.songaythue;
    }

    setSotiencoc(sotiencoc)
    {
        this.sotiencoc=sotiencoc;
    }
    getSotiencoc()
    {
        return this.sotiencoc;
    }

    setTongthanhtoan(tonthanhtoan)
    {
        this.tongthanhtoan=tonthanhtoan;
    }
    getTongthanhtoan()
    {
        return this.tongthanhtoan;
    }
};

let Thanhtien={
    Giamgia()
    {

    }
}

//Khách đến thuê
class Customer {
    constructor(hoten,ngaysinh,gioitinh,socccd,sodienthoai,email,loaikhach,diachi) {
        this.hoten=hoten;
        this.ngaysinh=ngaysinh;
        this.gioitinh=gioitinh;
        this.socccd=socccd;
        this.sodienthoai=sodienthoai;
        this.email=email;
        this.loaikhach=loaikhach;
        this.diachi=diachi;
        this.hopdongthue='';
    }
    setHopdongthue(hopdong)
    {
        this.hopdongthue=hopdong;
    }
    getHopdongthue()
    {
        return this.hopdongthue;
    }

    setHoten(hoten)
    {
        this.hoten=hoten;
    }
    getHoten()
    {
        return this.hoten;
    }

    setNgaysinh(ngaysinh)
    {
        this.ngaysinh=ngaysinh;
    }
    getNgaysinh()
    {
        return this.ngaysinh;
    }

    setGioitinh(gioitinh)
    {
        this.gioitinh=gioitinh;
    }
    getGioitinh()
    {
        return this.gioitinh;
    }

    setSocccd(socccd)
    {
        this.socccd=socccd;
    }
    getSocccd()
    {
        return this.socccd;
    }

    setSodienthoai(sdt)
    {
        this.sodienthoai=sdt;
    }
    getSodienthoai()
    {
        return this.sodienthoai;
    }

    setEmail(email)
    {
        this.email=email;
    }
    getEmail()
    {
        return this.email;
    }

    setLoaikhach(loaikhach)
    {
        this.loaikhach=loaikhach;
    }
    getLoaikhach()
    {
        return this.loaikhach;
    }

    setDiachi(diachi)
    {
        this.diachi=diachi;
    }
    getDiachi()
    {
        return this.diachi;
    }

};

function chuyenxau(str) {
    let str1=str.replace(/\s+/g,' ').trim();
    let Ar=str1.split(" ");
    Ar=Ar.map(function (x) {
        x=x.toLowerCase();
        x=x.charAt(0).toUpperCase() + x.slice(1)
        return x;
    })
    return Ar.join(" ");
}

function onView() {
    if(Array_Quanly.getCustomer().length===0)
        return "<'Danh sách rỗng!'>"
    let str="";
    str+="<table border='1' cellspacing='0' cellpadding='3'>"
    str+="<tr><th>STT</th><th>Họ tên</th><th>Giới tính</th><th>Số điện thoại</th>" +
        "<th>" + "Email</th><th>Loại khách</th><th>Địa chỉ</th><th>Chi phí</th><th></th>"
    for(let i=0; i<Array_Quanly.getCustomer().length; i++)
    {
        str+="<tr>";
        str+="<td>"+(i+1)+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getHoten()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getGioitinh()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getSodienthoai()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getEmail()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getLoaikhach()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].getDiachi()+"</td>";
        str+="<td>"+Array_Quanly.getCustomer()[i].hopdongthue.getTongthanhtoan()+"USD"+"</td>";
        str+="<td><button onclick='on_DeleteCutormer("+i+")'>Delete</button></td>";
        str+="</tr>"
    }
    str+="</table>";
    return str;
}

function Submit_1() {
    let hoten=document.getElementById("id_name_1").value;
    let ngaysinh=document.getElementById("id_ngaysinh_1").value;
    let gioitinh=document.getElementById("id_gioitinh_1").value;
    let socccd=document.getElementById("id_socccd_1").value;
    let sdt=document.getElementById("id_sdt_1").value;
    let email=document.getElementById("id_email_1").value;
    let loaikhach=document.getElementById("id_loaikhach_1").value;
    let diachi=document.getElementById("id_diachi_1").value;
    let songaythue=document.getElementById("id_songaythue_1").value;
    let loadichvu=document.getElementById("id_loaidichvu_1").value;
    let loaiphongthue=document.getElementById("id_loaiphongthue_1").value;



    if(hoten.length==0 || socccd.length!=12 || sdt.length!=10 || email.length<9 || diachi.length==0 || songaythue==0
        || ngaysinh==="")
    {
        alert("Vui lòng nhập đúng thông tin!");
    }
    else
    if(email.slice(email.length-8,email.length)!=="@abc.abc")
    {
        alert(email.slice(email.length-9,email.length))
        alert("Vui lòng nhập đúng định dạng email(...@abc.abc)!");
    }
    else
    {
        let loai=0,loai_dichvu=0;
        if(loadichvu==="Villa") loai=Banggia_USD.Villa;
        else
            if(loadichvu==="House") loai=Banggia_USD.House;
            else
            {
                loai=Banggia_USD.Room;
            }

        if(loaiphongthue==="Vip") loai_dichvu=Giamgia.getVip();
        else
            if(loaiphongthue==="Business") loai_dichvu=Giamgia.getBusiness();
            else
            {
                loai_dichvu=Giamgia.getNormal();
            }
        let dagiamgia=parseInt(songaythue)*loai*loai_dichvu;
        let sotienthue=parseInt(songaythue)*loai-dagiamgia;
        let sotiencoc=sotienthue*0.3;
        let hopdong=new Hopdongthue(songaythue,sotiencoc,sotienthue,dagiamgia);
        let cus=new Customer(chuyenxau(hoten),ngaysinh,gioitinh,socccd,sdt,email,loaikhach,diachi);
        cus.setHopdongthue(hopdong);
        Array_Quanly.addHopdongthue(hopdong);
        Array_Quanly.addCustomer(cus);
        document.getElementById("id_name_1").value="";
        document.getElementById("id_ngaysinh_1").value="";
        document.getElementById("id_socccd_1").value="";
        document.getElementById("id_sdt_1").value="";
        document.getElementById("id_email_1").value="";
        document.getElementById("id_diachi_1").value="";
        document.getElementById("id_songaythue_1").value="";
        alert("Đăng ký thành công!");
    }
}

function on_Opendanhsach_KH() {
    let str=onView();
    document.getElementById("id_out_dscus").innerHTML=str;
    document.getElementById("id_magia").innerHTML="<input onclick=\"on_Close_danhsach_KH()\" " +
        "type=\"button\" value=\"Close\">";
}

function on_DeleteCutormer(x) {
    Array_Quanly.removeCustomer(parseInt(x));
    document.getElementById("id_out_dscus").innerHTML=onView();
}

function on_Close_danhsach_KH() {
    document.getElementById("id_out_dscus").innerHTML='';
    document.getElementById("id_magia").innerHTML="";
}



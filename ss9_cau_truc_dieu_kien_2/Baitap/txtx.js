function onsub() {
    let wei = parseFloat(document.getElementById("weight").value);
    let hei = parseFloat(document.getElementById("height").value);
    let bmi = wei / (hei * hei);
    if (bmi < 18)
        document.getElementById("idp").innerHTML = "Underweight";
    else if (bmi < 25.0)
        document.getElementById("idp").innerHTML = "Normal";
    else if (bmi < 30.0)
        document.getElementById("idp").innerHTML = "Overweight";
    else
        document.getElementById("idp").innerHTML = "Obese";

}

function submit_() {
    let mon = parseInt(document.getElementById("month").value);
    switch (mon) {
        case 1:
            document.getElementById("day").innerHTML = "Tháng 1 có 31 ngày";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tháng 2 có 28 ngày hoặc 29 ngày";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Tháng 3 có 31 ngày";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Tháng 4 có 30 ngày";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Tháng 5 có 31 ngày";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Tháng 6 có 30 ngày";
            break;
        case 7:
            document.getElementById("day").innerHTML = "Tháng 7 có 31 ngày";
            break;
        case 8:
            document.getElementById("day").innerHTML = "Tháng 8 có 31 ngày";
            break;
        case 9:
            document.getElementById("day").innerHTML = "Tháng 9 có 30 ngày";
            break;
        case 10:
            document.getElementById("day").innerHTML = "Tháng 10 có 31 ngày";
            break;
        case 11:
            document.getElementById("day").innerHTML = "Tháng 11 có 30 ngày";
            break;
        case 12:
            document.getElementById("day").innerHTML = "Tháng 12 có 31 ngày";
            break;
        default:
            document.getElementById("day").innerHTML = "Hãy chọn 1 trong 12 tháng";
            break;

    }
}

function onbutton1() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '1';
    document.getElementById("intxt").value = them;
}

function onbutton2() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '2';
    document.getElementById("intxt").value = them;
}

function onbutton3() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '3';
    document.getElementById("intxt").value = them;
}

function onbutton4() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '4';
    document.getElementById("intxt").value = them;
}

function onbutton5() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '5';
    document.getElementById("intxt").value = them;
}

function onbutton6() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '6';
    document.getElementById("intxt").value = them;
}

function onbutton7() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '7';
    document.getElementById("intxt").value = them;
}

function onbutton8() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '8';
    document.getElementById("intxt").value = them;
}

function onbutton9() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '9';
    document.getElementById("intxt").value = them;
}

function onbutton0() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '0';
    document.getElementById("intxt").value = them;
}

function reset() {
    document.getElementById("intxt").value = '';
}

function onbutton_chia() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '/';
    document.getElementById("intxt").value = them;
}

function onbutton_x() {
    let txt = document.getElementById("intxt").value;
    let them = txt + 'x';
    document.getElementById("intxt").value = them;
}

function onbutton_t() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '-';
    document.getElementById("intxt").value = them;
}

function onbutton_c() {
    let txt = document.getElementById("intxt").value;
    let them = txt + '+';
    document.getElementById("intxt").value = them;
}

function subb() {
    let txt = document.getElementById("intxt").value;
    let sum = 0;
    let arr = [];
    let dau = [];
    for (let i = 0; i < txt.length; i++) {
        let tx = '';
        while (txt[i] != '+' && txt[i] != '-' && txt[i] != 'x' && txt[i] != '/') {
            tx = tx + txt[i];
            i++;
            if (i == txt.length) break;
        }
        arr.push(parseInt(tx));
        if (i < txt.length) {
            dau.push(txt[i]);
        }
    }
    sum = arr[0];
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (dau[j] == '+') {
            sum += arr[i];
            j++;
        } else if (dau[j] == '-') {
            sum -= arr[i];
            j++;
        } else if (dau[j] == 'x') {
            sum *= arr[i];
            j++;
        } else if (dau[j] == '/') {
            sum /= arr[i];
            j++;
        }
    }
    document.getElementById("intxt").value = sum;
}

let dem1 = 1, dem2 = 3, dem3 = 2, dem4 = 3, dem5 = 4;

function p_1() {
    if (dem1 == 4) dem1 = 1;
    else dem1++;
    let txt = "ig" + dem1 + "/img-1.png";
    document.getElementById("h_1").src = txt;
    kt_h();
}

function p_2() {
    if (dem2 == 4) dem2 = 1;
    else dem2++;
    let txt = "ig" + dem2 + "/img-2.png";
    document.getElementById("h_2").src = txt;
    kt_h();
}

function p_3() {
    if (dem3 == 4) dem3 = 1;
    else dem3++;
    let txt = "ig" + dem3 + "/img-3.png";
    document.getElementById("h_3").src = txt;
    kt_h();
}

function p_4() {
    if (dem4 == 4) dem4 = 1;
    else dem4++;
    let txt = "ig" + dem4 + "/img-4.png";
    document.getElementById("h_4").src = txt;
    kt_h();
}


function p_5() {
    if (dem5 == 4) dem5 = 1;
    else dem5++;
    let txt = "ig" + dem5 + "/img-5.png";
    document.getElementById("h_5").src = txt;
    kt_h();
}

function init() {
    p_1();
    p_2();
    p_3();
    p_4();
    p_5();
}

window.onload=init();

function kt_h() {
    if (dem1 == dem2 && dem2 == dem3 && dem3 == dem4 && dem4 == dem5) {
        document.getElementById("tab1").style.borderBottomColor = "red";
        document.getElementById("tab1").style.borderRightColor = "red";
    } else {
        document.getElementById("tab1").style.borderBottomColor = "black";
        document.getElementById("tab1").style.borderRightColor = "black";
    }
}

function ony() {
    alert("Yes.you are right");
}

function onno() {
    let top = Math.random()*window.innerHeight;
    let le = Math.random()*window.innerWidth;
    document.getElementById("idno").style.top = top + "px";
    document.getElementById("idno").style.left = le + "px";
}



function check1() {
    let a1=document.getElementById("ch1").checked
    let a2=document.getElementById("ch2").checked
    let a3=document.getElementById("ch3").checked
    if(a1==true && a2==true && a3==true)
    {
        document.getElementById("ch3").checked=false;
    }
}

function check2() {
    let a1=document.getElementById("ch1").checked
    let a2=document.getElementById("ch2").checked
    let a3=document.getElementById("ch3").checked
    if(a1==true && a2==true && a3==true)
    {
        document.getElementById("ch1").checked=false;
    }
}

function check3() {
    let a1=document.getElementById("ch1").checked
    let a2=document.getElementById("ch2").checked
    let a3=document.getElementById("ch3").checked
    if(a1==true && a2==true && a3==true)
    {
        document.getElementById("ch2").checked=false;
    }
}

function vs1() {
    let a=parseInt(prompt("Nhập a:"));
    let b=parseInt(prompt("Nhập b:"));
    if(a%b==0)
    {
        alert("a chia hết cho b")
    }
    else
    {
        alert("a không chia hết cho b")
    }
}

function vs2() {
    let age=parseInt(prompt("Nhập tuổi:"));
    if(age>=14)
    {
        alert("Đủ điều kiện vào lớp 10")
    }
    else
    {
        alert("Không đủ điều kiện vào lớp 10")
    }
}

function vs3() {
    let nummber=parseInt(prompt("Nhập số nguyên bất kì:"));
    if(nummber==0)
    {
        alert("Số nguyên bằng 0")
    }
    else
        if(nummber>0)
        {
            alert("Số nguyên lớn hơn 0");
        }
        else
        {
            alert("Số nguyên lớn hơn 0")
        }
}

function vs4() {
    let a=parseInt(prompt("Nhập a:"));
    let b=parseInt(prompt("Nhập b:"));
    let c=parseInt(prompt("Nhập c:"));
    let max=a;
    if(max<b) max=b;
    if(max<c) max=c;
    alert("Max = "+max);
}

function vs5() {
    let test_ki=parseFloat(prompt("Nhập điểm kiểm tra đầu kì:"));
    let giua_ki=parseFloat(prompt("Nhập điểm giữa kì:"));
    let cuoi_ki=parseFloat(prompt("Nhập điểm cuối kì:"));
    let diem_tb=test_ki*0.2+giua_ki*0.3+cuoi_ki*0.5;
    if(diem_tb>=8.5)
    {
        alert("Giỏi");
    }
    else
        if(diem_tb>=6.5)
        {
            alert("Khá");
        }
        else
            if(diem_tb>=5)
            {
                alert("Trung bình");
            }
            else
            {
                alert("Trượt");
            }
}

function vs6() {
    let doanh_so=parseFloat(prompt("Nhập doanh số bán hàng(vnd): "))
    let hoa_hong;
    if(doanh_so>300000000)
    {
        hoa_hong=doanh_so*0.2;
    }
    else
        if(doanh_so>100000000)
        {
            hoa_hong=doanh_so*0.1;
        }
        else
        {
            hoa_hong=doanh_so*0.05;
        }
    alert("Hoa hồng bạn nhận được: "+hoa_hong+' vnd');
}

function vs7() {
    let sophut=parseInt(prompt("Nhập số phút đã sử dụng: "))
    let phi, phicodinh=25000;
    if(sophut>200)
        phi=(sophut-200)*200+150*400+50*600;
    else if(sophut>50)
        phi=(sophut-50)*400+50*600;
    else
        phi=sophut*600;
    alert(sophut+" phút gọi của bạn tương ứng: "+(phi+phicodinh)+' vnd');
}

function vs21() {
    let do_c=parseInt(prompt("Nhập độ C: "));
    let do_f=do_c*(9/5)+32;
    alert("Độ F: "+do_f);
}

function vs22() {
    let met=parseFloat(prompt("Nhập mét: "));
    let fee=met*3.2808;
    alert("Feet: "+fee);
}

function vs23() {
    let canh_a=parseInt(prompt("Nhập cạnh a của hình vuông: "));
    let s_a=a*a;
    alert("Diện tính hình vuông cạnh a: "+s_a);
}

function vs24() {
    let canh_a=parseInt(prompt("Nhập chiều dài hình chữ nhật: "));
    let canh_b=parseInt(prompt("Nhập chiều rộng hình chữ nhật: "));
    let S_ab=a*b;
    alert("Diện tính hình chữ nhật: "+S_ab);
}

function vs25() {
    let canh_a=parseInt(prompt("Nhập cạnh kề a của tam giác vuông: "));
    let canh_b=parseInt(prompt("Nhập cạnh kề b của tam giác vuông: "));
    let S=0.5*canh_a*canh_b;
    alert("Diện tích tam giác vuông: "+S);
}

function vs26() {
    alert("Phương trình bậc 1 có dạng ax+b=0");
    let a=parseFloat(prompt("Nhập a: "));
    let b=parseFloat(prompt("Nhập b: "));
    let x_=-b/a;
    alert("x="+x_);
}

function vs27() {
    alert("Phương trình bậc 2 có dạng ax^2+bx+c=0");
    let a = parseFloat(prompt("Nhập a: "));
    let b = parseFloat(prompt("Nhập b: "));
    let c = parseFloat(prompt("Nhập c: "));
    let delta = b * b - 4 * a * c;
    let x1, x2;
    if (delta < 0) {
        alert("Phương trình vô nghiệm")
    } else if (delta == 0) {
        x1 = x2 = -b / (2 * a);
        alert("Phương trình có nghiệm kép: " + x1);
    } else {
        delta = Math.sqrt(delta);
        x1 = (-b + delta) / (2 * a);
        x2 = (-b - delta) / (2 * a);
        alert("Tập nghiệm của phương trình: " + x1 + ';' + x2);
    }
}

function vs28() {
        let age=parseInt(prompt("Nhập tuổi: "));
        if(age>0 && age<120)
        {
            alert(age+' là tuổi của một người');
        }
        else
        {
            alert(age+' không phải là tuổi của một người');
        }
}

function vs29() {
    let a = parseFloat(prompt("Nhập a: "));
    let b = parseFloat(prompt("Nhập b: "));
    let c = parseFloat(prompt("Nhập c: "));
    if(a+b<=c || a+c<=b || b+c<=a)
    {
        alert(a+','+b+','+'c'+" không phải là cạnh của 1 tam giác");
    }
    else
    {
        alert(a+','+b+','+'c'+" là cạnh của 1 tam giác");
    }

}

function vs210() {
    let tien_dien;
    let so_dien=parseFloat(prompt("Nhập số điện đã sử dụng: "));
    let bac1=1.678, bac2=1.734, bac3=2.014, bac4=2.536, bac5=2.834, bac6=2.927;
    if(so_dien<=0)
    {
        so_dien=parseFloat(prompt("Nhập số điện đã sử dụng: "));
    }
    else
        if(so_dien<=50)
        {
            tien_dien=so_dien*bac1;
        }
        else
            if(so_dien<=100)
            {
                tien_dien=50*bac1+(so_dien-50)*bac2;
            }
            else
                if(so_dien<=200)
                {
                    tien_dien=50*bac1+50*bac2+(so_dien-100)*bac3;
                }
                else
                    if(so_dien<=300)
                    {
                        tien_dien=50*bac1+50*bac2+100*bac3+(so_dien-200)*bac4;
                    }
                    else
                        if(so_dien<=400)
                        {
                            tien_dien=50*bac1+50*bac2+100*bac3+100*bac4+(so_dien-300)*bac5;
                        }
                        else
                            if(so_dien>400)
                            {
                                tien_dien=50*bac1+50*bac2+100*bac3+100*bac4+100*bac5+(so_dien-400)*bac6;
                            }
    alert("Tiền điện của bạn là: "+tien_dien);
}

function vs211() {
    let luong=parseInt(prompt("Nhập lương của bạn: "));
    let thue;
    if(luong<=4000000)
    {
        thue=0;
    }
    else
        if(luong <=6000000)
        {
            thue = (luong - 4000000)*5/100;
        }
        else
            if(luong <= 9000000)
            {
                thue = (6000000-4000000)*5/100+(luong - 6000000)*10/100;
            }
            else
                if(luong <= 14000000)
                {
                    thue = (6000000-4000000)*5/100+(9000000-6000000)*10/100+(luong-9000000)*15/100;
                }
                else
                    if(luong<=24000000)
                    {
                        thue = (6000000-4000000)*5/100+(9000000-6000000)*10/100+(14000000-9000000)*15/100
                            +(luong-14000000)*20/100;
                    }
                    else
                        if(luong<=44000000)
                        {
                            thue = (6000000-4000000)*5/100+(9000000-6000000)*10/100+(14000000-9000000)*15/100
                                +(24000000-14000000)*20/100+(luong-24000000)*25/100;
                        }
                        else
                            if(luong<=84000000)
                            {
                                thue = (6000000-4000000)*5/100+(9000000-6000000)*10/100+(14000000-9000000)*15/100
                                    +(24000000-14000000)*20/100+(44000000-24000000)*25/100+(luong-44000000)*30/100;
                            }
                            else {
                                thue = (6000000 - 4000000) * 5 / 100 + (9000000 - 6000000) * 10 / 100 + (14000000 - 9000000) * 15 / 100
                                    + (24000000 - 14000000) * 20 / 100 + (44000000 - 24000000) * 25 / 100 + (84000000 - 44000000) * 30 / 100
                                    + (luong - 84000000) * 35 / 100;
                            }
    if(thue==0)
    {
        alert("Bạn không cần phải nộp thuế!")
    }
    else
    {
        alert("Thuế bạn cần phải nộp: "+thue+'vnd');
    }
}

function vs212() {
    let lai1=0.0069, lai2=0.00875;
    let money=parseInt(prompt("Nhập số tiền vay: "));
    let so_month=parseInt(prompt("Nhập số tháng: "));
    let money_sum;
    if(so_month>12)
    {
        money_sum=money*Math.pow((1+lai1),12);
        money_sum=money_sum*Math.pow((1+lai2),so_month-12);
    }
    else {
        money_sum=money*Math.pow((1+lai1),so_month);
    }
    alert("Tổng số tiền bạn cần phải trả sau "+so_month+" tháng: "+money_sum+'vnd');
}


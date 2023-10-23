let array_A=[];
function on_add() {
    let value=document.getElementById("id_III1").value;
    if(value!=='')
    {
        value=parseInt(value);
        array_A.push(value);
        document.getElementById("id_III1").value='';
    }
    Fu_B();
}

let array_B=[];
function Fu_B() {
    let str='';
    if(array_A.length!=0)
    {
        for(let i=0; i<array_A.length; i++)
        {
            let b=0;
            for (let j=0; j<=i; j++)
            {
                b+=array_A[j];
            }
            array_B[i]=b;
        }
        str=array_B.join(',');
    }
    document.getElementById("id_outIII1").innerText="Mảng B: "+str;
}

function Bai_III2() {
    let A=[4,5,6,33,21,13,12];
    let B=[2,3,4,5,6,7,8,44,12];
    let C=[];
    for(let i=0; i<B.length; i++)
    {
        let kt=true;
        for (let j=0; j<A.length; j++)
        {
            if(B[i]===A[j])
            {
                kt=false;
                break;
            }
        }
        if(kt===true)
        {
            for (let k=0; k<C.length; k++)
            {
                if(B[i]===C[k])
                {
                    kt=false;
                    break;
                }
            }
        }

        if(kt===true)
        {
            C.push(B[i]);
        }
    }
    console.log(C.join(','));
}
Bai_III2();

function Bai_III3() {
    let tuso=[5,2,5,7];
    let mauso=[6,3,4,6];
    let a=tuso[0]/mauso[0];
    let dem=0;
    for (let i=0; i<tuso.length; i++)
    {
        if(a<(tuso[i]/mauso[i]))
        {
            a=tuso[i]/mauso[i];
            dem=i;
        }
    }
    console.log(tuso[dem]+'/'+mauso[dem]+" là phân số lơn nhất, vị trí: "+dem);
}
Bai_III3();

function Bai_III4() {
    let a=document.getElementById("id_num").value;
    let str='';
    for (let i=0; i<a.length; i++)
    {
        switch (a[i]) {
            case '1':str+=" một";
            break;
            case '2':str+=" hai";
                break;
            case '3':str+=" ba";
                break;
            case '4':str+=" bốn";
                break;
            case '5':str+=" năm";
                break;
            case '6':str+=" sáu";
                break;
            case '7':str+=" bảy";
                break;
            case '8':str+=" tám";
                break;
            case '9':str+=" chín";
                break;
            case '0':str+=" không";
                break;
        }
    }
    document.getElementById("id_outIII4").innerText=str;
}

let Arrray_Menu=[["Cafe",25000],["Cam vắt",35000],["Nước ép cà rốt",20000],["Nước ép cà chua",20000],
                   ["Nước lọc",5000],["Nước dừa",30000]];
let Sum=0;
function on_add_nuoc(x) {
    let num=parseInt(prompt("Nhập số lượng("+Arrray_Menu[x][0]+"):"));
    let s=Arrray_Menu[x][1]*num;
    Sum+=s;
    document.getElementById("id_outIII5").innerText="Tổng số tiền cần trả: "+Sum+"vnd";
}
function KT_nto(a) {
    let dem=0;
    for (let i=2; i<a; i++)
    {
        if(a%i===0)
        {
            dem++;
        }
    }
    if (dem===0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

function so_nto(N) {
    for (let i=2; i<N; i++)
    {
        if(KT_nto(i))
        {
            console.log(i);
        }
    }
}

function feet_to_meters() {
    let feet=parseInt(document.getElementById("num1").value);
    document.getElementById("num2").value=0.305*feet;
}

function meters_to_feet() {
    let meters=parseInt(document.getElementById("num3").value);
    document.getElementById("num4").value=3.279*meters;
}

function alertMessage()
{
    alert("Xin chào!");
}

function Bai_2() {
    let num=parseInt(prompt("Nhập đối số: "));
    alert("Sau khi tăng 1 đơn vị: "+(num+1))
}

function Bai_3() {
    let num1=parseInt(prompt("Nhập tham số thứ 1: "));
    let num2=parseInt(prompt("Nhập tham số thứ 2: "));
    if(num1>num2)
    {
        alert("Tham số thứ 1 lớn hơn tham số thứ 2");
    }
    else
    {
        alert("Tổng = "+(num1+num2));
    }
}

function Bai_4() {
    let result;
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0;
    alert(result);
    result = addNumbers();
    alert(result);
}

function Bai_5() {
    let input_name=prompt("Nhập tên ngôi sao: ").toUpperCase();
    let Name_sao=[ "Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let Name_chom=[ "Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    let inde=-1;
    for (let i=0; i<Name_sao.length; i++)
    {
        if(input_name===Name_sao[i].toUpperCase())
        {
            inde=i;
            break;
        }
    }
    if(inde===-1)
    {
        alert("Không tồn tại!");
    }
    else
    {
        alert(Name_sao[inde]+" thuộc chòm sao: "+Name_chom[inde]);
    }
}

function pow_2(num) {
    return num*num;
}

function bai1() {
    let a=parseInt(prompt("Enter a: "));
    alert(a+" bình phương = "+pow_2(a));
}

function S_crile(R) {
    return 4*3.14*R*R;
}

function C_crile(R) {
    return 2*3.14*R;
}

function bai2() {
    let R=parseInt(prompt("Enter R: "));
    alert("Diện tích đường tròn bán kính "+R+" = "+S_crile(R));
    alert("Chu vi đường tròn bán kính "+R+" = "+C_crile(R));
}

function giai_thua(N) {
    if(N<0)
        return 0;
    if (N===0)
        return 1;
    let value=1;
    for(let i=1; i<=N; i++)
    {
        value*=i;
    }
    return value;
}

function bai3() {
    let N_gt=parseInt(prompt("Enter N: "));
    alert(N_gt+"! = "+giai_thua(N_gt));
}

function KT_so(N) {
    for (let i=0; i<=9; i++)
    {
        if(N==i)
            return true;
    }
    return false;
}

function bai4() {
    let chart=prompt("Nhập ký tự bất kỳ: ");
    if(KT_so(chart))
    {
        alert(chart+" là ký tự số!");
    }
    else
    {
        alert(chart+" không phải ký tự số!")
    }
}

function Min_3(a,b,c) {
    let min=a;
    if(min>b) min=b;
    if(min>c) min=c;
    return min;
}

function bai5() {
    let num1=parseInt(prompt("Nhập số nguyên thứ 1: "));
    let num2=parseInt(prompt("Nhập số nguyên thứ 2: "));
    let num3=parseInt(prompt("Nhập số nguyên thứ 3: "));
    alertMessage("Min = "+Min_3(num1,num2,num3));
}

function bai6() {
    let a=parseInt(prompt("Enter a: "));
    if(a>0)
    {
        alert(true);
    }
    else
    {
        alert(false);
    }
}


function bai7() {
    let a=parseInt(prompt("Enter a: "));
    let b=parseInt(prompt("Enter b: "));
    let tem=a;
    a=b;
    b=tem;
    alert("a = "+a);
    alert("b = "+b);
}

function resev(a) {
    let b=[];
    for (let i=a.length-1; i>=0; i--)
    {
        b.push(a[i]);
    }
    return b;
}

function bai8() {
    let n=parseInt(prompt("Nhập số lượng phần tử mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng phần tử mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=parseInt(prompt("Element "+i+": "));
        arr.push(x);
    }
    arr=resev(arr);
    alert(arr);
}

function bai9() {
    let n=parseInt(prompt("Nhập số lượng phần tử mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng phần tử mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=prompt("Element chart "+i+": ");
        arr.push(x);
    }

    let chart=prompt("Element chart X: ");
    if(arr.indexOf(chart)!==-1)
    {
        let dem=0;
        for(let i=0; i<arr.length; i++)
        {
            if(chart===arr[i])
            {
                dem++;
            }
        }
        alert(dem);
    }
    else
    {
        alert(-1);
    }
}

function KT_dx(A,first,last) {
    if(first>=last) return true;
    if(A[first]===A[last]) return KT_dx(A,first+1,last-1);
    else return false;
}

function on_doixung() {
    let str=prompt("Enter string: ");
    alert(KT_dx(str,0,str.length-1));
}


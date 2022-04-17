function clickme() {
    let sout;
    sout = "<table border='1' width='800' cellspacing='0' cellpadding='3'>"
    for (i = 1; i <= 10; i++) {
        sout = sout + "<tr>";
        for (j = 1; j <= 10; j++) {
            sout = sout + "<td>"+j+"x"+i+"="+i*j+"</td>";
        }
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById("idme").innerHTML=sout;
}

function KT_nguyento(num) {
    let dem=0;
    for(let i=2; i<(num/2)+1; i++)
    {
        if(num%i==0)
        {
            dem++;
        }
    }
    if(dem!=0)
    {
        return false;
    }
    return true;
}

function nguyen_to() {
    let N=parseInt(prompt("Nhập số lượng số nguyên tố cần in ra: "));
    let dem=1, i=2;
    while (dem<=N)
    {
        if(KT_nguyento(i)==true)
        {
            console.log(i);
            dem++;
        }
        i++;
    }
}

function bai1() {
    for (let i=1; i<=100; i++)
    {
        if(i==99)
        {
            alert("Đã hoàn thành!")
        }
    }
}

function bai2() {
    let nhiet_do=parseInt(prompt("Nhập nhiệt độ hiện tại(độ C): "));
    if(nhiet_do>100)
    {
        alert("Hãy giảm nhiệt độ!");
    }
    else
        if(nhiet_do<20)
        {
            alert("Hãy tăng nhiệt độ!");
        }
        else
        {
            alert("Goob job!");
        }
}

function bai3() {
    console.log("20 số fibonacci đầu tiên là: ");
    let first=[0,1,2];
    let dem=20;
    console.log(first[0]);
    console.log(first[1]);
    console.log(first[2]);
    for(let i=4; i<=dem; i++)
    {
        let val=first[1]+first[2];
        console.log(val);
        first[1]=first[2];
        first[2]=val;
    }
}

function bai4() {
    let arr=[0,1,2];
    let dem=20;
    for(let i=4; i<=dem; i++)
    {
        let val=arr[1]+arr[2];
        if(val%5==0)
        {
            console.log("Số fibonacci đầu tiên chia hết cho 5 là: "+val);
            break;
        }
        arr[1]=arr[2];
        arr[2]=val;
    }
}

function bai5() {
    let arr=[0,1,2];
    let dem=20, sum=3;
    for(let i=4; i<=dem; i++)
    {
        let val=arr[1]+arr[2];
        if(val%5==0)
        {
            sum+=val;
        }
        arr[1]=arr[2];
        arr[2]=val;
    }
    console.log("Tổng 20 số fibonacci đầu tiên lag: "+sum);
}

function bai6() {
    let sum=0;
    let i=1; k=1;
    while (k<=30)
    {
        if(i%7==0)
        {
            sum+=i;
            k++;
        }
        i++;
    }
    console.log("Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là: "+sum);
}


function bai7() {
    for(let i=1; i<=100; i++)
    {
        if(i%5==0 && i%3==0)
        {
            console.log("FizzBuzz");
        }
        else
            if(i%3==0)
            {
                console.log("Fizz");
            }
            else
                if(i%5==0)
                {
                    console.log("Buzz");
                }
                else
                {
                    console.log(i);
                }
    }
}

function bai8() {
    let num=parseInt(prompt("Nhập một số nguyên từ 1 đến 100!"))
    let value_=Math.random()*100;
    let kt=0;
    if(num==value_)
    {
        kt=1;
    }
    else
    {
        for (let i=0; i<2; i++)
        {
            if (num>value_)
            {
                num=parseInt(prompt("Lớn hơn!"));
            }
            else
            if(num<value_)
            {
                num=parseInt(prompt("Bé hơn!"))
            }
            else {
                kt=1;
                break;
            }
        }
    }
    if (kt==1)
    {
        alert("Chúc mừng bạn!");
    }
    else
    {
        alert("Chúc bạn may mắn lần sau!")
    }
}

function cl1() {
    let first=[0,1,2];
    let dem=parseInt(prompt("Nhập độ dài dãy finonaci đầu tiên: "))
    console.log(first[0]);
    console.log(first[1]);
    console.log(first[2]);
    for(let i=4; i<=dem; i++)
    {
        let val=first[1]+first[2];
        console.log(val);
        first[1]=first[2];
        first[2]=val;
    }
}

function cl2() {
    let N=parseInt(prompt("Nhập vào 1 số nguyên dương: "));
    let giaithua=1;
    for(let i=1; i<=N; i++)
    {
        giaithua*=i;
    }
    alert(N+"! = "+giaithua);
}

function cl3() {
    let sout;
    sout = "<table width='70' cellspacing='0' cellpadding='3'>"
    for (var i = 1; i <=5; i++) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            if(j<=i)
            {
                sout = sout + "<td>*</td>";
            }
            else
                {
                    sout = sout + "<td></td>";
                }
        }
        sout = sout + "</tr>";
    }

    for (var i = 1; i <=3; i++) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            sout = sout + "<td></td>";
        }
        sout = sout + "</tr>";
    }

    for (var i = 5; i >=1; i--) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            if(j<=i)
            {
                sout = sout + "<td>*</td>";
            }
            else
            {
                sout = sout + "<td></td>";
            }
        }
        sout = sout + "</tr>";
    }

    for (var i = 1; i <=3; i++) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            sout = sout + "<td></td>";
        }
        sout = sout + "</tr>";
    }


    for (var i = 5; i >=1; i--) {
        sout = sout + "<tr>";
        for (var j = 1; j<=5; j++) {
            if(i==j)
            {
                while (j<=5)
                {
                    j++;
                    sout = sout + "<td>*</td>";
                }
            }
            else
            {
                sout = sout + "<td></td>";
            }
        }
        sout = sout + "</tr>";
    }

    for (var i = 1; i <=3; i++) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            sout = sout + "<td></td>";
        }
        sout = sout + "</tr>";
    }

    for (var i = 1; i <=5; i++) {
        sout = sout + "<tr>";
        for (var j = 1; j <=5; j++) {
            if(j>=i)
            {
                sout = sout + "<td>*</td>";
            }
            else
            {
                sout = sout + "<td></td>";
            }
        }
        sout = sout + "</tr>";
    }

    sout = sout + "</table>";
    document.getElementById("lap_2").innerHTML=sout;
}

function cl4() {
    let sout;
    sout = "<table width='300' cellspacing='0' cellpadding='3'>"
    for (let i = 1; i <=7; i++) {
        sout = sout + "<tr>";
        for (let j = 1; j <= 20; j++) {
            if(i!=1 && i!=7)
            {
                if(j==1 || j==20)
                {
                    sout = sout + "<td>*</td>";
                }
                else
                {
                    sout = sout + "<td></td>";
                }
            }
            else
            {
                sout = sout + "<td>*</td>";
            }
        }
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById("lap_2").innerHTML=sout;
}

function cl5() {
    let money_goc=parseInt(prompt("Số tiền muốn vay(vnd): "));
    let month=parseInt(prompt("Số tháng vay(month): "));
    let laisuat=parseFloat(prompt("Lãi suất hàng tháng(%): "))/100;
    let sum=money_goc*Math.pow(1+laisuat,month);
    alert("Tiền bạn cần thanh toán sau "+month+" tháng vay: "+parseInt(sum)+' vnd');
}

function cl6() {
    document.getElementById("lap_2").innerHTML="<img src=\"traitym.png\" height=\"509\" width=\"649\"/>";
}

let a=23.7;
let b=true;
let str="Ha Noi";
let c=10, d=25;
let tich=c*d;

document.write("a="+a);
document.write('<br/>');
document.write("b="+b);
document.write('<br/>');
document.write("str="+str)
document.write('<br/>');
document.write("Tich="+tich);
document.write('<br/>');

function clickme() {
    let s1=prompt("Nhập a")
    let s2=prompt("Nhập b")

    if(s1%s2===0)
    {
        alert("a chia hết cho b");
    }
    else
    {
        alert("a không chia hết cho b");
    }

}
function bai1() {
    for(let i=0; i<5; i++)
    {
        console.log("The number is "+i);
    }
}

function bai2() {
    let total=0;
    let dem=parseInt(prompt("Nhập số bất kì lớn hơn 0"));
    for(let i=1; i<=dem; i++)
    {
        total+=i;
    }
    alert(total);
}

function bai_1() {
    let anum=parseInt(prompt("Enter a number: "));
    let total=anum;
    while (anum!=-1)
    {
        anum=parseInt(prompt("Enter a number: "));
        total+=anum;
    }
    alert("Tổng = "+total);
}

function bai_2() {
    let i = 1;
    while (i < 100) {
        document.write("<hr width = " + i + "%>");
        i++;
    }
}
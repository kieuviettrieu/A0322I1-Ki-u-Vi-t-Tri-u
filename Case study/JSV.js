function on_V1() {
    let m=parseInt(prompt("Nhập m:"));
    let n=parseInt(prompt("Nhập n:"));
    let array=[];
    let Sum=0;
    for(let i=0; i<m; i++)
    {
        let arr=[];
        for(let j=0; j<n; j++)
        {
            let x=parseInt(prompt("Nhập phần tử hàng "+(i+1)+" cột "+(j+1)+":"));
            if(x%2===0)
            {
                Sum+=x;
            }
            arr.push(x);
        }
        array.push(arr);
    }
    document.getElementById("id_outV1").innerText="Tổng các phần tử chẵn: "+Sum;
}

function KT_nto(n) {
    if(n<2) return false;
    for(let i=2; i<n; i++)
    {
        if(n%i===0) return false;
    }
    return true;
}

function on_V2() {
    let m=parseInt(prompt("Nhập m:"));
    let n=parseInt(prompt("Nhập n:"));
    let array=[];
    let dem=0;
    for(let i=0; i<m; i++)
    {
        let arr=[];
        for(let j=0; j<n; j++)
        {
            let x=parseInt(prompt("Nhập phần tử hàng "+(i+1)+" cột "+(j+1)+":"));
            if(KT_nto(x))
            {
                dem++;
            }
            arr.push(x);
        }
        array.push(arr);
    }
    document.getElementById("id_outV2").innerText="Số lượng số nguyên tố: "+dem;
}

function on_V3() {
    let m=parseInt(prompt("Nhập m:"));
    let n=parseInt(prompt("Nhập n:"));
    let array=[];
    for(let i=0; i<m; i++)
    {
        let arr=[];
        for(let j=0; j<n; j++)
        {
            let x=parseInt(prompt("Nhập phần tử hàng "+(i+1)+" cột "+(j+1)+":"));
            arr.push(x);
        }
        array.push(arr);
    }

    let min=array[0][0];
    let max=array[0][0];
    for (let i=0; i<m; i++)
    {
        for (let j=0; j<n; j++)
        {
            if(min>array[i][j]) min=array[i][j];
            if(max<array[i][j]) max=array[i][j];
        }
    }
    document.getElementById("id_outV3").innerText="Min = "+min+", Max = "+max;
}
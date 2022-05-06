function on_IV1() {
    let str=document.getElementById("id_IV").value;
    let str1=str.replace(/\s+/g,' ').trim();
    let arr_str=str1.split(' ');
    let tu=arr_str[0];
    for(let i=0; i<arr_str.length; i++)
    {
        if(tu.length<arr_str[i].length)
        {
            tu=arr_str[i];
        }
    }
    document.getElementById("id_outIV1").innerHTML="Chuẩn hóa: "+str+"<br>"+" Từ dài nhất: "+tu;
}

function on_IV2() {
    let str=document.getElementById("id_IV2").value;
    let str1=str.replace(/\s+/g,'').trim();
    let dem=0;
    for(let i=0; i<str1.length; i++)
    {
        let kt=true;
        for(let j=0; j<i; j++)
        {
            if(str1[i]===str1[j])
            {
                kt=false;
                break;
            }
        }
        if(kt) dem++;
    }
    document.getElementById("id_outIV2").innerHTML="Số ký tự khác nhau: "+dem;
}

function dem_KT(str,a) {
    let dem=0;
    for(let i=0; i<str.length; i++)
    {
        if(a==str[i]) dem++;
    }
    return dem;
}

function on_IV3() {
    let str1=document.getElementById("id_IV3_1").value;
    let str2=document.getElementById("id_IV3_2").value;
    let dem=0;
    let arr=[];
    for(let i=0; i<str1.length; i++)
    {
        let kt=true;
        for(let j=0; j<i; j++)
        {
            if(str1[i]===str1[j])
            {
                kt=false;
                break;
            }
        }
        if(kt) arr.push(str1[i]);
    }

    for(let i=0; i<arr.length; i++)
    {
        let m1=dem_KT(str1,arr[i]);
        let m2=dem_KT(str2,arr[i]);
        if(m1>0 && m2>0)
        {
            if(m1>m2)
            {
                dem+=m2;
            }
            else
            {
                dem+=m1;
            }
        }
    }
    document.getElementById("id_outIV3").innerText="Số ký tự chung: "+dem;
}

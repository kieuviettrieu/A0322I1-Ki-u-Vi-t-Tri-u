
let Array_x=[];
function on_muave() {
    if(Array_x.length<4)
    {
        let chon=parseInt(prompt("Bạn có 2 lựa chọn: 1.Bạn muốn tự chọn số/2.Hệ thống tự random"));
        let arr=[];
        if(chon===1)
        {
            for(let i=0; i<6; i++)
            {
                let x=prompt("Nhập số thứ "+(i+1)+"(số có 2 chữ số):");
                arr.push(x)
            }
        }
        else
        if(chon===2)
        {
            for(let i=0; i<6; i++)
            {
                let x=Math.abs(parseInt(Math.random()*100)-1);
                let x1='';
                if(x<10)
                {
                    x1='0'+x;
                }
                else
                {
                    x1+=x;
                }
                arr.push(x1);
            }
        }
        Array_x.push(arr);
        on_();
    }
    else
    {
        alert("Bạn chỉ được mua tối đa 4 vé!")
    }
}

function on_() {
    let str='';
    str+="<table border='1' >"
    for(let i=0; i<Array_x.length; i++)
    {
        str+="<tr>";
        for(let j=0; j<Array_x[i].length; j++)
        {
            str+="<td>"+Array_x[i][j]+"</td>"
        }
        str+="</tr>"
    }
    str+="</table>";
    document.getElementById("id_outVI").innerHTML=str;
}
let kq=[11,22,33,44,55,66];
function trungso() {
    for(let i=0; i<Array_x.length; i++)
    {
        let kt=true;
        for(let j=0; j<Array_x[i].length; j++)
        {
            if(kq[j]!=Array_x[i][j])
            {
                kt=false;
                break;
            }
        }
        if(kt)
        {
            return 1;
        }
    }

    for(let i=0; i<Array_x.length; i++)
    {
        let kt=true;
        for(let j=1; j<Array_x[i].length; j++)
        {
            if(kq[j]!=Array_x[i][j])
            {
                kt=false;
                break;
            }
        }
        if(kt)
        {
            return 2;
        }
    }

    for(let i=0; i<Array_x.length; i++)
    {
        let kt=true;
        for(let j=3; j<Array_x[i].length; j++)
        {
            if(kq[j]!=Array_x[i][j])
            {
                kt=false;
                break;
            }
        }
        if(kt)
        {
            return 3;
        }
    }
    return false;
}

function on_xem() {
    if(Array_x.length===0)
    {
        alert("Bạn không có vé nào!")
    }
    else
    if(trungso()==1)
    {
        alert("Bạn đã trúng giải nhất!"+" vé "+kq.join("-"));
    }
    else
        if(trungso()==2)
        {
            alert("Bạn đã trúng giải nhì(với 5 số cuối): "+kq.join("-"));
        }
        else
            if(trungso()==3)
            {
                alert("Bạn đã trúng giải ba(với 3 số cuối): "+kq.join("-"));
            }
            else
            {
                alert("Chúc bạn may mắn lần sau!");
            }

}
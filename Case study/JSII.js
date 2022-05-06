function on_II1() {
    let luong=parseFloat(document.getElementById("id_luong").value);
    let thue=0;
    if(luong>15000000)
    {
        thue=luong*0.2;
        luong-=thue;
    }
    else
        if(luong>7000000)
        {
            thue=luong*0.1;
            luong-=thue;
        }
        else
        {
            thue=luong*0.05;
            luong-=thue;
        }
    luong=parseInt(luong);
    thue=parseInt(thue);
    document.getElementById("id_outII1").innerHTML="Thuế thu nhập cá nhân: "+thue+
                                                             "vnd<br> Lương nhận được: "+luong+"vnd";
}

function on_II2() {
    let array_kytu=['O','U','I','A','E'];
    let kytu=document.getElementById("id_kytu").value;
    let str='Phụ âm';
    for (let i=0; i<array_kytu.length; i++)
    {
        if(kytu.toUpperCase()===array_kytu[i])
        {
            str="Nguyên âm";
        }
    }
    document.getElementById("id_outII2").innerText=str;

}
let sub = document.getElementById("sub");
sub.addEventListener("click", onsub)

// let tidoi=[
//     {"Viet Nam",}
// ]


function onsub() {
    let val;
    let first=document.getElementById("selec_first").value;
    let last=document.getElementById("selec_last").value;
    let num = document.getElementById("number").value;
    if(first==="Viet Nam" && last==="USD")
    {
        val=num/23000;
        val+=" USD";
    }
    if(first==="Viet Nam" && last==="VND")
    {
        val=num+" VND"
    }

    if(first==="My" && last==="USD")
    {
        val=num+" USD"
    }

    if(first==="My" && last==="VND")
    {
        val=num*23000;
        val+=" VND";
    }

    if(first==="My" && last==="ERO")
    {
        val=num/1.5;
        val+=" ERO";
    }

    if(first==="Viet Nam" && last==="ERO")
    {
        val=num/34500;
        val+=" ERO";
    }

    document.getElementById("view").innerHTML=val;
}
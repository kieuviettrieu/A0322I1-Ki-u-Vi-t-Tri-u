function AC() {
    document.getElementById("intext").value='';
}

function khong() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'0';
}

function mot() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'1';
}

function hai() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'2';
}

function ba() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'3';
}

function bon() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'4';
}

function nam() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'5';
}

function sau() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'6';
}

function bay() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'7';
}

function tam() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'8';
}

function chin() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'9';
}

function cong() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'+';
}

function tru() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'-';
}

function nhan() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+'x';
}

function chia() {
    let a=document.getElementById("intext").value;
    document.getElementById("intext").value=a+':';
}


function convert() {
    let input=document.getElementById("intext").value;
    let sum=0;
    for(let i=0; i<input.length; i++)
    {
        let b1=parseInt(input[i]);
        sum+=b1;
        i=i+1;
        let b=input[i];
        i=i+1;
        if(b=='+')
        {
            sum=sum+parseInt(input[i]);
        }
        else
            if(b=='-')
            {
                sum=sum-parseInt(input[i]);
            }
            else
                if(b=='x')
                {
                    sum*=parseInt(input[i]);
                }
                else
                    if(b==':')
                    {
                        sum/=parseInt(input[i]);
                    }
    }
    document.getElementById("intext").value=sum;
}

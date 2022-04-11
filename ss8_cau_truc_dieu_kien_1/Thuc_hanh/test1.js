function kt_nam() {
    let txt;
    let year=parseInt(prompt("Enter year:"));
    if(year%400==0 || (year%4==0 && year%100!=0))
    {
        txt=year+" is a leap year";
    }
    else
    {
        txt=year+" is NOT a leap year";
    }
    alert(txt);
}

function kt_str() {
    let str=prompt('What is the "official" name of JavaScript?');
    if(str=="ECMAScript")
    {
        alert("Right!");
    }
    else
    {
        alert("Didn’t know? ECMAScript!");
    }
}


function bai_1() {
    let browser=prompt("Enter is here:");
    switch (browser) {
        case "Edge":
            alert("You've got the Edge!");
            break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}


function bai_2() {
    let a = parseInt(prompt('a?', ''));
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;
    }
}


function bai_3() {
    let a=parseInt(prompt("Enter a:"));
    if(a>0)
    {
        alert(1);
    }
    else
        if(a<0)
        {
            alert(-1);
        }
        else {
            alert(0);
        }
}

function bai1() {
    let a=parseInt(prompt("Enter a:"));
    let b=parseInt(prompt("Enter b:"));
    let result;
    if ((a + b) < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }
    alert(result);
}

function bai2() {
    let login=prompt("Enter Login:")
    let message;

    if (login == 'Employee') {
        message = 'Hello';
    } else if (login == 'Director') {
        message = 'Greetings';
    } else if (login == '') {
        message = 'No login';
    } else {
        message = '';
    }
    alert(message);
}
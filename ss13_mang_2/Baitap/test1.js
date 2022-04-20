let myColor = ["Red", "Green", "White", "Black","Gray"];
function bai1() {
    console.log(myColor);
    console.log(myColor.join(','));
}

function bai2() {
    let str=prompt("Enter number: ");
    let a=[];
    a.push(str[0]);
    for(let i=1; i<str.length; i++)
    {
        if(str[i-1]%2==0 && str[i]%2==0)
        {
            a.push('-',str[i]);
        }
        else
        {
            a.push(str[i]);
        }
    };
    a=a.join('');
    console.log(a);
}

function bai3() {
    let str=prompt("Enter string: ");
    let arr=[];
    for(let i=0; i<str.length; i++)
    {
        let k=str[i].toUpperCase();
        if(k!==str[i])
        {
            arr.push(str[i].toUpperCase());
        }
        else
        {
            arr.push(str[i].toLowerCase());
        }
    }
    console.log(arr.join(''));

}

let dictionary=[
    ["English","Tiếng Anh"],
    ["Play","Chơi"],
    ["Run","Chạy"],
    ["I love you","Tôi yêu bạn"],
    ["Good job","Tốt lắm"]
]
function convert() {
    let english=document.getElementById("engl").value.toUpperCase();
    if(english!='')
    {
        let kt=0;
        for (let i=0; i<dictionary.length; i++)
        {
            let st=dictionary[i][0].toUpperCase();
            if(st==english)
            {
                document.getElementById("vietn").value=dictionary[i][1];
                kt=1;
                break;
            }
        }
        if(kt==0)
        {
            document.getElementById("vietn").value="Không tìm thấy!";
        }

    }
}

let str_are="Bạn là đồ ngốc!";
let dem_text=0;
function onchange_textarea() {
    let ouput='';
    for (let i=0; i<=dem_text; i++)
    {
        ouput+=str_are[i];
    }
    document.getElementById("id_area").value=ouput;
    dem_text++;
    if(dem_text>=str_are.length)
    {
        dem_text=0;
    }
}


function txt_1() {
    // let arr=[];
    let dem=0;
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        if(x>=10)
        {
            dem++;
        }
    }
    alert("Có "+dem+" số nguyên lớn hơn hoặc bằng 10");
}

function txt_2() {
    let dem=0;
    let arr=[];
    while (dem<10)
    {
        let x=parseInt(prompt("Enter element "+dem+": "));
        if(arr.indexOf(x)===-1)
        {
            arr.push(x);
            dem++;
        }
    }

    let max=arr[0];
    for (let i=0; i<arr.length; i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }

    alert("Max = "+max+", index "+arr.indexOf(max));
}

function txt_3() {
    let n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    }

    let arr=[];
    let sum=0;
    for (let i=0; i<n; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        arr.push(x);
        sum+=x;
    }
    let trung_binh=sum/n;

    let max=arr[0];
    for (let i=0; i<arr.length; i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    alert("Max = "+max+", giá trị trung bình = "+trung_binh);
}

function txt_4() {
    let n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        arr.push(x);
    }
    arr.reverse();
    alert(arr);
}

function txt_5() {
    let str=prompt("Nhập chuỗi số nguyên: ")
    let dem=0;
    for (let i=0; i<str.length; i++)
    {
        if(str[i]==='-')
        {
            dem++;
        }
    }
    for (let i=1; i<str.length; i++)
    {
        if(str[i-1]==='-' && str[i]==='-')
        {
            dem--;
        }
    }
    if(str[str.length-1]==='-') dem--;
    alert("Số lượng số nguyên âm trong chuỗi: "+dem);
}

function txt_6() {
    let arr=[];
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        arr.push(x);
    }
    let num_V=parseInt(prompt("Nhập số nguyên V: "));
    if(arr.indexOf(num_V)!==-1)
    {
        alert("V is in the array");
    }
    else
    {
        alert("V is not in the array");
    }
}

function txt_7() {
    let arr=[];
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        arr.push(x);
    }
    let num_V=parseInt(prompt("Nhập số nguyên V: "));
    let ind=arr.indexOf(num_V);
    if(ind!==-1)
    {
        while (ind!==-1)
        {
            for (let i=ind; i<arr.length-1; i++)
            {
                arr[i]=arr[i+1];
            }
            ind=arr.indexOf(num_V);
            arr[arr.length-1]=0;
        }
        alert(arr);
    }
    else
    {
        alert("V is not in the array");
    }
}

function txt_8() {
    let arr=[];
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter element "+i+": "));
        arr.push(x);
    }
    arr.sort(function (a,b) {
        return b-a;
    })
    alert(arr);
}

function txt_9() {
    let arr1=[];
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter Array_1 element "+i+": "));
        arr1.push(x);
    }

    let arr2=[];
    for (let i=0; i<10; i++)
    {
        let x=parseInt(prompt("Enter Array_2 element "+i+": "));
        arr2.push(x);
    }
    let new_arr=arr1.concat(arr2);
    alert(new_arr);
}

function cli1() {
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for (let i=0; i<a.length; i++)
    {
        console.log("Row "+i)
        for (let j=0; j<a[i].length; j++)
        {
            console.log(a[i][j]);
        }
    }
}

function cli2() {
    let n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=prompt("Enter element "+i+": ");
        arr.push(x);
    }
    arr.reverse();
    let str=arr.join('');
    console.log(str);
}

function cli3() {
    let n=parseInt(prompt("Nhập số lượng ký tự của mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng ký tự của mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=(prompt("Enter char element "+i+": "));
        arr.push(x);
    }

    let dem=0;
    for (let i=0; i<arr.length; i++)
    {
        switch (arr[i]) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                dem++;
        }
    }
    alert("Số lượng ký tự số = "+dem);
}

function cli4() {
    let str=prompt("Enter string: ");
    if (str!=='')
    {
        let arr=str.split(' ');
        alert("Số từ trong chuỗi: "+arr.length);
    }else
    {
        alert("Số từ trong chuỗi: "+0);
    }
}

function cli5() {
    let str1=prompt("Enter string 1: ");
    let str2=prompt("Enter string 2: ");
    if(str1===str2)
    {
        alert("Alike");
    }
    else
    {
        alert("Unlike");
    }
}

function cli6() {
    let n=parseInt(prompt("Nhập số lượng ký tự của mảng: "));
    while (n<=0)
    {
        n=parseInt(prompt("Nhập số lượng ký tự của mảng: "));
    }

    let arr=[];
    for (let i=0; i<n; i++)
    {
        let x=(prompt("Enter char element "+i+": "));
        arr.push(x);
    }

    for (let i=0; i<n; i++)
    {
        if(arr[i]=='-')
        {
            arr[i]='_';
        }
    }
    alert(arr);
}
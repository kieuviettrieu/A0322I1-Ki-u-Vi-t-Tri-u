let arr=[]
for (let i=0; i<20; i++)
{
    arr[i]=[];
    for(let j=0; j<20; j++)
    {
        arr[i].push('');
    }
}
let X_O='X';
function onstart() {
    X_O='X';
    for (let i=0; i<20; i++)
    {
        arr[i]=[];
        for(let j=0; j<20; j++)
        {
            arr[i][j]='';
        }
    }
    let sout='';
    let x=40;
    let y;
    for (let i = 0; i <20; i++) {
        x+=40;
        y=-40;
        for (let j = 0; j < 20; j++) {
            y+=40;
            sout = sout +"<div onclick='ondiv("+i+","+j+")"+"' style='position:absolute; width: 40px; height: 40px; left: "+y+"px; " +
                "top: "+x+"px" + "' class='cell'></div>";
        }
    }
    document.getElementById("id_table").innerHTML=sout;
}

function ondiv(i1,j1) {
    if(end_game()===false)
    {
        if(X_O==='X'&& arr[i1][j1]!=='X' && arr[i1][j1]!=='O')
        {
            arr[i1][j1]='X';
            X_O='O';
        }
        else
        if (X_O==='O' && arr[i1][j1]!=='X' && arr[i1][j1]!=='O')
        {
            arr[i1][j1]='O';
            X_O='X';
        }
        if(end_game())
        {
            alert('Win game!');
        }
        let sout='';
        let x=40;
        let y;
        for (let i = 0; i <20; i++) {
            x+=40;
            y=-40;
            for (let j = 0; j < 20; j++) {
                y+=40;
                sout = sout +"<div onclick='ondiv("+i+","+j+")"+"' style='position:absolute; width: 40px; height: 40px; left: "+y+"px; " +
                    "top: "+x+"px" + "' class='cell'>"+arr[i][j]+"</div>";
            }
        }
        document.getElementById("id_table").innerHTML=sout;
    }
}

function end_game() {
    for(let i=0; i<20; i++)
    {
        let dem=0;
        for(let j=1; j<20; j++)
        {
            if(arr[i][j]===arr[i][j-1] && (arr[i][j]==='X' || arr[i][j]==='O'))
            {
                dem++;
            }
            else
            {
                dem=0;
            }
            if(dem===4)
            {
                return true;
            }
        }
    }

    for(let i=0; i<20; i++)
    {
        let dem=0;
        for(let j=1; j<20; j++)
        {
            if(arr[j][i]===arr[j-1][i] && (arr[j][i]==='X' || arr[j][i]==='O'))
            {
                dem++;
            }
            else
            {
                dem=0;
            }
            if(dem===4)
            {
                return true;
            }
        }
    }
    //code kiểm tra đường chéo

    return false;
}



let arr=[];

function add_element_to_array() {
    let value=document.getElementById("txtValue").value;
    if(value!='')
    {
        arr.push(value);
        document.getElementById("txtValue").value='';
    }
}

function display_array() {
    let st='';
    for(let i=0; i<arr.length; i++)
    {
        st=st+"Element "+i+" = "+arr[i]+"<br/>";
    }
    document.getElementById("result").innerHTML=st;
}

let ar1=[4,2,65,23,-5,-66,3]
function daonguoc() {
    let first=0;
    let last=ar1.length-1;
    while (first<last)
    {
        let val=ar1[first];
        ar1[first]=ar1[last];
        ar1[last]=val;
        first++;
        last--;
    }
    document.getElementById("id1").innerHTML=ar1;
}

function search_arr() {
    let arr2=[-3,0,1,2,4,5,7,11];
    let value=prompt("Enter value: ");
    for(let i=0; i<arr2.length; i++)
    {
        if(arr2[i]==value)
        {
            alert("Value "+arr2[i]+" found at "+i);
            return 0;
        }
    }
    alert("Value "+value+" không tồn tại trong mảng!");
}

function search_max_arr() {
    let arr3=[-5,-2,0,1,75,23,11];
    let st='';
    let max=arr3[0];
    let inde=0;
    for(let i=0; i<arr3.length; i++)
    {
        st=st+"Element "+i+" = "+arr3[i]+"<br/>";
        if(max<arr3[i])
        {
            max=arr3[i];
            inde=i;
        }
    }
    st+="<br/>"+"Max Array: "+max+" at position "+inde;

    document.getElementById("id2").innerHTML=st;
}
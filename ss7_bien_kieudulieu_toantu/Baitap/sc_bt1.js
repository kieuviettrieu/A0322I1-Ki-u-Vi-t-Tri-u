function fclick1() {
    let d_ly=prompt("Nhập điểm Vật lý");
    let d_hoa=prompt("Nhập điểm Hóa");
    let d_sinh=prompt("Nhập điểm Sinh");

    let sinh=parseInt(d_sinh);
    let ly=parseInt(d_ly);
    let hoa=parseInt(d_hoa);
    let d_tb=(ly+hoa+sinh)/3;
    let total=ly+hoa+sinh;
    document.write("Điểm trung bình: "+d_tb);
    document.write('<br/>');
    document.write("Tổng điểm: "+total);
}

function fclick2() {
    let in_do=prompt("Nhập độ C");
    let do_c=parseInt(in_do);
    let do_f=(9*do_c)/5+32;
    document.write("Độ F: "+do_f)
}

function fclick3() {
    let in_R=prompt("Nhập bán kính đường tròn: ");
    let R=parseInt(in_R);
    let S=3.14*R*R;
    document.write("Diện tích đường tròn: "+S);
}

function fclick4() {
    let in_R=prompt("Nhập bán kính đường tròn: ");
    let R=parseInt(in_R);
    let chuvi=2*3.14*R;
    document.write("Chu vi đường tròn: "+chuvi);
}
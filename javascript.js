//Bai 1
document.getElementById("checkMod").addEventListener("click",function (){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    if(num1 % num2 == 0){
        alert("Số thứ nhất chia hết cho số thứ hai");
    }
    else alert("Số thứ nhất không chia hết cho số thứ hai");
})
//Bai 2
document.getElementById("checkAge").addEventListener("click",function (){
    let age = parseInt(document.getElementById("age").value);
    if(age>=16){
        document.getElementById("resultAge").innerHTML = "Bạn đủ điều kiện vào lớp 10"

    }
    else document.getElementById("resultAge").innerHTML = "Bạn không điều kiện vào lớp 10"
})
//Bài 3
document.getElementById("checkItg").addEventListener("click",function (){
    let num = Math.round(document.getElementById("numItg").value);
    if(num>0){
        document.getElementById("resultItg").innerHTML = "Số bạn nhập lớn hơn 0"
    }
    else if(num<0)
    {
        document.getElementById("resultItg").innerHTML = "Số bạn nhập nhỏ hơn 0"
    }
    else document.getElementById("resultItg").innerHTML = "Số bạn nhập bằng 0"
})

// Bai 4
document.getElementById("checkMax").addEventListener("click",function (){
    let num1 = parseInt(document.getElementById("so1").value);
    let num2 = parseInt(document.getElementById("so2").value);
    let num3 = parseInt(document.getElementById("so3").value);
    console.log(num1)
    console.log(num2)
    console.log(num3)
    var max;
    if(num1>num2){
        {if(num1>num3){
            max = num1;
            console.log(max);
        }
        else {max = num3};}
    }
    else
    {if(num2>num3){
        max = num2;
    }
    else max = num3;
    }
    document.getElementById("resultMax").innerHTML = "Số lớn nhất là số " + max;

})
// Bài 5
    document.getElementById('check5').addEventListener('click', classification);
    function classification() {
    let midScore = +(document.getElementById('midscore').value);
    let lastScore = +(document.getElementById('lastscore').value);
    let diemTrungBinh = (midScore + lastScore)/2
        if (diemTrungBinh >= 8) {
            alert('Học sinh giỏi');
        } else if (diemTrungBinh >= 6) {
            alert('Học sinh khá');
        } else if (diemTrungBinh >= 4) {
            alert('Học sinh trung bình');
        } else
            alert('Học sinh yếu');
}

// Bài 6
function money(){
        let a = document.getElementById('doanhSo').value;
        a = parseInt(a);
        let b = '';
        if (a >= 20000000) {
            b = a * 0.1;
        } else if ( a >= 10000000) {
            b = a * 0.05
        } else if (a >= 5000000) {
            b = a * 0.03
        } else b = 'Chưa đủ doanh số!';
        document.getElementById('result-6').innerHTML = b;
}
// Bài 7
function calculateFee(value) {

    let fee = 0;
    if (value < 10) {
        fee = value * 10000;
    } else if (value < 5) {
        fee = value * 150
    } else {
        fee = value * 20000;
    }
}

    function calculateFee(value) {

        let fee = 0;
        if (value < 10) {
            fee = value * 10000;
        } else if (value < 5) {
            fee = value * 15000;
        } else {
            fee = value * 20000;
        }
        document.querySelector('#result-7').innerText = `Cước ${fee} VND`;
}

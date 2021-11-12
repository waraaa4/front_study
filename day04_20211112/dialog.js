// addEventListener를 이용하여
// id2가 적용된 버튼을 클릭했을 때 익명함수 호출
const btn1 = document.getElementById('id2');
btn1.addEventListener('click', function(){
    console.log("confirm 호출됨")
    const result = confirm("컨펌함수입니다")
    if(result){
        console.log("확인을 누르셨네요")
    } else {
        console.log("취소를 누르셨네요")
    }
});

// addEventListener를 이용하여
// id3가 적용된 버튼을 클릭했을 때
// promptFunction 함수 호출
const btn2 = document.getElementById('id3');
btn2.addEventListener('click', promptFunction);

function promptFunction(){
    console.log("promptFunction 호출됨")
}

function alertFunction(){
    console.log("alert호출됨")
    alert("asd")
}
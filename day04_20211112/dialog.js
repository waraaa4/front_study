function alertFunction(){
    console.log("alertFunction 호출됨")
}

const ele1 = document.getElementById('id2');
ele1.addEventListener('click', function(){
    console.log("id2")
});

const ele2 = document.getElementById('id3');
ele2.addEventListener('click', promptFunction());

function promptFunction(){
    console.log("id3")
}
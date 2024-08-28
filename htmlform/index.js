let stack = []

function saveuser(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('Email').value;
    let phone = document.getElementById('phNumber').value;

    if(!fname || !lname || !email || !phone){
        alert('kindly fill all field');
    }
    var user = {
        firstName : fname,
        lastName : lname,
        Email : email,
        phoneNumber : phone 
    }
    stack.push(user);
    let result = document.getElementById('outputelement');
    result.textContent = JSON.stringify(stack,null,4);
}
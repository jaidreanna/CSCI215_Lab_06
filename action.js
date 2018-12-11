function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}
document.getElementById('name').onkeyup = function {

    var regEx = new RegExp('<');
    if(regExp.test(document.getElementbyId('name').value)) {

        name.style.backgroundColor = 'red';
    } else {
        name.style.backgroundColor = '';
    }
};



function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById('age').value;
    if(regEx.test(age)) {
    console.log("contains invalid characters" + document.getElementById('age').value;
    document.getElementById("age").style.backgroundColor = "red";

       
    } else {
       document.getElementById("age").style.backgroundColor = ''
    }
}

function validate (){
    if (checkEmail(document.getElementById("email").value)){
        alert("Check Email");
        var inputs = document.getElementsByClassName('input');
        for (var i = 0; i <inputs.length; i++) {
            inputs[i].value = '';

        }
    }else {
        alert("Failed to Validate. Please check enters for information.")
    }
}

var regEx = "";



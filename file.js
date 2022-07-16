// let genrated = document.getElementById("genrated");

// if(genrated){
//     genrated.addEventListener('click', click_pass);
// }

document.getElementById("genrated").addEventListener("click", click_pass);


function click_pass() {
    let length_pass = document.getElementById("fpass").value;
    let alpha_pass = document.getElementById("falpha").value;
    let digi_pass = document.getElementById("fdigit").value;
    let spl_pass = document.getElementById("fsplchar").value;


    let pass = genrate_random_password(length_pass, alpha_pass, digi_pass, spl_pass);
    return_vals(pass);
    let result = hash(pass);
    return_hash(result);
    // console.log("SHA256 HEX CODE:", result);

}

document.getElementById("clean").addEventListener("click", clear_all);

function clear_all() {
    document.getElementById("fpass").value = '';
    document.getElementById("falpha").value = '';
    document.getElementById("fdigit").value = '';
    document.getElementById("fsplchar").value = '';
    document.getElementById('fgenpass').value = '';
    document.getElementById('fhexpass').value = '';

}

function return_vals(password) {

    document.getElementById("fgenpass").value = password;

}

function return_hash(password) {

    document.getElementById("fhexpass").value = password;

}

// document.getElementById('add').value = sum;


let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let special_charaters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ':', '<', '>', '?', '|']


let charater = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

function range(start, end) {
    var ans = [];
    for (let i = start; i < end; i++) {
        ans.push(i);
    }
    return ans;
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function genrate_random_password(length_pass, length_pass, digi_pass, spl_pass) {
    let total_length = parseInt(length_pass);
    let charater_length = parseInt(length_pass);
    let digit_length = parseInt(digi_pass);
    let spl_charater = parseInt(spl_pass);


    // console.log(input_arg);
    // console.log("length of the pasword", total_length);
    // console.log("alphabet count of the pasword", charater_length);
    // console.log("digit count of the pasword", digit_length);
    // console.log("special charater count of the pasword", spl_charater);

    let charater_counts = charater_length + digit_length + spl_charater;
    // console.log(charater);

    if (charater > total_length) {
        // console.log("Characters total count is greater than the password length");
        return;
    }

    let password = [];

    for (let i in range(0, charater_length)) {
        password.push(choose(alphabets));
    }

    for (let i in range(0, digit_length)) {
        password.push(choose(digits));
    }

    for (let i in range(0, spl_charater)) {
        password.push(choose(special_charaters));
    }

    // console.log(password);
    let random_pass = shuffle(password);

    let genrated_password = random_pass.join('')
    // console.log("Genrated Password:", genrated_password);



    return genrated_password;

}

function sha256(message) {
    // encode as UTF-8
    var sha256 = new jsSHA('SHA-256', 'TEXT');
    sha256.update(message);
    var hash = sha256.getHash("HEX");
    return hash;
}

function hash(string) {
    return sha256(string);
}

// function help(){
//     console.log(`

//     For exmaple: If i need a password of length 10, containing 5 charaters,
//                  3 digits, 2 special charater, for that we have to type

//     I/P >>> hashPaS 10 5 3 2

//     (where 10--> total password length, 5 --> charater length,
//            3--> digit length, 2--> special charater length)

//     O/P >>>

//     length of the pasword 10
//     alphabet count of the pasword 5
//     digit count of the pasword 3
//     special charater count of the pasword 2
//     Genrated Password: A:4+wa6u7d
//     SHA256CODE: af99f733a36dc57fd4b3d76daed893dfb279adc1341a8cd7a7f6487dbb0fa7e0


//     for need nay help type this below command in the terminal
//     I/P >>> hashPaS help

//     note:

//     I/P ---> means input
//     o/p ---> means output`)
// }

// if(input_arg[0] == 'help' || input_arg[0] == 'HELP' || input_arg[0] == 'Help'){
//     help();
//     return;
// }
// }else if(input_arg[0] == NaN){
//     console.log("please enter the parameter for more help type 'passCreator help'");
//     return;
// }

// document.getElementById("download").addEventListener("click", WriteToFile);

// function WriteToFile() {

//     // const blob1 = new Blob([strPass], { type: 'text/csv' });

//     var gpass = document.getElementById('fgenpass').value;
//     var hpass = document.getElementById('fhexpass').value;

//     var strPass = "";
//     strPass = "Genrated Password --------> " + gpass + "       Sha256 HexPass -------> " + hpass;


//     var a = window.document.createElement('a');
//     a.href = window.URL.createObjectURL(new Blob([strPass], { type: 'text/txt' }));
//     a.download = 'Genrated Password.txt';

//     document.body.appendChild(a);
//     a.click();

//     document.body.removeChild(a);

//     // gpass = "";
//     // hpass = "";
// }


// document.getElementById("pass1").addEventListener("click", copyToClp("pass1"));
// document.getElementById("pass2").addEventListener("click", copyToClp("pass2"));
// document.getElementById("pass3").addEventListener("click", copyToClp("pass3"));
// document.getElementById("pass4").addEventListener("click", copyToClp("pass4"));
// document.getElementById("pass5").addEventListener("click", copyToClp("pass5"));
// document.getElementById("pass6").addEventListener("click", copyToClp("pass6"));

// window.onload = function copyToClp(id){
//     let txt = document.getElementById(id).value;
//     var m = document;
//     txt = m.createTextNode(txt);
//     var w = window;
//     var b = m.body;
//     b.appendChild(txt);
//     if (b.createTextRange) {
//         var d = b.createTextRange();
//         d.moveToElementText(txt);
//         d.select();
//         m.execCommand('copy');
//     } 
//     else {
//         var d = m.createRange();
//         var g = w.getSelection;
//         d.selectNodeContents(txt);
//         g().removeAllRanges();
//         g().addRange(d);
//         m.execCommand('copy');
//         g().removeAllRanges();
//     }
//     txt.remove();
// }




function seePassword(){
// inputshi teqstis gamochena

let pass = document.getElementById("password").type;
document.getElementById("password").type="text";

console.log(pass);
console.log


let tvali=document.getElementById("parolidiv").innerHTML
console.log(pass);
console.log(tvali);
if(tvali =='<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>'){
    document.getElementById("password").type="text";
    document.getElementById("parolidiv").innerHTML = '<i class="fa-regular fa-eye"></i>';

}
else{ document.getElementById("password").type='password';
document.getElementById("parolidiv").innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
}
}

document.getElementById("parolidiv").addEventListener("click", seePassword)

{
    let a=2, b=5;
    console.log(a,b)

    console.log(a>b)
    console.log(a<b)
    if(a > b){
        console.log("sworia")
    }
    else{
        console.log("wrong")
    }
}
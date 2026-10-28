const Input = document.getElementById('resultat');
const BoutonMoin = document.getElementById('moin');
const BoutonPlus = document.getElementById('plus');
Input.value = 0;
function add(){
    Input.value = Number(Input.value) +1;
    console.log(Input.value);
}
BoutonPlus.addEventListener('click', add);
function reduct(){
    Input.value = Number(Input.value) -1;
    console.log(Input.value);
}
BoutonMoin.addEventListener('click', reduct);
console.log(Input.value);

let roug = document.getElementById("rouge")


 if (Number(Input.value) < 0)  {
     roug.classList.add("Rouge");
}

let input=document.getElementById("input")
console.log(input.value);

function ChangeColor(x){
    if(x.key === "Enter"){
        document.body.style.backgroundColor=input.value
    }
    else{
        document.body.style.backgroundColor="white"
    }
}

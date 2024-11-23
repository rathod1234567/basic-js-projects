let click=document.querySelector("p")

function validate(q){
    // let click=document.querySelector("p")
    click.textContent =click.textContent==0?q:click.textContent +q
    

}
function vanish(){

  click.textContent="0"

}

function equalTo(){
    click.textContent=eval(click.textContent)
}
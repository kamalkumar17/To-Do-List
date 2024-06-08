const item=document.querySelector("#items");
const todo_box=document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event){
        if(event.key=="Enter"){
            addTodo(this.value);
            this.value=""
        }   
    }
)

const addTodo=(item)=>{
   const list_item=document.createElement("li");
   list_item.innerHTML=`
    ${item} 
    <i class="fas fa-times"></i>
   `
   list_item.addEventListener('click',function(){
    this.classList.toggle('done');
   });

   list_item.querySelector( 'i' ).addEventListener('click',function(){
       list_item.remove(list_item);
   });
   todo_box.appendChild(list_item);
}
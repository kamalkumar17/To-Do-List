# To-Do-List
In this project, we'll create a simple yet effective to-do list application using HTML, CSS, and JavaScript. The application will allow users to add, remove, and mark tasks as completed.we can Remove the task After completed. 


![Screenshot 2024-06-08 190131](https://github.com/kamalkumar17/To-Do-List/assets/160104271/0b3dffce-f7f0-4b4e-928c-333d94a30d51)



----HTML code----

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List Body</title>
    <link rel="stylesheet" href="todo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
</head>
<body>
    <main>
        <div class="box">
            <input type="text" name="" id="item" placeholder="Write Something Here..." autofocus>
            <ul id="to-do-box">
               
                
            </ul>
            
        </div>
        
    </main>
</body>
<script src="todo.js"></script>
</html>

---------css code---------

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main{
    width: 100%;
    height: 100vh;
    background-color: #26b162;
    display: flex;
    justify-content: center;
    align-items: center;

}

.box{
    width: 500px;
    min-height:500px;
    background-color: #fff;
    padding: 15px;

}

#item{
    padding: 10px;
    width: 100%;
    font-size: 20px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 2px grey;

}

#to-do-box li{
    list-style: none;
   
}

#to-do-box li{
    position: relative;
    margin-top: 10px;
    background: #3f3b3b;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    user-select: none;
}

#to-do-box li i{
    position: absolute;
    right: 10px;
    top: 14px;
    font-size: medium;
    cursor: pointer;
}

.done{
    text-decoration: line-through;
    color: #3f3b3b;
    background: #b81818 !important;
}


--------javascript code ------------------

const item=document.getElementById('item');
const todo_box=document.getElementById('to-do-box');

item.addEventListener(
    'keyup',
    function(event){
        if(event.key==='Enter'){
            ad_todo(this.value);
            this.value="";
    }
    
}
)
const ad_todo=(item)=>{
    listitem=document.createElement('li');
    listitem.innerHTML=`
    ${item}
    <i class="fa-solid fa-xmark"></i>
    `
    listitem.addEventListener(
        'click',
        function(){
            this.classList.toggle('done');
        }
    )

    listitem.querySelector("i").addEventListener(
        'click',
        function(){
            this.parentNode.remove();
        }
    )
    todo_box.appendChild(listitem);
}

if(document.readyState!=="loading"){
    console.log("Document is ready!");
    initializeCode();
}
else{
    document.addEventListener("DOMContentLoaded",function(){
        console.log("Document is ready after waiting for!");
        initializeCode();
    })  
}

function initializeCode(){
    const button=document.getElementById("my-button");
    const header=document.getElementById("my-header");
    const addDataButton=document.getElementById("add-data");

    button.addEventListener("click",function(){
        console.log("hello world");
        header.innerHTML = "Moi maailma";
    });

    addDataButton.addEventListener("click",function(){
        const list=document.getElementById("my-list");
         
        let newText=document.createElement("li");
        newText.innerText = document.getElementById("list").value;
        list.appendChild(newText);

    });

}
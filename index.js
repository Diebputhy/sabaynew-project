let check=true;
function change(){
   
    const menu = document.querySelector(".menu-bar");
    if(check){
        menu.style.display = "block";
        check=false;
    }
    else{
        menu.style.display = "none";
        check=true;
    }
    
}
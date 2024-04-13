// declering elements

const btn=document.querySelector(".btn");
const sideBar=document.querySelector(".sidebar");

//---------------------------------------------------------------------
// activing sidebar

btn.addEventListener("click",function(){
   btn.classList.toggle("open") ;
   sideBar.classList.toggle("active")
})


let btn = document.getElementById("openbtn");
let wrap = document.getElementById("nav_wrap");
let act = document.getElementById("navList");
let flag = 0;

btn.addEventListener("click",function(){
if(flag == 0){
    act.style.display="block";
    flag = 1;
}else if(flag==1){
    act.style.display="none";
    flag = 0;
}
});

// alert(true);

var navToggle = document.querySelector("#main-nav-toggle");

var navList = document.querySelector("#main-nav-list");


if( navToggle && navList){
  navToggle.addEventListener("click",function(){
    if(navToggle.classList.contains("close")){
      navToggle.classList.remove("close");
      navList.classList.remove("open");
    }
    else{
      navToggle.classList.add("close");
      navList.classList.add("open");
    }
  })

}

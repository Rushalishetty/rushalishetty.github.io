const filterContainer=document.querySelector(".certificate-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      certificateItems=document.querySelectorAll(".certificate-item"),
      totalcertificateItems=certificateItems.length;


      for(let i=0; i<totalFilterBtn;i++){
        filterBtns[i].addEventListener("click",function(){
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue=this.getAttribute("data-filter");
          for(let k=0;k<totalcertificateItems;k++){
            if(filterValue===certificateItems[k].getAttribute("data-category")){
              certificateItems[k].classList.remove("hide");
              certificateItems[k].classList.add("show");
            }
            else{
              certificateItems[k].classList.remove("show");
              certificateItems[k].classList.add("hide");
            }
            if(filterValue=="all"){
              certificateItems[k].classList.remove("hide");
              certificateItems[k].classList.add("show");
            }
          }
        })
      }
//portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;
    for(let i=0;i<totalcertificateItems;i++){
      certificateItems[i].addEventListener("click",function(){
        itemIndex=i;
        changeItem();
        const filterValue=this.getAttribute("data-filter");
        toggleLightbox();
      })
    }
    function nextItem(){
      if(itemIndex==totalcertificateItems-1){
        itemIndex=0
      }
      else{
        itemIndex++
      }
      changeItem();
    }
    function prevItem(){
      if(itemIndex==0){
        itemIndex=totalcertificateItems-1
      }
      else{
        itemIndex--
      }
      changeItem();
    }
    function toggleLightbox() {
      lightbox.classList.toggle("open");
   }
    function changeItem() {
      imgSrc=certificateItems[itemIndex].querySelector(".certificate-img img").getAttribute("src");
      lightboxImg.src=imgSrc;
      lightboxText.innerHTML=certificateItems[itemIndex].querySelector("h4").innerHTML;
      lightboxCounter.innerHTML=itemIndex+1 + " of " + totalcertificateItems
    }
//close lightbox
lightbox.addEventListener("click",function(event){
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightbox();
  }
})
//aside navbar
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;

for(let i=0;i<totalNavList;i++){
  const a=navList[i].querySelector("a");
  a.addEventListener("click",function(){
    //remove back-section class
    for(let i=0;i<totalSection;i++){
      allSection[i].classList.remove("back-section");
    }
    for(let j=0;j<totalNavList;j++){
      if(navList[j].querySelector("a").classList.contains("active")){
        //add back section class
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200){
      asideSectionTogglerBtn();
    }
  })
}
function showSection(element){
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove("active");
  }
  const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active")
}
const navTogglerBtn=document.querySelector(".nav-toggler"),
  aside=document.querySelector(".aside");

  navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

  function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++){
      allSection[i].classList.toggle("open");
    }
  }

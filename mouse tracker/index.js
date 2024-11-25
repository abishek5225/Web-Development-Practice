let rectangle = document.querySelector("#center")

rectangle.addEventListener("mousemove", function (details){
    let location = rectangle.getBoundingClientRect();
   let insiderectangle = details.clientX - location.left;

   if(insiderectangle < 300){
    let greencolor = gsap.utils.mapRange(0,300,255,0,insiderectangle)
    gsap.to(rectangle,{
        backgroundColor: `rgb(0,${greencolor},0)`,
        ease: Power4,
    })
   }else{
    
    let bluecolor = gsap.utils.mapRange(location.width/2, location.width, 0, 225, insiderectangle);
    gsap.to(rectangle,{
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
   }
})

rectangle.addEventListener("mouseleave", function(){
    gsap.to(rectangle,{
        backgroundColor: "white"
    })
})
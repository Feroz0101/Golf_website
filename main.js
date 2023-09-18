var crsr = document.querySelector("#cursor")

var crsrBlur= document.querySelector("#cursorBlur")
document.addEventListener("mousemove",
function(dets){
    crsr.style.left = dets.x + "px",
    crsr.style.top = dets.y + "px",
    crsrBlur.style.left = dets.x  - 200 + "px",
    crsrBlur.style.top = dets.y- 200 + "px"
})


gsap.to("#nav",{
    backgroundColor: "#000", 
    duration:0.6,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -1%", 
        end:"top -40%",
        scrub: 1
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -25%",
        end:"top -80%",
        scrub:2
    }
})


var crsr = document.querySelector("#cursor")
var crsrBlur= document.querySelector("#cursorBlur")
document.addEventListener("mousemove",
function(dets){
    crsr.style.left = dets.x + 30 + "px",
    crsr.style.top = dets.y + "px",
    crsrBlur.style.left = dets.x  - 200 + "px",
    crsrBlur.style.top = dets.y- 200 + "px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


gsap.to("#nav",{
    backgroundColor: "#000", 
    duration:0.6,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%", 
        end:"top -40%",
        scrub: 2
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

// gsap.from("#aboutus img, #about-in",{
//     y:90,
//     opacity:0,
//     duration:1,
//     scrollTigger:{
//         trigger:"#aboutus",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub: 3
//     }
// })

gsap.from("#aboutus img,#about-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.1,
    scrollTrigger: {
      trigger: "#aboutus",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 3,
    },
  });


  gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#qoute1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#qoute1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#qoute2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#qoute2",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
      },
  })
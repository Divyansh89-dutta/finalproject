function locomotiveSetup() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
// locomotiveSetup();
function formDivAppearance(){
    var form = document.querySelector("form")
    var formDiv = document.querySelector("#form-div")
    var main = document.querySelector("#main")
    var input = document.querySelector("form input")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        var user = input.value
        localStorage.setItem('username', user)
        formDiv.style.display = "none"
        main.style.display = "initial"
    })
    if(localStorage.length>0){
        formDiv.style.display = "none"
        main.style.display = "initial"
    }
}
formDivAppearance();

function page1Loading(){
    let tl = gsap.timeline();
    tl.from("#page1-hero img", {
        y: 50,
        opacity: 0.6,
        stagger: 0.2,
        delay: 0.3,
    });
    tl.from("#page1-hero h3",{
        y: 20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
    }, "-=0.6");
    tl.from(
        "#bg-img1",
        {
          x: -100,
          duration: 0.4,
        },
        "-=0.6"
      );
      tl.from(
        "#bg-img2",
        {
          x: 100,
          duration: 0.4,
        },
        "-=0.6"
      );
}
var growth = document.querySelector(".loader-growth");
var loader = document.querySelector("#loader");
var grow = 0;

var loaderInterval = setInterval(function () {
  grow++;

  growth.style.width = grow + "%";
}, 18);

gsap.to("#loader img", {
  rotate: 60,
  duration: 10,
});

let tl = gsap.timeline()

tl.to("#loader img",{
  delay:2.3,
  opacity:0
})
tl.to(".loader-text",{
  opacity:0
})
tl.to("#loader",{
  top:"-100%"
})

setTimeout(function () {
  clearInterval(loaderInterval);

  page1Loading();
}, 3100);
function page2Animation() {
  gsap.to("#page2", {
    backgroundColor: "#388699",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 0%",
      end: "top -20%",
      scrub: 2,
    },
  });
  var page2h2 = document.querySelector("#page2-content-text h2").textContent;

  var splittedText = page2h2.split(" ");

  var clutter = "";

  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span> `;
    // console.log(elem)
  });

  document.querySelector("#page2-content-text h2").innerHTML = clutter;

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2-content-text h2",
      start: "top 75%",
      end: "top 45%",
      scrub: 3,
    },
  });
  tl.from("#page2-content-text h4", {
    opacity: 0,
    duration: 0.5,
  });
  tl.from("#page2-content-text h2 span", {
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    y: 15,
  });
  tl.from("#page2-content-text p", {
    opacity: 0,
    duration: 0.6,
  });
}

page2Animation()

gsap.to("#page3 .page3-side-content",{
  y:-420,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    start:"top -25%",
    end:"top -40%",
    scrub:2,
    pin:true
  }
})
var vr = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
    start:"top 0",
    end:"top -100%",
    scrub:1,
    pin:true
  }
})

vr.to("#page4-content-inner",{
  y:'-7vw',
  // opacity:0,
  duration:1,
  delay:0.5
},'anim')
vr.from("#h1two",{
  opacity:0,
  duration:1,
  delay:0.5
},'anim')
vr.to("#page4-content-inner",{
  y:'-14.5vw',
  // opacity:0,
  duration:1,
  delay:0.5
},'anim2')
vr.from("#h1three",{
  opacity:0,
  duration:1,
  delay:0.5
},'anim2')
// localStorage. clear()
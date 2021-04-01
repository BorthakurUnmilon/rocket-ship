let firstAnimation = gsap.to("#rect", {
    motionPath: {
      path: "#path",
      autoRotate: true,
      align: "#path",
      alignOrigin: [0.5, 0.5],
    },
    duration: 7,
    ease: "",
  });

// firstAnimation();
let yVal = 104
let animateRocket = () => {
    console.log(`This is animate rocket`);

    let xVal = 400;
    yVal = (yVal - 10) < -300 ? -300 : (yVal - 10);

    gsap.to("#rect", {
        x: xVal,
        y: yVal,
        duration: 1,
        ease: "power1.inOut",
      });
}

let secondAnimation = () => {
    console.log(`This is the second animation`);
    // setInterval(animateRocket,200)   
}

console.log(firstAnimation);

firstAnimation.eventCallback("onComplete", secondAnimation)
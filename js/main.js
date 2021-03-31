
const pathProp = document.getElementById('path');
const dis = pathProp.getAttribute("d")
console.log(`SVG Path properties: ${dis}`);



gsap.to("#rect", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: 1.5,
    ease: "power1.inOut",
})
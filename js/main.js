
gsap.to("#rect", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: 5,
    ease: "power1.inOut"
})
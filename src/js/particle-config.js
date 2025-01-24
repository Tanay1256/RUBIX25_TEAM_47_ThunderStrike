particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Increase the number of particles for denser smoke
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" }, // White particles for smoke
        shape: { type: "circle" }, // Circular particles
        opacity: {
            value: 0.1, // Light opacity for a subtle smoke effect
            random: true // Random opacity to make it more natural
        },
        size: {
            value: 10, // Increase particle size for puffs of smoke
            random: true // Varying sizes for a natural effect
        },
        move: {
            enable: true,
            speed: 1, // Slow movement for drifting smoke
            direction: "top", // Smoke rises upwards
            random: true, // Randomize movement direction slightly
            straight: false, // Allow particles to drift naturally
            out_mode: "out", // Particles disappear when out of bounds
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false }, // Disable hover effects for a cleaner look
            onclick: { enable: false }, // Disable click effects
            resize: true
        }
    },
    retina_detect: true
});


setInterval(particles, 300);
const div = document.querySelector("div");
function particles() {
    
    const particle = document.createElement("span");

    let sizeOfparticle = Math.random();
    particle.style.width = 50 + sizeOfparticle + "px";
    particle.style.height = 50 + sizeOfparticle + "px";

    particle.style.top = Math.random() * innerHeight + "px";
    particle.style.left = Math.random() * innerWidth + "px";

    div.appendChild(particle);

    setTimeout(() => {
        particle.remove()
    }, 2000);

}
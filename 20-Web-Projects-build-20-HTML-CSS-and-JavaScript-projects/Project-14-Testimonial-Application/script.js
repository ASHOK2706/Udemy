const testimonials = [
    {
        name:"Vijay Kumar",
        posistion:"Founder of the Dino Code Academy",
        image:"images/img1.jpg",
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Totam quia architecto hic voluptates repudiandae nisi 
        enim, perferendis modi omnis. Nesciunt consectetur ad debitis 
        animi provident!`
    },

    {
        name:"Dino Code Accademy",
        posistion:"Created Of info with Vijay",
        image:"images/img2.jpg",
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Totam quia architecto hic voluptates repudiandae nisi 
        enim, perferendis modi omnis. Nesciunt consectetur ad debitis 
        animi provident!`
    },
    {
        name:"Ashokkumar B",
        posistion:"Developer",
        image:"images/img3.jpg.jpg",
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Totam quia architecto hic voluptates repudiandae nisi 
        enim, perferendis modi omnis. Nesciunt consectetur ad debitis 
        animi provident!`
    }
];


const testimaonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currrentIndex = 0;


function showTestimonial() {
    const testimonial = testimonials[currrentIndex];
    testimaonialContainer.innerHTML = `
        <img src="${testimonial.image}" />
        <h3> ${testimonial.name}</h3>
        <h6>${testimonial.posistion}</h6>
        <p>${testimonial.testimonial}</p>
    `;

}

function changeTestimonial(direction) {
    currrentIndex += direction;
    if (currrentIndex == testimonials.length) {
        currrentIndex = 0;
    } else if (currrentIndex == -1) {
        currrentIndex = testimonials.length - 1;
    }
    showTestimonial();
}

prevButton.addEventListener("click", ()=> changeTestimonial(-1));
nextButton.addEventListener("click", ()=> changeTestimonial(1));
showTestimonial();


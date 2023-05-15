let activeTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
    // Remove active class from current testimonial
    testimonials[activeTestimonialIndex].classList.remove('active');

    // Move to next testimonial
    activeTestimonialIndex++;
    if (activeTestimonialIndex === testimonials.length) {
        activeTestimonialIndex = 0;
    }

    // Add active class to new testimonial
    testimonials[activeTestimonialIndex].classList.add('active');
}, 5000); // Change every 3 seconds

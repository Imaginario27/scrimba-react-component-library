import Testimonial from "../testimonials/Testimonial"
import testimonialImage from "../../assets/images/testimonial-image.png"
import testimonialImageMobile from "../../assets/images/testimonial-image-mobile.png"

export default function TestimonialSection (){
    return (
        <section>
            <h2>Testimonials</h2>
            <h3>With image</h3>
            <div className="testimonials">
                <Testimonial image={testimonialImage} imageMobile={testimonialImageMobile}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </Testimonial>
            </div>
            <div className="testimonials">
                <Testimonial>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </Testimonial>
            </div>
            
            
        </section>
    )
}
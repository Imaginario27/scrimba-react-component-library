/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react"
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial (
    {
        children,
        author = "Author name",
        company = "Company",
        role = "Role",
        image,
        imageMobile,
        alt
    }
) {

    const [isMobile, setIsMobile] = useState(false)

    function checkScreenWidth () {
        setIsMobile(window.innerWidth <= 700)
    }

    useEffect(() => {
        checkScreenWidth() // Check screen size when the component mounts
        window.addEventListener('resize', checkScreenWidth)

        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', checkScreenWidth)
        }
    }, [])

    
    return (
        <>
            {
                (image && imageMobile) ? 

                <div className="testimonial">
                    <div className="testimonial-image-container">
                        <img src={isMobile ? imageMobile : image} alt={alt}/>
                    </div>
                    <div className="testimonial-content">
                        <div className="testimonial-icon"><FaQuoteLeft/></div>
                        <div className="testimonial-text">{children}</div>
                        <div className="testimonial-footer">
                            <div className="testimonial-author">{author}</div>
                            <div className="testimonial-author-description">{company}, {role}</div>
                        </div>
                    </div>
                    
                </div>

                :

                <div className="testimonial testimonial-without-image">
                    <div className="testimonial-content">
                        <div className="testimonial-text">&ldquo;{children}&rdquo;</div>
                        <div className="testimonial-footer">
                            <div className="testimonial-author">{author}</div>
                            <span>/</span>
                            <div className="testimonial-author-description">{company}, {role}</div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}
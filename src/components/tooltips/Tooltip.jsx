/* eslint react/prop-types: 0 */
import { useState } from "react"

export default function Tooltip (
    { 
        children,
        icon,
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
        type = "bold",
        colour = "neutral"
    }
) {
    
    const [isVisible, setIsVisible] = useState(false)

    function showTooltip  () {
        setIsVisible(true)
    }

    function hideTooltip  () {
        setIsVisible(false)
    }

    return (
        <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {
                isVisible && (
                    <div className={`tooltip ${colour.toLowerCase()} ${type.toLowerCase()}`}>
                        {icon && <div className="tooltip-icon">{icon}</div>}
                        <p className="tooltip-text">{text}</p>
                        <div className="tooltip-arrow"></div>
                    </div>
                )
            }
        </div>
    )
}
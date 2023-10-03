/* eslint react/prop-types: 0 */

import { FaInfo } from "react-icons/fa";

export default function Card (
    {
        children,
        title = "Card title",
        icon = <FaInfo />,
        backgroundHexColor = "#191919"
    }
){
    const iconBackGroundColor = {
        backgroundColor: backgroundHexColor
    }
    return (
        <div className="card">
            <div className="card-icon" style={iconBackGroundColor}>{icon}</div>
            <h4 className="card-title">{title}</h4>
            {children && <div className="card-body">{children}</div>}
        </div>
    )
}
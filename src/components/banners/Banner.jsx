/* eslint react/prop-types: 0 */

import { FaCheckCircle } from 'react-icons/fa'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
/*

import { FaCircleXmark } from 'react-icons/fa'
import { FaCircleInfo } from 'react-icons/fa'
*/
export default function Banner(
    {
        children, 
        status = "neutral", 
        title = "Banner title"
    }
){

    let statusClass
    let icon

    if(status === "success"){
        statusClass = "green"
        icon = <FaCheckCircle />
    }
    else if(status === "warning"){
        statusClass = "yellow"
        icon = <FaExclamationTriangle />
    }
    else if(status === "error"){
        statusClass = "red"
        icon = <FaWindowClose />
       
    }
    else if(status === "neutral"){
        statusClass = "blue"
        icon = <FaInfoCircle />
    }

    return (
        <div className={`banner ${statusClass} ${children ? "multi-line" : ""}`}>
            <div className="banner-icon">{icon}</div>
            <div>
                <div className="banner-title">{title}</div>
                {children && <div className="banner-body">{children}</div>}
            </div>
        </div>
    )
}
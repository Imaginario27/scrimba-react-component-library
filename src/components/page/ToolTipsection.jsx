import Tooltip from "../tooltips/Tooltip"

import { FaInbox } from "react-icons/fa";

export default function TooltipSection (){
    return (
        <section>
            <h2>Tooltips</h2>
            <p>Hover over the buttons to display tooltips</p>
            <div className="tooltips">
                <div className="tooltips-row">
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="bold"
                            colour="neutral"
                        >
                            <button className="neutral bold">Neutral (Bold)</button>
                        </Tooltip>
                    </div>
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="light"
                            colour="neutral"
                        >
                            <button className="neutral light">Neutral (Light)</button>
                        </Tooltip>
                    </div>
                </div>
                <div className="tooltips-row">
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="bold"
                            colour="blue"
                        >
                            <button className="blue bold">Blue (Bold)</button>
                        </Tooltip>
                    </div>
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="light"
                            colour="blue"
                        >
                            <button className="blue light">Blue (Light)</button>
                        </Tooltip>
                    </div>
                </div>
                <div className="tooltips-row">
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="bold"
                            colour="purple"
                        >
                            <button className="purple bold">Purple (Bold)</button>
                        </Tooltip>
                    </div>
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="light"
                            colour="purple"
                        >
                            <button className="purple light">Purple (Light)</button>
                        </Tooltip>
                    </div>
                </div>
                <div className="tooltips-row">
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="bold"
                            colour="green"
                        >
                            <button className="green bold">Green (Bold)</button>
                        </Tooltip>
                    </div>
                    <div className="tooltips-column">
                        <Tooltip 
                            icon={<FaInbox />}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                            type="light"
                            colour="green"
                        >
                            <button className="green light">Green (Light)</button>
                        </Tooltip>
                    </div>
                </div>
            </div> 
        </section>
    )
}
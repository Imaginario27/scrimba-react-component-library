import Card from "../cards/Card"

import { FaInfo } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

export default function CardSection (){
    return (
        <section>
            <h2>Cards</h2>
            <h3>Normal</h3>
            <div className="cards">
                <Card icon={<FaInfo />} title="Easy deployment">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
            </div>
            <h3>Custom Hex Icon Color</h3>
            <div className="cards">
                <Card icon={<FaInfo />} title="Easy deployment" backgroundHexColor="#1E40AF">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
            </div>
            <h3>Custom Icon</h3>
            <div className="cards">
                <Card icon={<FaKey />} title="Easy deployment" backgroundHexColor="#1E40AF">
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card>
            </div>
            
        </section>
    )
}
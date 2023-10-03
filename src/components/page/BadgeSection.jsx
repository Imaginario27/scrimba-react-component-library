import Badge from "../badges/Badge"

export default function BadgeSection (){
    return (
        <section>
            <h2>Badges</h2>
            <h3>Square</h3>
            <div className="badges">
                <div className="badge-container">
                    <p>Gray</p>
                    <Badge colour="gray" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Red</p>
                    <Badge colour="red" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Yellow</p>
                    <Badge colour="yellow" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Green</p>
                    <Badge colour="green" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Blue</p>
                    <Badge colour="blue" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Indigo</p>
                    <Badge colour="indigo" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Purple</p>
                    <Badge colour="purple" type="square">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Pink</p>
                    <Badge colour="pink" type="square">Badge</Badge>
                </div>
            </div>
            <h3>Pill</h3>
            <div className="badges">
                <div className="badge-container">
                    <p>Gray</p>
                    <Badge colour="gray" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Red</p>
                    <Badge colour="red" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Yellow</p>
                    <Badge colour="yellow" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Green</p>
                    <Badge colour="green" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Blue</p>
                    <Badge colour="blue" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Indigo</p>
                    <Badge colour="indigo" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Purple</p>
                    <Badge colour="purple" type="pill">Badge</Badge>
                </div>
                <div className="badge-container">
                    <p>Pink</p>
                    <Badge colour="pink" type="pill">Badge</Badge>
                </div>
            </div>
        </section>
    )
}
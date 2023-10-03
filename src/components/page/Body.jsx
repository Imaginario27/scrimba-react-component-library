import BadgeSection from "./BadgeSection"
import BannerSection from "./BannerSection"
import CardSection from "./CardSection"
import TestimonialSection from "./TestimonialSection"
import TooltipSection from "./ToolTipsection"

export default function Body () {
    return (
        <main>
            <div className="container">
                <BadgeSection />
                <BannerSection />
                <CardSection />
                <TestimonialSection />
                <TooltipSection />
            </div>
        </main>
    )
}
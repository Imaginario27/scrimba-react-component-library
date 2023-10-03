import Banner from "../banners/Banner"

export default function BannerSection (){
    return (
        <section>
            <h2>Banner</h2>
            <h3>Multi line</h3>
            <div className="banners">
                <Banner status="success" title="Congratulations!">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
                <Banner status="warning" title="Attention">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
                <Banner status="error" title="There is a problem with your application">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
                <Banner status="neutral" title="Update available!">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
            </div>
            <h3>Single line</h3>
            <div className="banners">
                <Banner status="success" title="Congratulations!" />
                <Banner status="warning" title="Attention" />
                <Banner status="error" title="There is a problem with your application" />
                <Banner status="neutral" title="Update available!" />
            </div>
            
        </section>
    )
}
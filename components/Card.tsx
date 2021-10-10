import card from '../styles/card.module.sass'
import "tailwindcss/tailwind.css"
// @ts-ignore
const Card = ({ src = "/projects/placeholder.png", link = "example.com", title = "Placeholder Card", subtitle = "Placeholder Description", }) => {

    return (
        <>
            <div
                className={`${card.card} text-white lg:max-w-xl`} style={{
                    margin: '0.5rem',
                }}>
                <img className={card.border} src={src} alt="Image" />
                {/* <div className="sm:text-xs lg:text-lg sm:p-10 lg:p-5"> */}
                <div className={card.text}>
                    <a href={link} className="">

                        <h4><b>{title}</b></h4>
                        <p>{subtitle}</p>
                        <p className={`${card.link} text-black italic font-semibold`}>{
                            link
                                .replace("https://", '')
                                .replace("/nsw", 'nonstop.world')
                                .replace("/elixire", 'teme.re/elixire')
                                .replace("/yiff", 'teme.re/yiff')
                                .replace("twitter.com/temerecultum/status/1447129432494428163", "Link to Twitter Post")
                        }
                        </p>
                    </a>


                </div>
            </div>
        </>
    )
}


export default Card
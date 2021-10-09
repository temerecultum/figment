import styles from '../styles/Card.module.sass'
import "tailwindcss/tailwind.css"
// @ts-ignore
const Card = ({ src, link, title, subtitle }) => {

    return (
        <>
            <div
                className={`${styles.card_card} text-white lg:max-w-xl m-2`}>
                <img className={styles.card_border} src={src} alt="Image" />
                <div className="sm:text-xs lg:text-lg sm:p-10 lg:p-5">
                    <a href={link} className="">

                        <h4><b>{title}</b></h4>
                        <p>{subtitle}</p>
                        <p className="text-black italic font-semibold">{
                            link
                                .replace("https://", '')
                                .replace("teme.re/nsw", 'nonstop.world')
                        }
                        </p>
                    </a>


                </div>
            </div>
        </>
    )
}


export default Card
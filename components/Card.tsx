import '../styles/card.module.sass'
// @ts-ignore
const Card = ({ src, link, title, subtitle }) => {

    return (
        <>
            <div style={{
                backgroundColor: "#fc3232",
                transition: "0.3s",
                borderRadius: "10px",
                // margin: "10px",
            }}
                className="text-white lg:max-w-xl m-2"
            >
                <img src={src} alt="Image"
                    style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        maxHeight: "100%",
                    }} />
                <div className="sm:text-xs lg:text-lg sm:p-10 lg:p-5" style={{
                    padding: "20px",
                }}>
                    <a href={link} className="">

                        <h4><b>{title}</b></h4>
                        <p>{subtitle}</p>
                        <p className="text-black italic font-semibold">{
                            link
                                .replace("https://", '')
                        }
                        </p>
                    </a>


                </div>
            </div>
        </>
    )
}


export default Card
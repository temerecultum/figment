import '../styles/card.module.sass'
// @ts-ignore
const Card = ({ src, link, title, subtitle }) => {

    return (
        <>
            <div style={{
                // boxShadow: "0 5px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "#fc3232",
                transition: "0.3s",
                maxWidth: "45vw",
                maxHeight: "100%",
                borderRadius: "10px",
                margin: "10px",
            }}
                className="text-white"
            >
                <img src={src} alt="Image"
                    style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        maxHeight: "100%",
                    }} />
                <div className="sm:text-xs lg:text-lg sm:p-0 lg:p-5" style={{
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
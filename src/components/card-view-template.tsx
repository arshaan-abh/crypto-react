import CardView from "./card-view";
import TabSwitch from "./tab-switch";
import Button from "./button";
import ReactSlider from "./slider";
import battery from "../assets/battery.svg";
import chartOne from "../assets/chart-1.svg";
import chartTwo from "../assets/chart-2.svg";
import user from "../assets/user.svg";
import chartIconOne from "../assets/chart-icon-1.svg";
import chartIconTwo from "../assets/chart-icon-2.svg";
import time from "../assets/time.svg";
import bitcoin from "../assets/bitcoin.svg";

export default function CardViewTemplate() {
    return <div id="card-view-template">
        <div className="left-bar">
            <CardView icon={user} title="About" content={<>
                <div className="description" style={{marginBottom: "2rem"}}>
                    Hello everyone, I call myself Stinger!<br/>
                    I love gambling games and crypto hahaha.<br/>
                    I myself am crypto trader, and I have been in this movement for a long time, if you have questions
                    about all this, ask me.
                </div>
                <div className="slider-title" style={{marginBottom: "3rem"}}>
                    <div className="slider-title-img-container"><img src={battery} alt="Battery"/></div>
                    <div className="slider-title-text-container">
                        <div className="slider-title-text">New profile</div>
                        <div className="description">Container with ...</div>
                    </div>
                </div>
                <ReactSlider
                    defaultValue={60}
                    valueLabelDisplay="on"
                />
                <div className="border" style={{marginTop: "3rem"}}></div>
                <CoinInfo title="Balance" content="123.00 SOL" icon={bitcoin}></CoinInfo>
                <div className="border"></div>
                <CoinInfo title="Location" content="USA, Alabama" icon={bitcoin} isLast={true}></CoinInfo>
                <Button text="Edit profile"></Button>
            </>}></CardView>
        </div>
        <div className="right-bar">
            <div>
                <CardView title="Profit" icon={chartIconOne} content={
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <TabSwitch></TabSwitch>
                        <img src={chartOne} alt="Chart" className="chart"/>
                    </div>
                }></CardView>
                <CardView title="Activity" icon={chartIconTwo} content={
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <TabSwitch></TabSwitch>
                        <img src={chartTwo} alt="Chart" className="chart"/>
                    </div>
                }></CardView>
            </div>
            <CardView title="Game History" icon={time}></CardView>
        </div>
    </div>

    function CoinInfo({icon, title, content, isLast = false}: CoinInfoParam) {
        return <>
            <div className="description" style={{marginBottom: "1rem"}}>{title}</div>
            <div className="coin-info-title" style={{marginBottom: (isLast ? "2rem" : "0")}}>
                <img src={icon} alt="Icon"/>
                <div className="coin-info-content">{content}</div>
            </div>
        </>
    }
}

type CoinInfoParam = {
    icon: string
    title: string
    content: string
    isLast?: boolean
}

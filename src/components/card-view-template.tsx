import CardView from "./card-view";
import TabSwitch from "./tab-switch";

export default function CardViewTemplate() {
    return <div id="card-view-template">
        <div className="left-bar">
            <CardView title="About" content={
                <div className="description">
                    Hello everyone, I call myself Stinger!<br/>
                    I love gambling games and crypto hahaha.<br/>
                    I myself am crypto trader, and I have been in this movement for a long time, if you have questions
                    about
                    all this, ask me.
                </div>
            }></CardView>
        </div>
        <div className="right-bar">
            <div>
                <CardView title="Profit" content={<TabSwitch></TabSwitch>}></CardView>
                <CardView title="Activity" content={<TabSwitch></TabSwitch>}></CardView>
            </div>
            <CardView title="Game History"></CardView>
        </div>
    </div>
}

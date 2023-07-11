import React, {ReactNode, useEffect, useLayoutEffect, useRef, useState} from 'react';
import Button, {ButtonStyle} from "./button";
import Profile from "./profile";
import moon from "../assets/moon.svg";
import pushPin from "../assets/push-pin.svg";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import CardViewTemplate from "./card-view-template";

type DetailParam = {
    title?: ReactNode
    content?: ReactNode
    isLast?: boolean
}

export default function MainBarBody() {

    const [profileHeight, setProfileHeight] = useState<number>(0)
    const profile = useRef<HTMLDivElement>()

    useEffect(() => {
        if (profile.current)
            setProfileHeight(profile.current.offsetHeight)
    }, [])

    return <div id="main-bar-body">
        <Header></Header>
        <CardViewTemplate></CardViewTemplate>
    </div>;

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    function Header() {
        const [windowWidth] = useWindowSize()
        const [height, setHeight] = useState<number>(0)
        const header = useRef<any>()

        useEffect(() => {
            if (header.current)
                setHeight(header.current.offsetHeight)
        }, [windowWidth])

        return <div className="header-container">
            <img className="header-image" src={moon} alt="Moon"/>
            <div className="header"
                 style={{"--padding-top": `${profileHeight / 2}px`, "--height": `${height}px`} as React.CSSProperties}
                 ref={header}>
                <div className="left">
                    <Detail title="Total Game" content="1953"></Detail>
                    <Detail title="Win" content="45%"></Detail>
                    <Detail title="Loss" content="10%" isLast={true}></Detail>
                </div>
                <div className="profile-section">
                    <Profile ref={profile} isBig={true}></Profile>
                </div>
                <div className="right">
                    <Detail title="Location" content={<>
                        <img src={pushPin} alt="Push pin"/>USA
                    </>}></Detail>
                    <Detail content={<>
                        <Button icon={discord} isSmall={true}></Button>
                        <Button icon={twitter} isSmall={true} style={ButtonStyle.lightBlue}></Button>
                    </>} isLast={true}></Detail>
                </div>
            </div>
        </div>
    }

    function Detail({title = "", content = "", isLast = false}: DetailParam) {
        return <>
            <div className={"detail" + (isLast ? " last" : "")}>
                {title !== "" ? <div className="detail-title">{title}</div> : ""}
                <div className="detail-content">{content}</div>
            </div>
            <div className={"border" + (isLast ? " last" : "")}></div>
        </>
    }
}

import React from 'react'
import arshaan from "../assets/arshaan.jpg"
import bitcoin from "../assets/bitcoin.svg"
import verified from "../assets/verified.svg"

type ProfileParam = {
    isBig?: boolean
}

export default function Profile({isBig = false}: ProfileParam) {
    return isBig ? <BigProfile></BigProfile> : <SmallProfile></SmallProfile>

    function SmallProfile() {
        return <div id="profile">
            <div className="main">
                <div className="title">Arshaan</div>
                <div className="content"><img src={bitcoin} alt="Bitcoin"/> 321 SOL</div>
            </div>
            <div className="img-container">
                <img className="profile-picture" src={arshaan} alt="Arshaan"/>
                <div className="points">1</div>
            </div>
        </div>
    }

    function BigProfile() {
        return <div id="profile" className="big">
            <div className="img-container">
                <img className="profile-picture" src={arshaan} alt="Arshaan"/>
                <div className="points">1</div>
            </div>
            <div className="main">
                <div className="title">Arshaan<img src={verified} alt="Bitcoin"/></div>
            </div>
        </div>
    }
}

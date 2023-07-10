import React, {forwardRef} from 'react'
import arshaan from "../assets/arshaan.jpg"
import bitcoin from "../assets/bitcoin.svg"
import verified from "../assets/verified.svg"

type ProfileProps = {
    isBig?: boolean
}

const Profile = forwardRef<any, ProfileProps>(
    (props: ProfileProps = {isBig: false}, ref) => {

        const {isBig = false} = props

        return isBig ? <BigProfile ref={ref}/> : <SmallProfile ref={ref}/>
    })

export default Profile

const SmallProfile = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="profile" ref={ref}>
            <div className="main">
                <div className="title">Arshaan</div>
                <div className="content"><img src={bitcoin} alt="Bitcoin"/> 321 SOL</div>
            </div>
            <div className="img-container">
                <img className="profile-picture" src={arshaan} alt="Arshaan"/>
            </div>
        </div>
    )
})

const BigProfile = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="profile big" ref={ref}>
            <div className="img-container">
                <img className="profile-picture" src={arshaan} alt="Arshaan"/>
                <div className="points">1</div>
            </div>
            <div className="main">
                <div className="title">Arshaan<img src={verified} alt="Bitcoin"/></div>
            </div>
        </div>
    )
})

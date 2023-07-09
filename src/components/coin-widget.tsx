import React from 'react';
import bitcoin from "../assets/bitcoin.svg"
import trending from "../assets/trending.svg"
import arrow from "../assets/arrow.svg"
import speed from "../assets/speed.svg"

export default function CoinWidget() {

    return <div className="coin-widget">
        <div className="title"><img src={bitcoin} alt="Bitcoin"/>Bitcoin</div>
        <div className="content">
            <div className="item">
                <div className="item-name"><img src={trending} alt="Trending"/>$16.20</div>
                <div className="item-description"><img src={arrow} alt="Arrow"/>20,82%</div>
            </div>
            <div className="border"></div>
            <div className="item">
                <div className="item-name"><img src={speed} alt="Speed"/>2356.3</div>
                <div className="item-description">TX/sec</div>
            </div>
        </div>
    </div>
}

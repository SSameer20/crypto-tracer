import React from 'react'
import './Home.css'

export default function Home(){
    return(
        <>
        <div className="navigation">
            <h1 className="heading">Online Crypto Tracker</h1>
            <input type="text" className="search" />
        </div>

        <div className="crypto-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" className="crypto-img" alt="" />
            <h2>Etherum</h2>
            <h4>Symbol : ' BTC '</h4>
            <h4>price : 31080 $</h4>
            <h4>1h Price Change : 0.12</h4>

        </div>
        </>
    );
}
import React,{useState,useEffect} from 'react'
import  axios  from 'axios';
import './Home.css'

export default function Home(){
    const [search,setSearch] = useState('');
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=INR').then(
            res => {
                console.log(res.data.coins);
                setData(res.data.coins);
            });
            
    },[])
    
    const handler = event =>{
        setSearch(event.target.value);
        
    }

    return(
        <>
        <div className="navigation">
            <h1 className="heading">Online Crypto Tracker</h1>
            <input value={search} onChange={handler} className="search" placeholder=' Search for Crypto'/>
        </div>

        <div className="container">
            {data.map(crypto =>
        <div className="crypto-card">
            <img src={crypto.icon} className="crypto-img" alt="" />
            <h2>{crypto.name}</h2>
            <h4>Symbol : ' {crypto.symbol} '</h4>
            <h4>price : ₹ {crypto.price}</h4>
            <h4>1h Price Change : {crypto.priceChange1h}</h4>
  
        </div>
            )}

            </div>
        </>
    );
}
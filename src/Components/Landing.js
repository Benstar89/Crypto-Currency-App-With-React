import React, {useState , useEffect} from 'react';

//Api
import { getCoin } from '../services/api';
//Components
import Loder from './Loder';
import Coin from './Coin';
//Module-Styles
import styled from "../Styles/Landing.module.css";

const Landing = () => {
    const [coins , setCoins]  = useState([])
    const [search , setSearch] = useState("");
    const searchHandler = event => {
        setSearch(event.target.value);
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const fetchApi = async() => {
            setCoins(await getCoin());
        }
        fetchApi();
    }, [])

    return (
        <div>
            <div style={{display:"flex" , justifyContent : "center"}}>
                <input className={styled.input} type = "text" placeholder='Search' value = {search} onChange = {searchHandler}/> 
            </div>
            {
                coins.length ?
                    <div className = {styled.coinContainer}>
                        {
                            searchCoins.map(coin => <Coin key = {coin.id} 
                                                    name = {coin.name}
                                                    image = {coin.image}
                                                    symbol = {coin.symbol}
                                                    price = {coin.current_price}
                                                    marketCap = {coin.market_cap}
                                                    priceChange = {coin.price_change_percentage_24h}
                                                    />)
                        }
                    </div>
                :
                <Loder />
            }
        </div>
    );
};

export default Landing;
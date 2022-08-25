import React from 'react';

//Styles
import styled from "../Styles/Coin.module.css"

const Coin = ({name , image , symbol , price , marketCap , priceChange}) => {
    return (
        <div className={styled.container}>
            <img className={styled.image} src = {image} alt = {name}/>
            <span className={styled.name}>{name}</span>
            <span className={styled.symbol}>{symbol.toUpperCase()}</span>
            <span className={styled.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styled.greenPriceChange : styled.redPriceChange}>{priceChange}</span>
            <span className={styled.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
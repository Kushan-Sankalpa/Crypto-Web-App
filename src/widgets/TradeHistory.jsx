// src/widgets/TradeHistory.jsx
import { useState, useEffect } from "react";

const TradeHistory = () => {
    const [trades, setTrades] = useState([]);

    const generateTradeHistoryData = () => {
        let tradeData = [];
        const now = new Date();
        for (let i = 0; i < 10; i++) {
            let time = new Date(now.getTime() - i * 60000);
            tradeData.push({
                time: time.toLocaleTimeString(),
                price: (Math.random() * (50000 - 47000) + 47000).toFixed(2),
                amount: (Math.random() * 2).toFixed(3),
            });
        }
        return tradeData;
    };

    useEffect(() => {
        const updateTrades = () => {
            setTrades(generateTradeHistoryData());
        };

        updateTrades();
        const intervalId = setInterval(updateTrades, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="panel trade-history">
            <h3>Trade History</h3>
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {trades.map((trade, index) => (
                    <tr key={`trade-${index}`}>
                        <td>{trade.time}</td>
                        <td>{trade.price}</td>
                        <td>{trade.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TradeHistory;

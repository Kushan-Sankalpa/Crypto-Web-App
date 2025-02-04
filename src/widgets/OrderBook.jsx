// src/widgets/OrderBook.jsx
import { useState, useEffect } from "react";

const OrderBook = () => {
    const [orderBookData, setOrderBookData] = useState({ buys: [], sells: [] });

    const generateOrderBookData = () => {
        let orders = [];
        // Generate 10 dummy sell orders
        for (let i = 0; i < 10; i++) {
            orders.push({
                type: "sell",
                price: (Math.random() * (50000 - 49000) + 49000).toFixed(2),
                amount: (Math.random() * 2).toFixed(3),
            });
        }
        // Generate 10 dummy buy orders
        for (let i = 0; i < 10; i++) {
            orders.push({
                type: "buy",
                price: (Math.random() * (48000 - 47000) + 47000).toFixed(2),
                amount: (Math.random() * 2).toFixed(3),
            });
        }
        const sells = orders
            .filter((o) => o.type === "sell")
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        const buys = orders
            .filter((o) => o.type === "buy")
            .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        return { buys, sells };
    };

    useEffect(() => {
        const updateData = () => {
            setOrderBookData(generateOrderBookData());
        };

        updateData();
        const intervalId = setInterval(updateData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="panel">
            <h3>
                Order Book
                <br />(BTC/USDT)
            </h3>
            <table>
                <thead>
                <tr>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {orderBookData.sells.map((order, index) => (
                    <tr key={`sell-${index}`}>
                        <td className="sell">{order.price}</td>
                        <td>{order.amount}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="2" style={{ background: "#333" }}>
                        ---
                    </td>
                </tr>
                {orderBookData.buys.map((order, index) => (
                    <tr key={`buy-${index}`}>
                        <td className="buy">{order.price}</td>
                        <td>{order.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderBook;

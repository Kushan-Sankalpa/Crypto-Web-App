// src/pages/Trade.jsx
import ChartContainer from "../widgets/ChartContainer.jsx";
import OrderBook from "../widgets/OrderBook.jsx";
import TradeHistory from "../widgets/TradeHistory.jsx";

const Trade = () => {
    return (
        <div>
            <div className="main-content">
                <ChartContainer />
                <OrderBook />
            </div>
            <TradeHistory />
        </div>
    );
};

export default Trade;

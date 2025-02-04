// src/widgets/ChartContainer.jsx
import { useEffect, useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ChartContainer = () => {
    const containerRef = useRef(null);
    // Initialize with default dimensions (you can adjust these as needed)
    const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

    useEffect(() => {
        // Clear out any previously loaded widget content (if re‑rendering)
        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            // Create the TradingView script element
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/tv.js";
            script.async = true;
            script.onload = () => {
                if (window.TradingView) {
                    new window.TradingView.widget({
                        width: dimensions.width,
                        height: dimensions.height,
                        symbol: "BINANCE:BTCUSDT",
                        interval: "60",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        toolbar_bg: "#1e1e1e",
                        enable_publishing: false,
                        hide_top_toolbar: false,
                        withdateranges: true,
                        allow_symbol_change: true,
                        details: true,
                        container_id: "tradingview_chart",
                    });
                }
            };
            containerRef.current.appendChild(script);
        }
    }, [dimensions]);

    return (
        <ResizableBox
            width={dimensions.width}
            height={dimensions.height}
            minConstraints={[300, 300]}
            maxConstraints={[1200, 800]}
            resizeHandles={["se"]}
            onResizeStop={(event, { size }) => {
                setDimensions({ width: size.width, height: size.height });
            }}
        >
            {/* The container div uses 100% of its parent's dimensions */}
            <div
                id="tradingview_chart"
                ref={containerRef}
                style={{ width: "100%", height: "100%" }}
            ></div>
        </ResizableBox>
    );
};

export default ChartContainer;

import { useState } from "react";
import "./CollapsibleGroup.css";
import { div } from "framer-motion/client";

export default function CollapsibleGroup({ items }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="collapsible-group">
            <div className="button-row">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`collapsible-btn ${index === selectedIndex ? "active" : ""}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="selected-content">
                {items[selectedIndex].image && (
                    <img
                        src={items[selectedIndex].image}
                        alt={items[selectedIndex].title}
                        className="content-image"
                    />
                )}
                {items[selectedIndex].text && (
                    <div className="section-left">
                        <p className="content-text">{items[selectedIndex].text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ title, active, setSelected, id, link }) {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}

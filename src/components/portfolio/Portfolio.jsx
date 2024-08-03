import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    skillsPortfolio,
    designPortfolio,
    researchPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "skills",
            title: "Tech-Skills",
        },
        {
            id: "design",
            title: "Designing",
        },
        {
            id: "research",
            title: "Research and Publication",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "skills":
                setData(skillsPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "research":
                setData(researchPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    // console.log("title: ",item.title),
                    // console.log("selected: ",selected),
                    // console.log("setSelected: ",setSelected),
                    // console.log("active: ",selected),
                    // console.log("id: ",item.id),
                    
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        link={item.link}
                        key={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <a
                        className="item"
                        href={d.link}
                        rel="noopener noreferrer"
                        key={d.id}
                    >
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}

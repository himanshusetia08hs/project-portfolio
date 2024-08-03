import "./achievements.scss";
import {achievementData} from "../../data";

export default function Achievements() {
  
  return (
    <div className="achievements" id="achievements">
      <h1>Achievements</h1>
      <div className="container">
        {achievementData.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {/* {d.desc} */}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
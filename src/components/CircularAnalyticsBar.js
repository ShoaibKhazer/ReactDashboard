import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularAnalyticsBar = function (props) {
    return (
        <div className="col-md-2 col-6 text-center m-b-10">
            <div style={{ width: "45px", float: "left" }}>
                <CircularProgressbar
                    value={props.value}
                    styles={buildStyles({
                        pathColor: `${props.color}`
                    })}
                />
            </div>
            <h3 className="f-w-300">
                {props.value}%
            </h3>
            <span>
                {props.count}
            </span>
            <h3 className="f-w-300">&nbsp;</h3>
            <span>
                {props.description}
            </span>
        </div>
    );
};

export default CircularAnalyticsBar;
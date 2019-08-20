import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabLabel = (props) => (<div>
    <FontAwesomeIcon icon={props.icon} size="1x" />
    &nbsp;<b>{props.title}</b>
</div>);

export default TabLabel;
import React, {useState} from "react";
import './Toggle.css';

function Toggle(params) {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="toggle-background" onClick={() => setToggle(!toggle)}>
                <div className={toggle? "toggle-left" : "toggle-right"}></div>
            </div>
        </div>
    )
}

export default Toggle;
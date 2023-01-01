import React from "react";

function TakeInput(props) {
    return(
        <div class="input-container">
            <input type={props.type} placeholder={props.placeholder} name={props.name} id=""></input>
        </div>
    )
}
export default TakeInput;
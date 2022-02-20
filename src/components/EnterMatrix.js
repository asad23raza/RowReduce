import React from "react";
class TextField extends React.Component {
    state = {
        matrix: ""
    }
    render () {
        return (
        <div>
            <span>
            <input type="text" placeholder="Add Matrix" />
            <button>Row Reduce</button>
            </span>
        </div>
        )
    }
}
export default TextField
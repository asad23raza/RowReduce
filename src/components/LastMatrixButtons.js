import React from "react";
class MatrixButtons extends React.Component {
    render() {
        console.log(this.props.pos)
        console.log(this.props.maximum)
        if (this.props.pos === this.props.maximum) {
            return (
                console.log("reached"),
                <div>
                    <button onClick={() => this.props.DelMatrix()}>Back</button>
                    <button>Next</button>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}
export default MatrixButtons
import React from "react";
class MatrixButtons extends React.Component {
    render() {
        console.log("pos: "+this.props.pos)
        console.log("max: "+this.props.maximum)
        if (this.props.pos === this.props.maximum) {
            return (
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
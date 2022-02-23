import React from "react";
class MatrixButtons extends React.Component {
    render() {
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
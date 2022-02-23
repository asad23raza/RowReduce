import React from "react";
class ErrorMatrix extends React.Component {
    render() {
        if (this.props.isError) {
            return (
                <div>
                    <p>Please enter a valid matrix</p>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}
export default ErrorMatrix
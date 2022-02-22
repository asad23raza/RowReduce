import React from "react";
class TextField extends React.Component {
    state = {
        matrix: ""
    }
    onChange = (e) => {
        this.setState({
            matrix: e.target.value
        });
    };
    // EntryFilter = (e) => {
    //     let val = e.charCode
    //     if ((val >= 48 && val <= 57) ||
    //         (val === 93 || val === 91 || val === 44)) {
    //         console.log("acceptable number")
    //         return true
    //     }
    //     else {
    //         console.log("not acceptable")
    //         return false
    //     }
    // }
    render () {
        return (
        <div>
            <span>
            <input id="InputText" type="text" placeholder="Add Matrix" value={this.state.matrix}
            onChange={this.onChange} /*onKeyPress={this.EntryFilter}*/ />
            <button onClick={() => this.props.add_function()}>Row Reduce</button>
            </span>
        </div>
        )
        
    }
}
export default TextField
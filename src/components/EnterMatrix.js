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
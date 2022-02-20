import React from "react";
import InputNode from "./Input";
class MatrixList extends React.Component {
    render() {
        return (
            <div>
            {this.props.matrix_list.map(
                elem => (
                    <div key={elem.id}>
                        <input type="checkbox" checked={elem.completed} 
                        onChange={() => this.props.HandleChange(elem.id)} />
                        <InputNode matrix_list_elem={elem} />
                    </div>
                )
            )}
            </div>   
        )
    }
}
export default MatrixList

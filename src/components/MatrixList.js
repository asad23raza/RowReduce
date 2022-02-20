import React from "react";
import InputNode from "./Input";
import MatrixButtons from "./LastMatrixButtons"
class MatrixList extends React.Component {
    render() {
        // returns the length of matrix_list which is the 
        // index of the last matrix
        var max = this.props.matrix_list.length
        console.log("matrix length " + max)
        return (
            <div>
            {this.props.matrix_list.map(
                elem => (
                    <div key={elem.id}>
                        <InputNode matrix_list_elem={elem} />
                        <MatrixButtons pos={elem.id} maximum={max} />
                    </div>
                )
            )}
            </div>   
        )
    }
}
export default MatrixList

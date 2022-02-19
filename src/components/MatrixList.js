import React from "react";
import InputNode from "./Input";
class MatrixList extends React.Component {
    render() {
        return (
            <div>
            {this.props.matrix_list.map(
            elem => (
                <div key={elem.id}>
                    {/* matrix_list_elem should not be confused with matrix(list of numbers), or matrix_list(list of matrix dictionaries) */}
                    <InputNode key={elem.id} matrix_list_elem={elem} />
                </div>
                )
            )}
        </div>
        )
                                            }
}
export default MatrixList
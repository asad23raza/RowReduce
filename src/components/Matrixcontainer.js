import React from "react";
import MatrixList from "./MatrixList";
import Header from "./Header"
class MatrixContainer extends React.Component {
    MatricesDict = {
        matrix_list: [
            {
                id: 1,
                matrix: [[1,37,1],[0,1,0],[0,0,1]],
            },
            {
                id: 2,
                matrix: [[4,55,6],[4,5,6],[4,5,6]],
            },
            {
                id: 3,
                matrix: [[0,0,1],[0,1,0],[1,0,0]],
            }
        ]
    };
    render() {
        return (
            <div>
                <Header />
                <MatrixList matrix_list={this.MatricesDict.matrix_list} />
            </div>
        )
    }
}
export default MatrixContainer
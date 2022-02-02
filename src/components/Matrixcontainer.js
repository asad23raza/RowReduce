import React from "react";
import MatrixList from "./MatrixList";
class MatrixContainer extends React.Component {
    MatricesDict = {
        matrix_list: [
            {
                id: 1,
                matrix: [[1,0,0],[0,1,0],[0,0,1]],
                checked: false
            },
            {
                id: 2,
                matrix: [[4,5,6],[4,5,6],[4,5,6]],
                checked: false
            }
        ]
    };
    render() {
        function sqrt(x1) {
            return x1 * x1
        }
        return (
            <div>
                {this.MatricesDict.matrix_list.map(
                    elem => (
                        <table>
                            <tr>
                                <td>
                                {elem.matrix[0][0]}
                                </td>
                                <td>
                                {elem.matrix[1][0]}
                                </td>
                                <td>
                                {elem.matrix[2][0]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {elem.matrix[0][1]}
                                </td>
                                <td>
                                {elem.matrix[1][1]}
                                </td>
                                <td>
                                {elem.matrix[2][1]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {elem.matrix[0][2]}
                                </td>
                                <td>
                                {elem.matrix[1][2]}
                                </td>
                                <td>
                                {elem.matrix[2][2]}
                                </td>
                            </tr>
                        </table>
                    )
                )}
            </div>
        )
    }
}
export default MatrixContainer
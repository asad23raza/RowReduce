import React from "react";
import MatrixList from "./MatrixList";
class MatrixContainer extends React.Component {
    MatricesDict = {
        matrix_list: [
            {
                id: 1,
                matrix: [[1,3,1],[0,1,0],[0,0,1]],
            },
            {
                id: 2,
                matrix: [[4,5,6],[4,5,6],[4,5,6]],
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
                <MatrixList matrix_list={this.MatricesDict.matrix_list} />
            </div>
            // <div>
            //     {this.MatricesDict.matrix_list.map(
            //     elem => (
            //             <div>
            //                 <table>
            //                     {elem.matrix.map(
            //                         row => (
            //                             <tr>
            //                                 {row.map(
            //                                     subentry => (
            //                                         <td>
            //                                             {subentry}
            //                                         </td>
            //                                     )
            //                                 )}
            //                             </tr>
            //                         )
            //                     )}
            //                 </table>
            //             </div>
            //         )
            //     )}
            // </div>
        )
    }
}
export default MatrixContainer
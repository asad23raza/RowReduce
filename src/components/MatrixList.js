import React from "react";
import InputNode from "./Input";
class MatrixList extends React.Component {
    render() {
        return (
            <div>
            {this.props.matrix_list.map(
                elem => (
                    <div key={elem.id}>
                        <InputNode matrix_list_elem={elem} />
                    </div>
                )
            )}
            </div>
    //    <div>
    //         {this.props.matrix_list.map(
    //         elem => (
    //                 <div key={elem.id}>
    //                     <table>
    //                         <tbody>
    //                         {elem.matrix.map(
    //                             row => (
    //                                 <tr key={row.id}>
    //                                     {row.map(
    //                                         subentry => (
    //                                             <td key={subentry.id}>
    //                                                 {subentry}
    //                                             </td>
    //                                         )
    //                                     )}
    //                                 </tr>
    //                             )
    //                         )}
    //                         </tbody>
    //                     </table>
    //                 </div>
    //         )
    //         )}
    //     </div>     
        )
    }
}
export default MatrixList

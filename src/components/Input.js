import React from "react";
class InputNode extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.props.matrix_list_elem.matrix.map(
                        (row,index) => (
                            <tr key={index} >
                                {row.map(
                                    (subentry,index) => (
                                        <td key={index}>                                                    
                                            {subentry}
                                        </td>
                                    )
                                )}
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default InputNode
import React from "react";
class InputNode extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.props.matrix_list_elem.matrix.map(
                        row => (
                            <tr >
                                {row.map(
                                    subentry => (
                                        <td>                                                    
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
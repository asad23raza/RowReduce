import React from "react";
function InputNode(props) {
    return (
        <div>
            <table>
                <tbody>
                {props.elem.matrix.map(
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
export default InputNode
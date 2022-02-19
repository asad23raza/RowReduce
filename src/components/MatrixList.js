import React from "react";
class MatrixList extends React.Component {
    render() {
        return (
            <div>
            {this.props.matrix_list.map(
            elem => (
                    <div key={elem.id}>
                        <table>
                            <tbody>
                            {elem.matrix.map(
                                row => (
                                    <tr key={row.id}>
                                        {row.map(
                                            subentry => (
                                                <td key={subentry.id}>
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
            )}
        </div>
        )
    }
}
export default MatrixList
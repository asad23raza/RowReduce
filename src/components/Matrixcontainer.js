import React from "react";
var matrix_1 = {
    vectors: [
        {
            x1: 5,
            x2: 8,
            x3: 11
        },
        {
            x1: 6,
            x2: 9,
            x3: 1
        },
        {
            x1: 7,
            x2: 10,
            x3: 12
        }
    ]
}
class MatrixContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                checked: false
            },
            {
                id: 2,
                title: "Develop website add content",
                checked: false
            }
        ]
    };
    render() {
        return (
            <div>
            <ul>
                {this.state.todos.map(elem => (
                    <li>{elem.title}</li>
                ))}
            </ul>
            <table>
                <tr>
                    {matrix_1.vectors.map(elem => (
                        <td>{elem.x1}</td>
                    ))}
                </tr>
                <tr>
                    {matrix_1.vectors.map(elem => (
                        <td>{elem.x2}</td>
                    ))}
                </tr>
                <tr>
                    {matrix_1.vectors.map(elem => (
                        <td>{elem.x3}</td>
                    ))}
                </tr>
            </table>
            </div>
        )
    }
}
export default MatrixContainer
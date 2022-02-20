import React from "react";
import MatrixList from "./MatrixList";
import Header from "./Header"
class MatrixContainer extends React.Component {
    MatricesDict = {
        matrix_list: [
            {
                id: 1,
                matrix: [[1,35,1],[0,1,0],[0,0,1]],
                completed: true
            },
            {
                id: 2,
                matrix: [[4,55,6],[4,5,6],[4,5,6]],
                completed: true
            },
            {
                id: 3,
                matrix: [[0,32,1],[0,1,0],[1,0,0]],
                completed: false
            }
        ]
    };
    DelMatrix = () => {
        console.log("deleted " + this.MatricesDict.matrix_list.length)
        this.setState({
            ...this.MatricesDict.matrix_list.pop()
        })
        console.log("afterdeletion" + this.MatricesDict.matrix_list.length)
    }
    render() {
        return (
            <div>
                <Header />
                <MatrixList matrix_list={this.MatricesDict.matrix_list}
                DelMatrix = {this.DelMatrix} />
            </div>
        )
    }
}
export default MatrixContainer
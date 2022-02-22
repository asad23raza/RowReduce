import React from "react";
import MatrixList from "./MatrixList";
import Header from "./Header"
import TextField from "./EnterMatrix";
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
    CheckArr = (arr) => {

    }
    AddMatrix = () => {
        //console.log("add button pressed")
        let InputText = document.getElementById("InputText").value
        //console.log(InputText)
        let retarr = []
        let length = InputText.length
        let acceptable_chars = ["0","1","2","3","4","5","6","7","8","9", "]","[",","]
        let numbers = acceptable_chars.slice(0,-3)
        for (var i = 0; i <= length; i++) {
            if(InputText[i] in numbers) {
                retarr.push(parseInt(InputText[i]));
            }
        }
        let retarr_length = retarr.length
        let vectors = 3
        let dimension = 3
        let newarr = []
        for (var i = 0; i < vectors; ++i) {
            let subarr = []
            for (var j = i; j < retarr_length; j += dimension) {
                subarr.push(retarr[j])
            }
            newarr.push(subarr)
        }
        console.log("input text :" +
        InputText,"length: "+length, retarr, newarr, retarr_length)
    }
    
    render() {
        return (
            <div>
                <Header />
                <TextField add_function={this.AddMatrix} />
                <MatrixList matrix_list={this.MatricesDict.matrix_list}
                DelMatrix = {this.DelMatrix} />
            </div>
        )
    }
}
export default MatrixContainer


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
            },
            {
                id: 2,
                matrix: [[4,55,6],[4,5,6],[4,5,6]],
            },
            {
                id: 3,
                matrix: [[0,32,1],[0,1,0],[1,0,0]],
            }
        ]
    };
    DelMatrix = () => {
        this.setState({
            ...this.MatricesDict.matrix_list.pop()
        })
    }
    CheckArr = (arr) => {
        // make sure array only includes numbers, commas, and square brackets
        // array vectors are all equal
        // array length is greater than 2, [[1]]
        // Use Regular Expression
        let regex = /^\[\[[\d,\]\[]+\]\]$/;
        if (regex.test(arr)) {
            try {
                let array_of_nums = JSON.parse(arr)
                if (array_of_nums.length > 1) {
                    let dimension = array_of_nums[0].length
                    for (var i = 1; i < array_of_nums.length; ++i) {
                        if (array_of_nums[i].length !== dimension) {
                            console.log("vectors have unequal dimension")
                            return false;
                        }
                    }
                }
                return true
            }
            catch(err) {
                console.log("invalid input")
                return false
            }
        } else {
        return false
        }
    };

    AddMatrix = () => {
        //console.log("add button pressed")
        let InputText = document.getElementById("InputText").value
        if(this.CheckArr(InputText)) {
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
        let parse_matrix = JSON.parse(InputText)
        let dimension = parse_matrix[0].length
        let newarr = []
        for (var k = 0; k < dimension; ++k) {
            let subarr = []
            for (var j = k; j < retarr_length; j += dimension) {
                subarr.push(retarr[j])
            }
            newarr.push(subarr)
        }
        this.ResetMatrix(newarr)
        return true
        }
        // When an Invalid Matrix is Entered
        else {
            //console.log("please enter a valid matrix")
            this.ErrorMatrix()
            return false
        }
    };
    ResetMatrix = (matrix) => {
        var new_matrix = {
            id: 1,
            matrix: matrix,
        }
        this.setState({
            ...this.MatricesDict.matrix_list = []
            
        })
        this.setState({
            ...this.MatricesDict.matrix_list.push(new_matrix)
        })
    }
    ErrorMatrix = () => {
        document.getElementById("InvalidInput").innerHTML = "Please Enter a Valid Matrix. See"
    }
    render() {
        return (
            <div>
                <Header />
                <TextField add_function={this.AddMatrix} />
                <div id="InvalidInput"></div>
                <MatrixList matrix_list={this.MatricesDict.matrix_list}
                DelMatrix = {this.DelMatrix} />
            </div>
        )
    }
}
export default MatrixContainer




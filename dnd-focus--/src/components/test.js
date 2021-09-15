import React, { Component } from "react";
import DynamicForm from "./DynamicForm";
import "../App.css";

class Test extends Component {
    state = {
        data: [
            {id: 1, name:"a", age:29, qualification:"B.Com", rating:3},
            {id: 2, name:"b", age:39, qualification:"B.Sc", rating:5},
            {id: 3, name:"c", age:19, qualification:"B.E", rating:3},
        ]
    }

    render() {
        return (
            <div className="Test">
                <DynamicForm className="form"
                title="Registration"
                />
            </div>
        )
    }
}
import React, { Component } from "react";
import Panel from "./Panel";

export class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className="jumbotron">
                <h4 className="display-4">Welcome to Supply Chain!</h4>
            </div>

            <div className="row">
                <div className="col-sm">
                    <Panel title="Items">

                    </Panel>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <Panel title="Add Items">


                    </Panel>
                </div>
            </div>
        </React.Fragment>
    }
}
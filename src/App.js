import React, { Component } from "react";
import Panel from "./Panel";
import getWeb3 from "./getWeb3";
import ItemManagerContract from "./itemManager";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: undefined
        };
    }

    async componentDidMount(){
        this.web3 = await getWeb3();
        this.itemManager = await ItemManagerContract(this.web3.currentProvider);
        let accounts = (await window.ethereum.request({ method: 'eth_accounts' }))[0];

        console.log("Web3 inyected, using version " + this.web3.version + " and ussing the account: " + accounts);

        console.log("Total items are: " + this.itemManager.totalItems());

        this.setState({
            account: accounts[0].toLowerCase()
        }, () => {
            this.load();
        });
    }

    //new instance of ItemManager
    async load(){

    }

    render() {
        return <React.Fragment>
            <div className="jumbotron">
                <h4 className="display-4">Welcome to Supply Chain!</h4>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <Panel title="Items">
                        <div className="row">
                            <label className="co-sm-12">(Item1) Address: u4h5ljk6t45l6b345hk6tlj435h6</label>
                        </div>
                    </Panel>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <Panel title="Add Items">


                    </Panel>
                </div>
            </div>
        </React.Fragment>
    }
}
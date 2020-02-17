import * as React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Jumbotron>
                    {this.props.type === "ADDED_TODO" &&
                        <p>{this.props.text + " is created at " + this.props.time + " by " + this.props.admin}</p>}
                    {this.props.type === "MARKED_COMPLETED" &&
                        < p > {this.props.text + " is marked completed at " + this.props.time + " by " + this.props.admin}</p>}
                    {this.props.type === "UPDATED" &&
                        <p>{this.props.text + " is updated at " + this.props.time + " by " + this.props.admin}</p>}
                </Jumbotron>
            </div >


        )
    }
}
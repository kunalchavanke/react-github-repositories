import React, { Component } from 'react';
import Moment from 'moment';
import { Tooltip } from 'reactstrap';
import Owner from './owner';

// component representing repos i.e. table row
class Repos extends Component {

    constructor(props) {
        super(props);
        this.toggleTooltip = this.toggleTooltip.bind(this);
        this.state = { tooltipOpen: false };
    }

    // toggels state of tooltip on hover
    toggleTooltip = () => this.setState({ tooltipOpen: !this.state.tooltipOpen });

    render() {
        return (
            <tr>
                {/* row index */}
                <th scope="row">{this.props.index}</th>
                {/* repo name */}
                <td>{this.props.name}</td>
                {/* repo created on */}
                <td>{Moment(this.props.created_at).format('llll')}</td>
                {/* repo last updated on */}
                <td>{Moment(this.props.updated_at).format('llll')}</td>
                {/* repo url */}
                <td><a href={this.props.html_url} id={'Tooltip-' + this.props.id} target="/" style={{ textDecoration: "underline", color: "blue" }}>Go to repo</a></td>
                {/* tooltip for repo url */}
                <Tooltip placement="left" autohide={false} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggleTooltip}>
                    {this.props.html_url}
                </Tooltip>
                {/* repo owner */}
                <td><Owner id={this.props.id} owner={this.props.owner}/></td>
            </tr>
        );
    }
}
export default Repos;
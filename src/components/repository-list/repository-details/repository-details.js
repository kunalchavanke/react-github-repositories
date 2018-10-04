import React, { Component } from 'react';
// import Moment from 'moment';
import { Tooltip } from 'reactstrap';
import RepositoryOwner from './repository-owner';
import './repository-details.css';

// component representing repos i.e. table row
class RepositoryDetails extends Component {

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
                <th scope="row">{this.props.id}</th>
                {/* repo name */}
                <td>{this.props.name}</td>
                {/* repo created on */}
                {/* <td>{Moment(this.props.created_at).format('llll')}</td> */}
                {/* repo last updated on */}
                {/* <td>{Moment(this.props.updated_at).format('llll')}</td> */}
                {/* repo languages */}
                <td><a href={this.props.languages_url} target="/">Languages</a></td>
                {/* repo subscribers */}
                <td><a href={this.props.subscribers_url} target="/">Subscribers</a></td>
                {/* repo contributers */}
                <td><a href={this.props.contributors_url} target="/">Contributors</a></td>
                {/* repo url */}
                <td><a href={this.props.html_url} id={'Tooltip-' + this.props.id} target="/">Go to repo</a></td>
                {/* tooltip for repo url */}
                <Tooltip placement="left" autohide={false} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggleTooltip}>
                    {this.props.html_url}
                </Tooltip>
                {/* repo owner */}
                <td><RepositoryOwner id={this.props.id} owner={this.props.owner}/></td>
            </tr>
        );
    }
}
export default RepositoryDetails;
import React, { Component } from 'react';
import { Tooltip, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

// component representing owner of repos
class Owner extends Component {

    constructor(props) {
        super(props);
        this.toggleTooltip = this.toggleTooltip.bind(this);
        this.togglePopover = this.togglePopover.bind(this);
        this.state = {
            tooltipOpen: false,
            popoverOpen: false
        };
    }

    // toggles state of popover on click of button
    togglePopover = () => this.setState({ popoverOpen: !this.state.popoverOpen });

    // toggles state of tooltip on button hover
    toggleTooltip = () => this.setState({ tooltipOpen: !this.state.tooltipOpen });

    render() {
        return (
            <div>
                {/* owner button */}
                <Button id={'Button-' + this.props.id} color="info" onClick={this.togglePopover}>
                    {this.props.owner.login}
                </Button>
                {/* tooltip on button hover */}
                <Tooltip placement="left" isOpen={this.state.tooltipOpen} target={'Button-' + this.props.id} toggle={this.toggleTooltip}>
                    Click to view details
                </Tooltip>
                {/* popover for owner details */}
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Button-' + this.props.id} toggle={this.togglePopover}>
                    <PopoverHeader>
                        <span>ID: {this.props.owner.id}</span>
                    </PopoverHeader>
                    <PopoverBody>
                        <a href={this.props.owner.html_url} target="/">
                            {/* owner avatar */}
                            <img src={this.props.owner.avatar_url} alt="Owner avatar" style={{ width: "50px", height: "50px" }}></img>
                            {/* owner username */}
                            {this.props.owner.login}
                        </a>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}
export default Owner;
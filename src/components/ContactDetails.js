import React from 'react';

export default class ContactDetails extends React.Component {
    render() {

        const details = (<div>Selected</div>);
        const blank = (<div>Not Selected</div>);

        return (
            <div>
                {this.props.isSeleted ? details : blank}
            </div>
        );
    }
}
import React, { Component } from 'react';
import './SortableColumnHeader.css';

class SortableColumnHeader extends Component {
    render() {
        return (
            <th>
                {this.props.column}
                <button className="SortableColumnHeader-current">&#x25B2;</button>
                <button>&#x25BC;</button>
            </th>
        );
    }
}

export default SortableColumnHeader;
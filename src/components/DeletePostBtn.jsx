import React, {Component} from 'react';

class DeletePostBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className='deletePost' {...this.props}>
                Delete
            </button>
        );
    }
}

export default DeletePostBtn;
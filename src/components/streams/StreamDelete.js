import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';


class StreamDelete extends React.Component {
    componentDidMount() {
        console.log(this.props);
        fetchStream(this.props.match.params.id);
    }

    onDelete = (id) => {
        console.log('dsdsa')
        this.props.deleteStream(this.props.match.params.id);
        history.push('/');
    }

    renderActions() {
        //can use Link for cancel button
        return (
            <React.Fragment>
                <button onClick={() => this.onDelete(this.props.match.params.id)} className="ui button negative">Delete</button>
                <button onClick={() => history.push('/')} className="ui button">Cancel</button>
            </React.Fragment>
            
        );
    }
    
    renderContents = () => {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream";
        } 
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    }

    render() {    
        return <Modal 
                title="Delete Stream"
                contents={this.renderContents()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete); 
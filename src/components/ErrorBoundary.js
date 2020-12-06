import React, {Component} from 'react'

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        //kind-of try..catch
        this.setState({hasError: true});
    }


    render() {
        if (this.state.hasError) {
            return <h1> Oooops. That is not good.  @ _ @ </h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
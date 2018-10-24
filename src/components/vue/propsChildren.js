import React, { Component } from 'react';

class PropsChildren extends Component    {
    render() {
        return (
            <div>
                <h3>类似于插槽</h3>
            {
                // React.Children.map(this.props.children, function (child) {
                //     return <li>{child}</li>;
                // })
                this.props.children
            }
            </div>
        )
    }
}
export default PropsChildren
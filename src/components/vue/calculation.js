import React, { Component } from 'react';

class Calculation extends Component {
    render() {
        let { data, changeData, title, testClick, type } = this.props
        return (
            <div  onClick={(e)=>testClick(e,type)}>
                <fieldset>
                    <legend>
                        {title}
                    </legend>
                    <input type="text" value={data} onChange={changeData} />
                </fieldset>
            </div>
        )
    }
}
export default Calculation
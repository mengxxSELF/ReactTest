import React ,{Component} from 'react';
class RadioButtons extends Component{
    render(){
        return (
            <div>
                A <input onChange={this.props.handleRadio} name="ARadio" type="radio" value="A"/>
                B <input onChange={this.props.handleRadio} name="ARadio" type="radio" defaultChecked value="B"/>
                C <input onChange={this.props.handleRadio} name="ARadio" type="radio" value="C"/>
            </div>
        )
    }
};
export default RadioButtons;
import React ,{Component} from 'react';
class RadioButtons extends Component{
    saying(){
        console.log('i am a radio')
    }
    render(){
        return (
            <div>
                A <input onChange={this.props.saying} name="ARadio" type="radio" value="A"/>
                B <input onChange={this.props.saying} name="ARadio" type="radio" defaultChecked value="B"/>
                C <input onChange={this.props.saying} name="ARadio" type="radio" value="C"/>
            </div>
        )
    }
};
export default RadioButtons;
import React ,{Component} from 'react';
class CheckBox extends Component{
    render(){
        return(
            <div>
                A <input type="checkbox" name='choose' value='A' onChange={this.props.handleCheck}/>
                B <input type="checkbox" name='choose' value='B' onChange={this.props.handleCheck}/>
                C <input type="checkbox" name='choose' value='C' onChange={this.props.handleCheck}/>
            </div>
        )
    }
};
export default CheckBox;
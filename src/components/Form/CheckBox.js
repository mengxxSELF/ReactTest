import React ,{Component} from 'react';
class CheckBox extends Component{
    render(){
        return(
            <div>
                A <input type="checkbox" name='choose' value='A' onChange={this.props.clicking}/>
                B <input type="checkbox" name='choose' value='B' onChange={this.props.clicking}/>
                C <input type="checkbox" name='choose' value='C' onChange={this.props.clicking}/>
            </div>
        )
    }
};
export default CheckBox;
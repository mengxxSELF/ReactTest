import React ,{Component} from 'react';
import RadioButtons from './RadioButtons.js';
import CheckBox from './RadioButtons.js';
class FormApp extends Component{
    /*����state*/
    state={
        inputValue:'����������',
        selectValue:'B',
        radioValue:'A',
        checkValue:[],
        textareaValue:'����������'
    }

    handleSubmit= (e)=>{
        e.preventDefault();

        /* ��ȡÿһ��Ԫ�ص�ֵ*/
        let formData={
            input:this.refs.myInput.value,
            select:this.refs.mySelect.value,
            textarea:this.refs.myTextarea.value,
            radio:this.state.radioValue,
            check:this.state.checkValues
        }

        alert('�û��������б��ύ');
        console.log('�ύ��������',formData);
    }

    /* ����ѡ��*/
    handleRadio= (e)=>{
        this.setState({
            radioValue:e.target.value
        })
    }

    /* ��ѡ*/
    handleCheck= (e)=>{
        let checkValue= this.state.checkValues.slice();
        let newVal = e.target.value;
        let index = checkValue.indexOf(newVal);

        if(index== -1){
            checkValue.push(newVal)
        }else{
            checkValue.splice(index,1)
        }

        this.setState({
            checkValue:checkValue
        })

    }

    render(){
        <form onSubmit={this.handleSubmit}>
            <h1>����������</h1>
            <input type="text" ref="myInput"
                defaultValue={this.state.inputValue}/>
            <h3>ѡ��</h3>
            <select defaultValue={this.state.selectValue} ref="mySelect">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <h2>��ѡ</h2>
            <RadioButtons ref='myRadio' handleRadio={this.handleRadio} />

            <h3>��ѡ</h3>
            <CheckBox handleCheck={this.handleCheck} />

            <h3>����</h3>
            <textarea defaultValue={this.state.textareaValue} ref="myTextarea"></textarea>

            <button type="sumbit">�ύ</button>
        </form>
    }
}
export default  FormApp;





import React ,{Component} from 'react';
import RadioButtons from './RadioButtons.js';
import CheckBox from './RadioButtons.js';
class FormApp extends Component{
    /*设置state*/
    state={
        inputValue:'请输入内容',
        selectValue:'B',
        radioValue:'A',
        checkValue:[],
        textareaValue:'请输入内容'
    }

    handleSubmit= (e)=>{
        e.preventDefault();

        /* 获取每一个元素的值*/
        let formData={
            input:this.refs.myInput.value,
            select:this.refs.mySelect.value,
            textarea:this.refs.myTextarea.value,
            radio:this.state.radioValue,
            check:this.state.checkValues
        }

        alert('用户即将进行表单提交');
        console.log('提交的数据是',formData);
    }

    /* 单项选择*/
    handleRadio= (e)=>{
        this.setState({
            radioValue:e.target.value
        })
    }

    /* 多选*/
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
            <h1>请输入内容</h1>
            <input type="text" ref="myInput"
                defaultValue={this.state.inputValue}/>
            <h3>选择</h3>
            <select defaultValue={this.state.selectValue} ref="mySelect">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <h2>单选</h2>
            <RadioButtons ref='myRadio' handleRadio={this.handleRadio} />

            <h3>多选</h3>
            <CheckBox handleCheck={this.handleCheck} />

            <h3>反馈</h3>
            <textarea defaultValue={this.state.textareaValue} ref="myTextarea"></textarea>

            <button type="sumbit">提交</button>
        </form>
    }
}
export default  FormApp;





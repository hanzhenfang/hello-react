import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

//更新分类的form组件
class UpdateForm extends Component {

    formRef = React.createRef();

    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired
    }

    // componentDidMount() {
    //   // console.log(this.formRef);
    //   // this.props.setForm(this.formRef.current);
    // }

    componentDidMount() {
        // console.log(this.formRef);
        this.props.setForm(this.formRef.current);

    }


    render() {
        const { categoryName } = this.props
        return (
            <Form ref={this.formRef}>
                <Form.Item
                    name="categoryName"
                    initialValue={categoryName}
                    rules={[
                        { required: true, message: '分类名称必须输入' },
                    ]}
                >
                    <Input placeholder="请输入分类名称" />
                </Form.Item>
            </Form >
        );
    }
}

export default UpdateForm;
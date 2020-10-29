import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTodo } from '../apis/todo';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.myForm = React.createRef();
  }

  onFinish = values => {
    addTodo(values.todo).then(response => {
      this.props.addTodo(response.data);
      toast.success(values.todo + " is created", {
        autoClose: 1500,
        closeOnClick: true
      });
      this.myForm.current.resetFields();
    });
  };

  render() {
    return (
      <div id="todoGenerator">
        <div className="input-class">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            ref={this.myForm}>
            <Form.Item
              name="todo"
              rules={[{ required: true, message: 'Kindly input your todo' }]}>
              <Input placeholder="Todo" />
            </Form.Item>
            <Form.Item>
              <Button className="button-class" htmlType="submit">Add<DoubleRightOutlined /></Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    );
  }
}

export default TodoGenerator;
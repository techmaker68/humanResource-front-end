import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLoginData } from "../Redux/Action/loginAction";
import { Button, Checkbox, Col, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { baseUrl } from "../config";

function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState();
  const onFinish = (values) => {
    axios
      .post(`${baseUrl}/register`, values, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login = response.data;
        console.log(login)
        localStorage.setItem('user', JSON.stringify(login));
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMsg = error.response.data.message;
        setError(errorMsg);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="col-md-10">

            {error? 
            
                <h4 className="text text-danger">{error}</h4>
                :''
        }
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
          <Col span={9} className="text-end">

          </Col>

          
          <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps, { fetchLoginData })(Register);

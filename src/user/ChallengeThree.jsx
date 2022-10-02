import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, getUsersData } from "../Redux/Action/userAction";
import { Button, message, Upload } from "antd";
import { Checkbox, Form, Input } from "antd";
import { baseUrl } from "../config";
import axios from "axios";
function ChallengeThree(props) {
  let user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState();

  function onFinish(val) {
    axios
      .post(`${baseUrl}/challenge2/array`, val, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        const errorMsg = error;
      });
  }
  return (
    <div>
      <div className="container mt-5">
        <h4 className="text text-secondary">
          Enter a string of numbers as an array e.g (1,2,3,4,5)
        </h4>
        <p className="text text-secondary">
          {" "}
          Note: array should be seperated by a comma ","{" "}
        </p>
        <div className="row">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item name="array">
              <Input name="array" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {data && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">value</th>
              <th scope="col">times</th>
            </tr>
          </thead>
          <tbody>
            {data != null &&
              Object.keys(data).map((val, index) => (
                <tr>
                  <td>{val}</td>

                  <td>{data[val]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ChallengeThree;

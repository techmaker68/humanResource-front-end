import React from "react";
import { Checkbox, Button, Form, Input, Select } from "antd";
import { baseUrl } from "../config";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function GetAttendence(props) {
  let Option = Select;
  let user = JSON.parse(localStorage.getItem("user"));
  const [employees, setEmployees] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${baseUrl}/employees`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setEmployees(data);
      })
      .catch((error) => {
        const errorMsg = error;
      });
  }, []);

  let employeesArray = [];

  employees?.map((item, index) =>
    employeesArray.push(<Option value={item.id}>{item.name}</Option>)
  );

  const [id, setId] = useState();
  const [record, setRecord] = useState([]);
  function onFinish(val) {

    setError()
    axios
      .get(`${baseUrl}/attendence/${val.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setRecord(data);
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        setError(errorMsg);
      });
  }

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text text-secondary">Enter an employee Id</h2>
        <div className="row">

            {error?
            <p className="text text-danger">{error}</p>    
                :''
        }
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item

            name='id'
            >
              <Select >
                {employeesArray}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div>
        {record.length > 0 && (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">checkin</th>
                <th scope="col">checkout</th>
                <th scope="col">total working hours</th>
              </tr>
            </thead>
            <tbody>
              {record?.map((record, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{record.relationships.employee.name}</td>
                  <td>{record.check_in}</td>
                  <td>{record.check_out}</td>
                  <td>{record.total_hours[0].totalHours} hours</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default GetAttendence;

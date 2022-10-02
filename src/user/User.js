import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchUsers, getUsersData } from "../Redux/Action/userAction"
import { Button, message, Upload } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { baseUrl } from "../config";
import axios from "axios";

function User({ userData, fetchUsers }) {
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [error, setError] = useState();

const [selectedFile, setSelectedFile] = useState();
const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  setIsFilePicked(true)
};
  
  let user =JSON.parse(localStorage.getItem('user'))
  console.log()

function onFinish(){

 let  formdata = new FormData();
  formdata.append('file',selectedFile)

  axios
  .post(`${baseUrl}/upload`,formdata, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization':`Bearer ${user.token}`   },
  })
  .then((response) => {
    const login = response.data;
    console.log(login)
   

  })
  .catch((error) => {
    const errorMsg = error;
    console.log(errorMsg)

    setError(errorMsg.response.data);

  
  });

}

  
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className='container mt-5'>
      <h2 className="text text-secondary">Upload  Attendence file</h2>
      <div className='row'>
        
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item>
        <input type="file" name="file" onChange={changeHandler} />
      </Form.Item>
      <Form.Item>
        <Button  disabled={isFilePicked?false:true} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

export default connect(mapStateToProps, { fetchUsers })(User)

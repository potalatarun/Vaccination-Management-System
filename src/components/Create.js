import React,{useState} from 'react';
import {Button,Checkbox,Form} from 'semantic-ui-react';
import axios from 'axios';
import {useNavigate} from 'react-router';

export default function Create(){
  let navigate=useNavigate();
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [adharnumber,setadharnumber]=useState('');
  const [vaccine_1,setvaccine_1]=useState('');
  const [vaccine_2,setvaccine_2]=useState('');
  const [superdose,setsuperdose]=useState('');
  const postdata=()=>{
    if(name=='' || vaccine_1==''){
      alert("Please Enter the required Fields!!");
    }
    else{
    axios.post('http://localhost:8080/api/addUser',{
      name,
      age,
      phonenumber,
      adharnumber,
      vaccine_1,
      vaccine_2,
      superdose
    }).then(()=>{
      navigate('/read')
    })
  }
  }
  return(
    <div>
    <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' required onChange={(e) => setname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input placeholder='Age' type={'number'} required onChange={(e) => setage(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Phone Number</label>
      <input placeholder='Phone Number' type={'tel'} required maxLength={'10'} minLength={'10'} onChange={(e) => setphonenumber(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Adhar Number</label>
      <input placeholder='Adhar Number' type={'tel'} required maxLength={'14'} minLength={'14'} onChange={(e) => setadharnumber(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Vaccine Dose-1</label>
      <input placeholder='Vaccine Dose-1' type={'date'} required onChange={(e) => setvaccine_1(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Vaccine Dose-2</label>
      <input placeholder='Vaccine Dose-2' type={'date'} onChange={(e) => setvaccine_2(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Super Dose</label>
      <input placeholder='Super Dose' type={'date'} required onChange={(e) => setsuperdose(e.target.value)}/>
    </Form.Field>
    <Button type='submit' onClick={postdata}>Submit</Button>
  </Form>
  </div>
  )
}
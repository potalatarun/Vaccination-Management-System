import React,{useState,useEffect} from 'react';
import {Button,Checkbox,Form} from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Update(){
    let navigate=useNavigate();
    const [id,setID] = useState(null);
    useEffect(()=>{
      setID(localStorage.getItem('Id'));
      setname(localStorage.getItem('Name'));
      setage(localStorage.getItem('Age'));
      setphonenumber(localStorage.getItem('Phonenumber'));
      setadharnumber(localStorage.getItem('Adharnumber'));
      setvaccine_1(localStorage.getItem('Vaccine_1'));
      setvaccine_2(localStorage.getItem('Vaccine_2'));
      setsuperdose(localStorage.getItem('Superdose'));
    },[]);
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [adharnumber,setadharnumber]=useState('');
  const [vaccine_1,setvaccine_1]=useState('');
  const [vaccine_2,setvaccine_2]=useState('');
  const [superdose,setsuperdose]=useState('');

  const updateData=()=>{
    if(name==='' || vaccine_1=='' || age=='' || phonenumber=='' || adharnumber==''){
      alert("Some Field are missing");
    }
    else{
    axios.put('http://localhost:8080/api/update',{
        id,
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
      <input placeholder='Name' value={name} onChange={(e) => setname(e.target.value)} required/>
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input placeholder='Age' type={'number'} required onChange={(e) => setage(e.target.value)} value={age}/>
    </Form.Field>
    <Form.Field>
      <label>Phone Number</label>
      <input placeholder='Phone Number' type={'tel'} required maxLength={'10'} minLength={'10'} onChange={(e) => setphonenumber(e.target.value)} value={phonenumber}/>
    </Form.Field>
    <Form.Field>
      <label>Adhar Number</label>
      <input placeholder='Adhar Number' type={'tel'} required maxLength={'14'} minLength={'14'} onChange={(e) => setadharnumber(e.target.value)} value={adharnumber}/>
    </Form.Field>
    <Form.Field>
      <label>Vaccine Dose-1</label>
      <input placeholder='Vaccine Dose-1' type={'date'} required onChange={(e) => setvaccine_1(e.target.value)} value={vaccine_1}/>
    </Form.Field>
    <Form.Field>
      <label>Vaccine Dose-2</label>
      <input placeholder='Vaccine Dose-2' type={'date'} onChange={(e) => setvaccine_2(e.target.value)} value={vaccine_2}/>
    </Form.Field>
    <Form.Field>
      <label>Super Dose</label>
      <input placeholder='Super Dose' type={'date'} onChange={(e) => setsuperdose(e.target.value)} value={superdose}/>
    </Form.Field>
    <Button type='submit' onClick={updateData}>Update</Button>
  </Form>
  </div>
  )
}
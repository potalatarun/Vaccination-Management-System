import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default function Read(){
    const [GETData,setGETData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/api/users')
        .then((response) => {
            setGETData(response.data);
        })
    },[])

    const setData =(data)=>{
        let {id,name,age,phonenumber,adharnumber,vaccine_1,vaccine_2,superdose}=data;
        localStorage.setItem('Id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Phonenumber',phonenumber);
        localStorage.setItem('Adharnumber',adharnumber);
        localStorage.setItem('Vaccine_1',vaccine_1);
        localStorage.setItem('Vaccine_2',vaccine_2);
        localStorage.setItem('Superdose',superdose);
    }
    const getData=()=>{
        axios.get('http://localhost:8080/api/users')
        .then((getData)=>{
            setGETData(getData.data);
        })
    }
    const onDelete=(id,data)=>{
        if(data.superdose==''){
            window.alert("DELETE UNSUCESSFULL, You need to be Fully Vaccinated!!");
        }
        else{
            axios.delete('http://localhost:8080/api/deleteUser/'+id)
            .then(()=>{
                getData();
            })
        }
    }
    return(
        <div>
            <Table className='read-table'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>PhoneNumber</Table.HeaderCell>
                        <Table.HeaderCell>AdharNumber</Table.HeaderCell>
                        <Table.HeaderCell>FirstDose</Table.HeaderCell>
                        <Table.HeaderCell>SecondDose</Table.HeaderCell>
                        <Table.HeaderCell>SuperDose</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {GETData.map((data)=>{
                        return(
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.age}</Table.Cell>
                                <Table.Cell>{data.phonenumber}</Table.Cell>
                                <Table.Cell>{data.adharnumber}</Table.Cell>
                                <Table.Cell>{data.vaccine_1}</Table.Cell>
                                <Table.Cell>{data.vaccine_2}</Table.Cell>
                                <Table.Cell>{data.superdose}</Table.Cell>
                                <Link to={'/update'}>
                                <Table.Cell><Button onClick={()=>setData(data)}>Update</Button></Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={()=>onDelete(data.id,data)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
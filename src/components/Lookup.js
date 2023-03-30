import React, { useState } from "react";
import { Button, Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Create from "./Create";
import axios from "axios";
export default function Lookup(){
    const [a,setVal]=useState(0);
    const [v,setValue]=useState('');
    const [getdata,setgetdata]=useState([]);
    const submitted=()=>{
        // if(a==0){
            axios.get('http://localhost:8080/api/find/'+v)
            .then((response) => {
                setgetdata(response.data);
            });
        // }
        if(getdata==null){
            alert('no user found');
        }
        
    }
    console.log(getdata);
    return(
        <div>
            <div className="search-bar">
            <form className="search-user">
            <input type="number" placeholder="search..." onChange={(e) => setValue(e.target.value)}/>
            <input type="submit" value="search" onSubmit={submitted()} disabled={!a}/>
            </form>
            </div>
            <div>
            <Table className="search-table">
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
                    {/* {getdata.map((data)=>{
                        return( */}
                            <Table.Row>
                                <Table.Cell>{getdata.id}</Table.Cell>
                                <Table.Cell>{getdata.name}</Table.Cell>
                                <Table.Cell>{getdata.age}</Table.Cell>
                                <Table.Cell>{getdata.phonenumber}</Table.Cell>
                                <Table.Cell>{getdata.adharnumber}</Table.Cell>
                                <Table.Cell>{getdata.vaccine_1}</Table.Cell>
                                <Table.Cell>{getdata.vaccine_2}</Table.Cell>
                                <Table.Cell>{getdata.superdose}</Table.Cell>
                            </Table.Row>
                        {/* )
                    })} */}
                </Table.Body>
            </Table>
            </div>
        </div>

    )
}
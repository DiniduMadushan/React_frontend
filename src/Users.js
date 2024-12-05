import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = () => {
        Axios.get(process.env.REACT_APP_ENDPOINT + '/api/users')
             .then(response => {
                setUsers(response.data?.response || []);
             }).catch(error => {
                console.log("Error in Axios.get : ",error);
             })
    }

    const addUser = data =>{

        setSubmitted(true);

        const payload = {
            id : data.id,
            name : data.name
        }

        Axios.post(process.env.REACT_APP_ENDPOINT +'/api/createuser',payload)
             .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit("false");
             }).catch(error => {
                console.log("Error in axios.post : ",error);
                
             })

    }

    const updateUser = data => {
        setSubmitted(true);

        const payload = {
            id : data.id,
            name : data.name
        }

        Axios.put(process.env.REACT_APP_ENDPOINT +'/api/updateuser', payload)
             .then(()=>{
                getUsers();
                setSubmitted(false);
             }).catch(error=>{
                console.log("Error at updateuser: ",error);
             })
    }

    const deleteUser = data => {
        console.log(data);
        
        Axios.delete(process.env.REACT_APP_ENDPOINT +'/api/deleteuser', data)
             .then(()=>{
                getUsers();
             }).catch(error=>{
                console.log("Error at deleteUser: ",error);
             })
    }


    return(

        <Box>
            <UserForm
             addUser={addUser} 
             updateUser = {updateUser}
             submitted = {submitted}
             data = {selectedUser}
             isEdit={isEdit}   
             />

            <UserTable
             rows={users} 
             selectedUser = {data=>{
                setSelectedUser(data);
                setIsEdit(true);
            }}

            deleteUser = {data => window.confirm('Are you sure want to delete?') && deleteUser(data)}
            
             />
        </Box>

    );
}

export default Users
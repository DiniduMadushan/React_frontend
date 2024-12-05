import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
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

        Axios.post('http://localhost:3001/api/createuser',payload)
             .then(() => {
                getUsers();
                setSubmitted(false);
             }).catch(error => {
                console.log("Error in axios.post : ",error);
                
             })

    }


    return(

        <Box>
            <UserForm addUser={addUser} submitted = {submitted}/>
            <UserTable rows={users} />
        </Box>

    );
}

export default Users
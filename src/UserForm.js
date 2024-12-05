import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setid] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        if (!submitted) {
            setid(0);
            setName("");
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setid(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                padding: '20px',
                border: '1px solid #ddd', // Added border
                borderRadius: '8px', // Rounded corners
                width: '50%', // Fixed width for form
                margin: '20px auto', // Center form horizontally
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for better visuals
            }}
        >
            {/* Heading */}
            <Grid item xs={12}>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    User Data
                </Typography>
            </Grid>

            {/* ID Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: '#333',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        textAlign: 'right',
                    }}
                >
                    Id :
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '300px' }}
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                />
            </Grid>

            {/* Name Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: '#333',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        textAlign: 'right',
                    }}
                >
                    Name : 
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '300px' }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>

            {/* Add/Edit Button */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                    sx={{
                        backgroundColor: '#00c6e6',
                        color: '#fff',
                        padding: '10px 20px',
                        '&:hover': { opacity: '0.9', backgroundColor: '#00c6e6' },
                    }}
                    onClick={() => (isEdit ? updateUser({ id, name }) : addUser({ id, name }))}
                >
                    {isEdit ? 'Edit' : 'Add'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default UserForm;

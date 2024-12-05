import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({rows}) => {
    return(
        <TableContainer component={Paper}>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id}>

                                <TableCell component={'th'} scope="row">{row.id}</TableCell>
                                <TableCell component={'th'} scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <Button sx={{margin:'0px 10px'}} onClick={()=>{}}>
                                        Update
                                    </Button>
                                    
                                    <Button sx={{margin:'0px 10px'}} onClick={() => {}}>
                                       Delete 
                                    </Button>
                                </TableCell>
                                

                            </TableRow>
                        )):(
                                <TableRow>
                                    <TableCell component={'th'} scope="row">No data found</TableCell>
                                </TableRow>
                        )
                    }

                </TableBody>

            </Table>

        </TableContainer>
    )
}

export default UserTable;
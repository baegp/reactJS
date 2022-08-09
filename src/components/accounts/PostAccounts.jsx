import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function PostAccounts({ onEdit, onRemove, post }) {
    const onHandleEdit = (item) => {
        onEdit(item)
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "GrayText" }}>
                            <TableCell sx={{ color: "white" }} align="left" >Id</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Email</TableCell>

                            <TableCell sx={{ color: "white" }} align="center">Name</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Password</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Role</TableCell>

                            <TableCell sx={{ color: "white" }} align="center">Update</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="left">{item.id}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>

                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.password}</TableCell>
                                <TableCell align="center">{item.role}</TableCell>


                                <TableCell align="center">
                                    <Button variant="outlined" onClick={() => onHandleEdit(item)}>
                                        Update
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="error" onClick={() => onRemove(item.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></div>
    )
}

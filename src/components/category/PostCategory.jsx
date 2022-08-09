import React from 'react'
import './Category.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';


function PostCategory({ id, name, onEdit, onRemove, post }) {
    const onHandleEdit = (item) => {
        onEdit(item)
    }


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
            {/* <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> */}
            {/* {post.map((item, index) => (
                        <tr>
                            <td style={{ marginRight: "30px" }}>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <Button variant='outlined' sx={{ '&.MuiButton-root': { p: '5px' } }} onClick={() => onHandleEdit(item)}>Update</Button>
                            </td>
                            <td>
                                <button onClick={() => onRemove(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))} */}



            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow  sx={{backgroundColor:"GrayText"}}>
                            <TableCell sx={{color: "white"}} align="right" >Id</TableCell>
                            <TableCell sx={{color: "white"}} align="right">Name</TableCell>
                            <TableCell sx={{color: "white"}} align="right">Update</TableCell>
                            <TableCell sx={{color: "white"}} align="center">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">{item.id}</TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">
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
            </TableContainer>
            {/* </tbody>
            </table> */}
            {/* <div>{_id}</div>
            <div className="ten">{name}</div>
            <div style={{ display: 'inline-block' }}>
                <button style={{ width: "45%", margin: '5px' }} onClick={() => onHandleEdit({
                    name, _id
                })} className="btn btnPrimary" >Sửa </button>
                <button style={{ width: "48%" }} onClick={() => onRemove(_id)} className="btn btnPrimary" >xoa</button>
            </div> */}
        </div >
    )
}


export default PostCategory
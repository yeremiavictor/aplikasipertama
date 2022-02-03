import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Container, Table, NavLink, Button, Alert } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';



const api = 'http://localhost:3001'


export class ListComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          mahasiswa:[],
          response:' ',
          display:'none'
         
      }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                mahasiswa: res.data.value
            })
        })
    }
    
    DeleteMahasiswa = (idmahasiswa) => {
        const {mahasiswa} = this.state
        const data = qs.stringify({
            id:idmahasiswa
        })

        axios.delete(api+'/hapus',
            {
                data:data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json=>{
            if(json.data.status ===200){
                this.setState({
                    response: json.data.value,
                    mahasiswa : mahasiswa.filter(mahasiswa => mahasiswa.id !== idmahasiswa),
                    display: 'block'
                })
                this.props.history.push('/mahasiswa')
            }else{
                this.setState({
                    response: json.data.value,
                    display:'block'
                })

                // this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h3>Data Mahasiswa</h3>
                    <Alert style={{display: this.state.display}}>{this.state.response}</Alert>
                    <NavLink href='mahasiswa/tambah'>
                        <Button className='btn-primary'>Tambah</Button>
                    </NavLink>
                    <hr />
                    <Table className='table-bordered'>
                        <thead>
                            <tr>
                                <th>Nim</th>
                                <th>Nama</th>
                                <th>Jurusan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mahasiswa.map(mahasiswa => 
                                <tr key={mahasiswa.id}>
                                    <td>{mahasiswa.nim}</td>
                                    <td>{mahasiswa.nama}</td>
                                    <td>{mahasiswa.jurusan}</td>
                                    <td>

                                    
                                    {/* <Link to={{
                                        pathname:`/mahasiswa/edit/`,
                                            state:{
                                                id:mahasiswa.id,
                                                nim:mahasiswa.nim,
                                                nama:mahasiswa.nama,
                                                jurusan:mahasiswa.jurusan
                                            }
                                        }}>
                                            <Button>Edit</Button>
                                    </Link> */}
                                    <Link to={`/mahasiswa/edit/${mahasiswa.id}`}>
                                            <Button>Edit</Button>
                                    </Link>
                                    
                                    <span> </span>

                                    <Button onClick={()=> this.DeleteMahasiswa(mahasiswa.id)}>Hapus</Button>
                                    </td>
                                </tr>    
                            )}
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    }
}

export default ListComp;

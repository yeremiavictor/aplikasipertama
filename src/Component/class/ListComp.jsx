import React, { Component } from 'react';
import axios from 'axios';
// import qs from 'querystring';
import { Container, Table, NavLink, Button } from 'reactstrap';



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
    
    render() {
        return (
            <div>
                <Container>
                    <h3>Data Mahasiswa</h3>
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
                                    <td>Edit | Hapus</td>
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

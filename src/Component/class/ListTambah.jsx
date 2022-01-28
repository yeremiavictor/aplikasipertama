import React, { Component } from 'react';
import axios from 'axios';
import { Container,Form, FormGroup, Label,Input,Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001'

export class ListTambah extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nim:'',
         nama:'',
         jurusan:'',
         response:' ', // menujukkan berhasil apa engga
         display:'none' // dipakai buat hide atau show alert
      }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    AddMahasiswa = () => {
        axios.post(api+'/tambah', {
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        }).then(json =>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.value,
                    display: 'block'
                })
            }else{
                this.setState({
                    response:json.data.value,
                    display:'block'
                })
            }
        })
        
    }

  render() {
    return (
        <Container>
            <h3>Tambah data Mahasiswa</h3>
            <hr/>
            <Alert style={{display: this.state.display}}>{this.state.response}</Alert>
            <Form className='form'>
                <FormGroup>
                    <Label>Nim</Label><Input type="text" name='nim'  value={this.state.nim} onChange={this.handleChange} placeholder='Masukan Nim'/>
                </FormGroup>
                <FormGroup>
                    <Label>Nama</Label><Input type="text" name='nama'  value={this.state.nama} onChange={this.handleChange} placeholder='Masukan Nama'/>
                </FormGroup>
                <FormGroup>
                    <Label>Jurusan</Label><Input type="text" name='jurusan'  value={this.state.jurusan} onChange={this.handleChange} placeholder='Masukan Jurusan'/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.AddMahasiswa} >Tambah</Button>
                </FormGroup>
            </Form>
        </Container>
    )
  }
}

export default ListTambah;

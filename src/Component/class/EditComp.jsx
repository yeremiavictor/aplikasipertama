import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import qs from 'querystring'
import { Container,Form, FormGroup, Label,Input,Button, Alert } from 'reactstrap';

// const api = 'http://localhost:3001/tampil'


const EditComp = () => {
    const[nim, setNim] = useState('')
    const[nama, setNama] = useState('')
    const[jurusan, setJurusan] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()



    const updateMahasiswa = async(e) => {
        e.preventDefault()
        
        await axios.put(`http://localhost:3001/ubah`,{
            id:id,
            nim: nim,
            nama: nama,
            jurusan: jurusan
        })
        
        navigate("/mahasiswa")
        
    }

    useEffect(() => {
        getMahasiswaByID()
    },[])
        
    const getMahasiswaByID = async () => {
        const response = await axios.get(`http://localhost:3001/tampil/${id}`)
        
        setNim(response.data.value[0].nim)
        setNama(response.data.value[0].nama)
        setJurusan(response.data.value[0].jurusan)




        // console.log(response.data.value[0].nim)

        
    }




    return (
    
        <Container>
            <h3>Edit data Mahasiswa</h3>
            
            
            <hr/>
            {/* <Alert style={{display: this.state.display}}>{this.state.response}</Alert> */}
            <Form className='form'>
                <FormGroup>
                    <Label>Nim</Label><Input type="text"   value={nim} onChange={(e) => setNim(e.target.value)} placeholder='Masukan Nim'/>
                </FormGroup>
                <FormGroup>
                    <Label>Nama</Label><Input type="text"   value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Masukan Nama'/>
                </FormGroup>
                <FormGroup>
                    <Label>Jurusan</Label><Input type="text"  value={jurusan} onChange={(e) => setJurusan(e.target.value)} placeholder='Masukan Jurusan'/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={updateMahasiswa} className="btn-primary">Edit</Button>
                </FormGroup>
            </Form>
    </Container>
    )
  
}

export default EditComp;






// import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import qs from 'querystring'
// import { Container,Form, FormGroup, Label,Input,Button, Alert } from 'reactstrap';

// const api = 'http://localhost:3001'


// export class EditComp extends Component {
//     constructor(props) {
//       super(props)
      

    
//       this.state = {
//          id:this.props.location.state.id,
//          nim:this.props.location.state.nim,
//          nama:this.props.location.state.nama,
//          jurusan:this.props.location.state.jurusan,
//          response: ' ' ,
//          display:'none'

//       }
//     }
    

//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }

//     UbahMahasiswa = (idmahasiswa) =>{

        
//         const data = qs.stringify({
//             id:idmahasiswa,
//             nim:this.state.nim,
//             nama:this.state.nama,
//             jurusan:this.state.jurusan
//         })
//         axios.put(api+'/ubah',data)
//         .then(json =>{
//             if(json.data.status === 200){
//                 this.setState({
//                     response:json.data.value,
//                     display:'block'
//                 })
//             }else{
//                 this.setState({
//                     response:json.data.value,
//                     display:'block'
//                 })
//             }
//         })
//     }

//   render() {
//     return (
    
//         <Container>
//             <h3>Edit data Mahasiswa</h3>
            
            
//             <hr/>
//             <Alert style={{display: this.state.display}}>{this.state.response}</Alert>
//             <Form className='form'>
//                 <FormGroup>
//                     <Label>Nim</Label><Input type="text" name='nim'  value={this.state.nim} onChange={this.handleChange} placeholder='Masukan Nim'/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label>Nama</Label><Input type="text" name='nama'  value={this.state.nama} onChange={this.handleChange} placeholder='Masukan Nama'/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label>Jurusan</Label><Input type="text" name='jurusan'  value={this.state.jurusan} onChange={this.handleChange} placeholder='Masukan Jurusan'/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Button onClick={()=>this.UbahMahasiswa} >Tambah</Button>
//                 </FormGroup>
//             </Form>
//     </Container>
//     )
//   }
// }

// export default EditComp;

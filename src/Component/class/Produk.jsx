import react from "react"
import './CSS/Produk.css'

class Produk extends react.Component{
    constructor(props){
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "ready",
            disabled: false
        }
    }

    TombolBeli = () => {
        this.setState({
            stock : this.state.stock - 1
        })

        if (this.state.stock === 1){
            this.setState({
                stock: <br/>,
                status: "stock habis",
                disabled: true


            })
        }
    }

    render(){
        return (
        <div className="book-stock">
            <h3>{this.props.nama}</h3>
            <img src="http://p-id.ipricegroup.com/uploaded_0d21a5c1099bbc72a98f06101a54e5f0.jpg" alt="" />
            <p>Rp. {this.props.harga} ,-</p>
            <p>{this.state.stock}</p>
            <button className="btn-click" onClick={this.TombolBeli} disabled={this.state.disabled}>Beli</button>
            <p>{this.state.status}</p>

        </div>
        
        )
    }
}

export default Produk
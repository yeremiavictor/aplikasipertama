import react from "react";
import Blog from "./Blog";
import Produk from "../class/Produk";

const Home = () => {
    return(
        <div>
            <i>

            {/* <Blog 
                    tanggal="20 Januari 2022"
                    judul="Teknologi Blockchain"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            /> 
                <Blog 
                    tanggal="20 Januari 2022"
                    judul="Teknologi IOT"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            /> 
                <Blog 
                    tanggal="20 Januari 2022"
                    judul="Teknologi Laravel"
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />  */}
            </i>

            <Produk  
                nama="iphone 10s" 
                harga="2.750.000" 
                stock="10" 
            />

            <Produk  
                nama="iphone 10s" 
                harga="2.750.000" 
                stock="10" 
            />
            
            <Produk  
                nama="iphone 10s" 
                harga="2.750.000" 
                stock="10" 
            />
            
            <Produk  
                nama="iphone 10s" 
                harga="2.750.000" 
                stock="10" 
            />

            



        </div>
    )
}

export default Home
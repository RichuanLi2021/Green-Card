import styled from 'styled-components';
import 'normalize.css';
//const root = document.getElementById('root');
//Used styles from styled-components, the docs can be found here: https://styled-components.com/docs
export default function Footer() {
    const CustomFooter = styled.div`
    .footer{
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        text-align: center;
        background-color: #96d2b0;
        }
        
        .footer .row{
        width:100%;
        margin:1% 0%;
        padding:0.6% 0%;
        color:white;
        font-size:0.8em;
        }
        
        .footer .row a{
        text-decoration:none;
        color:white;
        transition:0.5s;
        }
        
        .footer .row a:hover{
        color:#023020;
        }
        
        .footer .row ul{
        width:100%;
        }
        
        .footer .row ul li{
        display:inline-block;
        margin:0px 30px;
        }
        
        .footer .row a i{
        font-size:2em;
        margin:0% 1%;
        }
        
        @media (max-width:720px){
        .footer{
        text-align: center;
        padding:5%;
        }
        .footer .row ul li{
        display:block;
        margin:10px 0px;
        text-align:left;
        }
        .footer .row a i{
        margin:0% 3%;
        }
        }
    `;
    return (
        <CustomFooter>
            <div class="footer">
                    <div class="row">
                        <ul>
                            <li><a href="login">Contact us</a></li>
                            <li><a href="login">Our Services</a></li>
                            <li><a href="login">Privacy Policy</a></li>
                            <li><a href="login">Terms & Conditions</a></li>
                            <li><a href="login">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        Copyright 
                    </div>
            </div>

            
           
        </CustomFooter>

    
    );
}

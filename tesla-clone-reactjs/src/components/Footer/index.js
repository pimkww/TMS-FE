import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://www.tesla.com/" target='_blank' >Tesla-clone &copy; 2023</a>
                </div>
                <div>
                <a href="#" target='_blank'>Privacy & Legal </a>
                <a href="#" target="_blank" >Vehicles Recalls</a>
                <a href="#" target="_blank" >Contacts</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer

import React from "react";
import { Navbar } from "../../components/Navbar";

const productsLayout:React.FC<{children:React.ReactNode}>=({children})=>{
    return(
        <section >
            <Navbar />
            {children}
            </section>
    )
}
export default productsLayout;
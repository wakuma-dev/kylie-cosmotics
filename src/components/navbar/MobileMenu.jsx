import React from "react"
import useMobileMenu from "../../hooks/useMobileMenu"
import {motion, AnimatePresence} from 'framer-motion';


export default function MobileMenu(){
    const { mobileMenu, menuToggle, closeToggle } = useMobileMenu();
    return(
        <div className="lg:hidden">
       
  
        </div>
    )
}
import React from 'react'
import q from '../assets/q.jpg'
import w from '../assets/a.jpg'
import './style.css'
import { motion } from 'motion/react'
import Header from './Header'
const HeroSection = () => {
  return (
    <>
    <Header />
    <div className='container'>
        <div className="cir"></div>
        <div className="left">
            < motion.div className="top"
            initial={{ opacity: 0, y: -100  }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
                <h1 className='title'>our First Digital Art Collection</h1>
            </motion.div>
            <br />
            <div className="mid">
                <div className="users">
                    <motion.div className="u"
                    initial = {{ opacity:0 , y:-110  }}
                    whileInView = {{opacity:1 , y:0}}
                    transition={{duration:2}}
                    ></motion.div>
                    <motion.div className="u"
                    initial = {{ opacity:0 , y:-100  }}
                    whileInView = {{opacity:1 , y:0}}
                    transition={{duration:1.5}}
                    ></motion.div>
                    <motion.div className="u"
                    initial = {{ opacity:0 , y:-110  }}
                    whileInView = {{opacity:1 , y:0}}
                    transition={{duration:1.3}}
                    ></motion.div>
                    <div className="con">
                        <span style={{padding:"20px"}}>Join Our 100k community</span>
                    </div>
                </div>
                <br />
                <motion.button className='btn'
                whileHover={{ scale: 1.1 , boxShadow: "0px 0px 8px rgb(232, 39, 39)" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -100 , boxShadow: "0px 0px 8px rgb(232, 39, 39)" }}
                whileInView={{ opacity: 1, x: 0 , boxShadow:"0px" }}
                transition={{ duration: 2 }}
                >
                    GET STARTED
                </motion.button>
            </div>
            <br /><br />
            <motion.div className="bott"
           
           >
                <motion.h2
                 initial={{ opacity: 0,scale:0}}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ scale: 1.1 , color: "rgb(232, 39, 39)" }}
                 transition={{ duration: 2 }}
                 >Join the community of 10,000+ artists and collectors</motion.h2>   
            </motion.div>
        </div>
        <div className="right">
        <motion.img src={q} alt='bg' style={{width:'68%' , height:'90%' , marginTop:"20px"}}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        whileTap={{ scale: 0.9 }}
        // whileInView={{ opacity: 1, scale: 1 , x:0 }}
        />
        <div className="cir2"></div>
        </div>
    </div>
        <div className="section">
            <motion.div className="img1"
            whileInView={{ opacity: 1, scale: 1 , x:0 }}
            initial={{ opacity: 0 ,  x:- 700}}
            transition={{ duration: 1.5 }}
            >
            </motion.div>
            <br />
            <div className="section2">
            <motion.div className="img2"
            whileInView={{ opacity: 1, scale: 1 , x:0 }}
            initial={{ opacity: 0 ,  x:-900 }}
            transition={{ duration: 1.5 }}
            >
                
            </motion.div>
            <div className="img3"></div>
            </div>
        </div>
  </>
  )
}

export default HeroSection
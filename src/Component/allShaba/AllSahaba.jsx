import { Component, Fragment } from "react";
import styles from "./style.module.css";
import logo from "../../img/ogo.jpg";
import Navbars from "../Navbar/Navbar";
import { Link } from "react-router-dom";



class AllSahaba extends Component{

    state={
        allSahaba:[
            {id: 1, name: "أبو بكر الصديق"},
            {id: 2, name: "عمر بن الخطاب"},
            {id: 3, name: "أبو بكر الصديق"},
            {id: 4, name: "أبو بكر الصديق"},
            {id: 5, name: "أبو بكر الصديق"},
            {id: 6, name: "أبو بكر الصديق"},
            {id: 7, name: "أبو بكر الصديق"},
            {id: 8, name: "أبو بكر الصديق"},
            {id: 9, name: "أبو بكر الصديق"},
            {id: 10, name: "أبو بكر الصديق"},
        ]
    }

    getAllSahaba= ()=>{
        this.setState({

        })

        
    }


    render(){
        return(
            <Fragment>
                <Navbars bg="transparent"/>
                
                <div className="header position-relative">
                    <img className="w-100" style={{height: "400px"}} src={logo} alt=""/>
                    <div className={styles.title}>
                        <h2 className="bolder text-white ">الشخصيات</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="d-flex justify-content-center align-items-center flex-wrap ">
                    {this.state.allSahaba.map((value, index)=>{
                        return (
                            <div key={index} className="col-md-3">
                                <Link to={location => `/oneSahaby/${value.id}`} className="text-decoration-none">
                                    <div className={`${styles.item} d-flex justify-content-center align-items-center `} >
                                        <h5>{value.name}</h5>
                                    </div>
                                </Link>
                            </div>
                            )
                    })} 
                    </div>
                </div>
                </div>
                
            </Fragment>
        )
    }
}

export default AllSahaba
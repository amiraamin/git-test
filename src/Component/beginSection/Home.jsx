import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import videoHome from "../../video/videoHome.mp4";
import styles from "./style.module.css";

// function showHome(){
//     let box = document.getElementsByClassName("item")
//     box.style.right = 0
// }

class Home extends Component{
    state={
        right : "-70%"
    }

    showHome = ()=> {
        this.setState({
            right : "0%"
        })
      }

    render(){
        return(
            <Fragment>
                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <video  width="100%" height="100%" autoPlay controls >
                                    <source src={videoHome} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="col-md-6">
                                <div className="layout m-auto" >
                                    <div  className={[styles.item, styles.item1].join(' ')}>

                                    </div>
                                    <div  className={[styles.item, styles.item2].join(' ')}>

                                    </div>
                                    <div  className={[styles.item, styles.item3].join(' ')}>

                                    </div>
                                    <div  className={[styles.item, styles.item4].join(' ')}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home
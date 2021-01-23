import { Component, Fragment, useLayoutEffect } from "react";
import styles from "./style.css";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import pinImg from "../../img/pin.png";


// let pinPosition=[{id: 1, place: "masr", x: "150px", y: "200px"},
//                      {id: 2,  place: "maka", x: "100px", y: "300px"}
//                     ]

// let pins = document.getElementById("pins")
// console.log(pins);

// for (let i = 0; i < pinPosition.length; i++) {
//     let element = ``

//     element += `

//     <div id=${pinPosition.id}>${pinPosition.place}</div>
    
//     ` 
//     document.getElementById("pins").innerHTML = element
    
// }

// for (let i = 0; i < pinPosition.length; i++) {
//     let pin = document.getElementById(pinPosition.id)
    
// }

// pin.style.top = pinPosition.x
// pin.style.left = pinPosition.y



class MapPin extends Component{
    
    state={
         pinPosition:[{id: 1, place: "masr", x: "150px", y: "200px"},
                     {id: 2,  place: "maka", x: "100px", y: "300px"},
                     {id: 3,  place: "maka", x: "490px", y: "500px"}
                    ]
    }

    render(){
        return(
            <Fragment>
                <div id="pins" style={{position:"relative"}}>
                {
                    this.state.pinPosition.map((value, index)=>{
                        return (
                            <div id={index} className={styles.pinPostion} 
                                style={{
                                    position: "absolute",
                                    top: value.x,
                                    left: value.y
                                }}  
                                key={index}
                            >
                                {['top'].map((placement) => (
                                        <OverlayTrigger
                                            key={value.id}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                   <strong>عمور بن عبد العزيز</strong>
                                                </Tooltip>
                                            }>
                                            <Button style={{backgroundColor: "transparent", border: "none"}}>
                                                <img src={pinImg} alt=""  style={{width: "20px"}}/>
                                            </Button>
                                        </OverlayTrigger>
                                ))}
                            </div>
                        )
                    })
                }
                </div>
            </Fragment>
        )
        
    }
}

export default MapPin
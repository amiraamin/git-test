import { Component, Fragment, useLayoutEffect } from "react";
import styles from "./style.css";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import pinImg from "../../img/pin.png";
import mapImg from "../../img/map.jpg";



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
    z=20
    state={
         pinPosition:[{id: 1, place: "masr", x: "365", y: "145"},
                     {id: 2,  place: "libia", x: "280", y: "131"},
                     {id: 3,  place: "sodan", x: "363", y: "265"},
                     {id: 4,  place: "gzair", x: "153", y: "122"}
                    ],
    }

    // constructor(){
        
    //     window.onload = function () {
    //         var ImageMap = function (map) {
    //                 var n,
    //                     areas = map.getElementsByTagName('area'),
    //                     len = areas.length,
    //                     coords = [],
    //                     previousWidth = 1920;
    //                 for (n = 0; n < len; n++) {
    //                     coords[n] = areas[n].coords.split(',');
    //                 }
    //                 this.resize = function () {
    //                     var n, m, clen,
    //                         x = document.body.clientWidth / previousWidth;
    //                     for (n = 0; n < len; n++) {
    //                         clen = coords[n].length;
    //                         for (m = 0; m < clen; m++) {
    //                             coords[n][m] *= x;
    //                         }
    //                         areas[n].coords = coords[n].join(',');
    //                     }
    //                     previousWidth = document.body.clientWidth;
    //                     return true;
    //                 };
    //                 window.onresize = this.resize;
    //             },
    //             imageMap = new ImageMap(document.getElementById('map_ID'));
    //         imageMap.resize();
    //     }
    // }

    render(){
        return(
            <Fragment>


{/* <iframe src="https://www.google.com/maps/d/u/1/embed?mid=14cBp2QPHXbCDDfmn7r0YquDszdPm0xhq" width="100%" height="480"></iframe> */}

                
                    
                    {/* <area shape="circle" coords={[this.state.pinPosition[1].x, this.state.pinPosition[1].y, this.z]} alt="ليبيا" href=""/>
                    <area shape="circle" coords="365,145,20" alt="مصر" href=""/> 
                <area shape="circle" coords="363,265,20" alt="السودان" href=""/>  */}
                
                
                <div className="position-relative" style={{width:"600px", height:"400px"}}>

                <img src={mapImg} alt="Workplace" useMap="#workmap" width="600" height="400"/>
                <div id="pins" style={{position:"absolute", top:0, right:0}} className="">
                    <map name="workmap">
                {
                    this.state.pinPosition.map((value, index)=>{
                        return (
                            <Fragment key={index}>
                                <div id={index} className={styles.pinPostion} 
                                style={{
                                    position: "absolute",
                                    zIndex: 20,
                                    right: `${parseInt(value.x) + parseInt(20) }px`,
                                    top: `${value.y - 30}px `
                                }}          
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
                                                <area 
                                                onMouseOver=""
                                                shape="circle" 
                                                coords={[value.x, value.y, this.z]} 
                                                alt={value.name} href=""
                                                data-maphilight='strokeColor:"C1C240",strokeWidth:5,fillColor:"FFE97F",fillOpacity:0.4'
                                                />
                                                <img src={pinImg} alt=""  style={{width: "20px"}}/>
                                            </Button>
                                        </OverlayTrigger>
                                ))}
                            </div>
                        
                            </Fragment>
                        )
                    })
                }
                </map> 
                </div>
                </div>
            </Fragment>
        )
        
    }
}

export default MapPin
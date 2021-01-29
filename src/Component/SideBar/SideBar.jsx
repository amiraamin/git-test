import { Component } from "react";
import styles from "./style.module.css";


class SideBar extends Component{


    render(){
        return(
            <div className={`${styles.sidenav} overflow-auto`}>
                <ul className="pr-0">
                    {this.props.data.map((value, index)=>{
                        return <li className={styles.item} key={index}>{value.name}</li>
                        
                    })}
                </ul>
            
            </div>
        )
    }
}
export default SideBar
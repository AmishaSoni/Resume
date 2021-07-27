import React from 'react'
import {GiArrowScope} from "react-icons/gi";
export const Qualify = () => {
    return (
        <div>
             <div className="quali_head">
                    QUALIFICATION
                </div>
            <div className="quali">
               
                <div className="quali_content">
                <div className="quali_info"><span className="quali_icon"><GiArrowScope /></span>
                Ramgarh Engineering College , Ramgarh Jharkhand
                <p>~Graduation</p></div>
                <div className="quali_info"><span className="quali_icon"><GiArrowScope /></span>
                D.A.V Kapildev Public School , Kadru, Ranchi,Jharkhand 
                <p>~Intermediate</p></div>
                <div className="quali_info"><span className="quali_icon"><GiArrowScope /></span>
                Bishop Westcott Girl's School Doranda, Ranchi,Jharkhand
                <p>~Matriculation</p></div>
                </div>
            </div>
        </div>
    )
}
export default Qualify;
import { Component } from "react";
import Header from "../Header"

import "./index.css"

class Bookings extends Component{

    state = {bookingData : []}
    

    componentDidMount(){
        this.getBookingData()
        
    }


  



    getBookingData = async () =>{
        
       let response = await fetch("/bookings/")
      
       if(response.ok === true){
        let data = await response.json()
        console.log(data)
        let updatedData = data.map((each) =>(
            {
                id: each.id,
                studentName : each.studentName,
                mentorName : each.mentorName,
                areaOfInterest : each.area_of_interest,
                duration : each.duration
            }
        ) )
        console.log(updatedData)
        this.setState({bookingData : updatedData})
       
       }
    }
    
   
render(){
    const {bookingData} = this.state
    return(
        <>
        <Header />
        <div className="book-title"><h1>Bookings : </h1></div>
        <ul className="booked-item-list">
            {bookingData.map(each => (
                <li key = {each.id} className="booked-items">
                <div className="booked-details">
                    <h1 className="subj">{each.areaOfInterest}</h1>
                    <p className="student-name">Student Name : <span>{each.studentName}</span></p>
                    <p className="student-name">Mentor Name : <span>{each.mentorName}</span></p>
                    <p className="student-name">Duration : <span>{each.duration} Min</span></p>
                    <p className="student-name">Status : <span className="booked">Booked</span></p>

                </div>
            </li>
            ))}
        </ul>
        </>
    )
}
   
       
}


export default Bookings
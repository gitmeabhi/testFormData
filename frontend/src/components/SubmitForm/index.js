// import { useState} from "react"
// import axios from "axios"
import "./index.css"

const SubmitForm = (props) =>{

    // const [booking, setbooking] = useState({
    //     studentName : '',
    //     mentorName : '',
    //     area_of_interest : '',
    //     duration : ''
    // })

    const intrest = (e) =>{
        // const newData = {...booking}
        // newData[e.target.name] = e.target.value
       
        // setbooking(newData)
        // console.log(newData)
        getmentors(e.target.value)
    }

    // const saveBooking = (e) =>{
    //     e.preventDefault()

    //     const data = {
    //         studentName : booking.studentName,
    //         mentorName : booking.mentorName,
    //         area_of_interest : booking.area_of_interest,
    //         duration : parseInt(booking.duration)
    //     }

    //     axios.post("http://localhost:3001/date/booking/", data).then(res => {
    //         console.log(res.data)
    //     })
    // }
    
    const{userData, studentSelected, getmentors} = props

    const isit = userData.filter(each => each.areasOfExpertise === studentSelected)
        
  


    return(
        <div className="home-container">

            
        <form className="submit-form" >
            <h1 className="book-session">Book Session</h1>
            <div className="forms-input">
            <label htmlFor = "name" className="label-item">Name</label>
            <input type = "text" id = "name" name = "studentName"   className="student" placeholder="Enter Your Name" />
                <label htmlFor = "subject" className="label-item">Subject</label>
                <select className="duration-select" name = "area_of_interest" onChange={(e) => intrest(e)} id = "subject">
                    <option>HTML</option>
                    <option>Java Script</option>
                    <option>React JS </option>
                    <option>Node JS</option>
                    <option>CSS</option>
                </select>
                <label htmlFor = "duration" className="label-item">Duration</label>
                <select className="duration-select"   name = "duration" id = "duration">
                    <option>30 </option>
                    <option>60 </option>
                </select>
                <label htmlFor = "mentor" className="label-item">Mentor</label>
                <select className="duration-select" name = "mentorName"   id = "mentor">
                    
                {isit.map(each =>(
                    <option key= {each.id}>{each.userName}</option>
                ))}
                   
                </select>
            </div>
            <button type = "submit" className="submit-btn">Book Session</button>
        </form>
    </div>
    )
}

export default SubmitForm
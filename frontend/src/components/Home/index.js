import { Component } from "react";
import Header from "../Header"
import SubmitForm  from "../SubmitForm";

import "./index.css"

class Home extends Component{

    state = {userData : [], studentSelected : "HTML"}

    getmentors = (val) =>{
        this.setState({studentSelected: val})
    }

    componentDidMount(){
        this.getMentorData()
        
    }


  



    getMentorData = async () =>{
        
       let response = await fetch("/mentors/")
      
       if(response.ok === true){
        let data = await response.json()
        console.log(data)
        let updatedData = data.map((each) =>(
            {
                id: each.id,
                userName : each.name,
                availability : each.availability,
                areasOfExpertise : each.areas_of_expertise,
                isPremium : each.is_premium
            }
        ) )
        console.log(updatedData)
        this.setState({userData : updatedData})
       
       }
    }
    

    render(){
        const {userData, studentSelected} = this.state

        
        return(
            <>
            <Header />
            <SubmitForm userData = {userData} studentSelected = {studentSelected} getmentors = {this.getmentors} />
            </>
        )
    }
}

export default Home
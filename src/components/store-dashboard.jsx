import React from "react";
import CommonHeader from "../Common/common-header";
import HostingTable from "./hosting-table";
import axios from "axios";



export default class StoreDashboard extends React.Component{

    constructor(props)
    {
        super(props);
        this.state=({footwear:[]});


    }
    componentsDidMount()
    {
        let url = "http://localhost:3456/api/events";
        let config = {};
        config.headers = {
            "Authorization":"Bearer xDCPx3jy0Nja1yoOGQJ4 ",
            "Content-Type":"application/x-www-form-urlencoded"

        }

        axios.get(url,config)
            .then(function (response) {
                console.log(response);
                // Parse response.data to fit your this.state.variable format
                // Modify State
                var events = response.data;
                this.setState({events: events});
            }.bind(this))



    }


    render(){ return (
        <div style={{marginTop: "20px", marginLeft: "20px"}}>
            <CommonHeader
                title="Footwear"
                buttonLabel="Create New Entry"
                onButtonClick={function(){console.log("This should trigger the Create Footwear UI")}}
            />
            <HostingTable myEvents={this.state.footwear} />
        </div>
    )}


}

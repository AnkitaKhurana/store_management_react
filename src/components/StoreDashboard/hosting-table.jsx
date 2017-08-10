import React from "react";
import HostingRow from "./hosting-row"

export default class HostingTable extends React.Component{

    // Expecting a prop called myEvents


    render(){

        let table_style = {marginTop: "20px", marginLeft: "20px"};

        return (


            <div>


                <h2> Hosting </h2>

                <table style={table_style}>
                    <tbody>

                    <tr >
                        <th>Event Name</th>
                        <th>Starts At</th>
                        <th>Ends At</th>
                        <th>Venue</th>
                    </tr>


                    {
                        this.props.myEvents.map( function(event){
                            return <HostingRow event={event} key={event.id} />
                        })
                    }

                    </tbody>
                </table>
            </div>
        )}


}

import React from "react";
import HostingRow from "./hosting-row"

export default class HostingTable extends React.Component{

    // Expecting a prop called myFootwear


    render(){

        let table_style = {marginTop: "20px", marginLeft: "20px"};

        return (


            <div>


                <h2> Hosting </h2>

                <table style={table_style}>
                    <tbody>

                    <tr >
                        <th>Name</th>
                        {/*<th>Starts At</th>*/}
                        {/*<th>Ends At</th>*/}
                        {/*<th>Venue</th>*/}
                    </tr>


                    {
                        this.props.myFootwear.map( function(f){
                            return <HostingRow event={f} key={f.id} />
                        })
                    }

                    </tbody>
                </table>
            </div>
        )}


}

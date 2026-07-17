import React, { Component } from "react";

export class Cart extends Component{
    render(){
        return(
            <table border="1" style={{ borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th style={{ color: "green" }}>Name</th>
                        <th style={{ color: "green" }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.item.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td style={{ color: "green" }}>{item.itemname}</td>
                                <td style={{ color: "green" }}>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default Cart;
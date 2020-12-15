'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
class Filter extends React.Component{

    render(){
        console.log();
        return(
            <div className="row" >
                
                <div className="col-md-6">
                    <div>
                        <h6>Brand</h6>
                        <div className="checkbox">
                            <label style={{fontSize:"small"}}>
                                <input type="checkbox" value="" /> Option 1
                            </label>
                        </div>
                    </div>
                    <div>
                        <h6>Selection</h6>
                        <select className="custom-select form-control" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                
                    <div>
                        <h6>Selection</h6>
                        
                        <ul>
                            <li>
                                <input type="checkbox" id="option"/><label htmlFor="option" style={{fontSize:"small"}}> Electronics</label>
                                <ul>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> Laptops</label></li>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> TVs</label></li>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> Microphones</label></li>
                                </ul>
                            </li>
                            <li>
                                <input type="checkbox" id="option"/><label htmlFor="option" style={{fontSize:"small"}}> Electronics</label>
                                <ul>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> Laptops</label></li>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> TVs</label></li>
                                    <li><label style={{fontSize:"small"}}><input type="checkbox" className="subOption"/> Microphones</label></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                    
                <div className="col-md-6">
                    <div>
                        <h6>Colors</h6>
                        <div className="row">
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'green', height:"25px",width:'25px'}}></div>
                            </div>    
                            <div className="col-md-1 ">
                                <div className="col-md-4 rounded-circle" style={{backgroundColor:'blue', height:"25px",width:'25px'}}></div>
                            </div>

                            <div className="col-md-1 ">
                                <div className="col-md-4 rounded-circle" style={{backgroundColor:'pink', height:"25px",width:'25px'}}></div>
                            </div>
                           
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'violet', height:"25px",width:'25px'}}></div>
                            </div>
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'red', height:"25px",width:'25px'}}></div>
                            </div>
                            
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'black', height:"25px",width:'25px'}}></div>
                            </div>
                            
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'yellow', height:"25px",width:'25px'}}></div>
                            </div>
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'magenta', height:"25px",width:'25px'}}></div>
                            </div>
                            <div className="col-md-1 ">
                                <div className=" rounded-circle" style={{backgroundColor:'orange', height:"25px",width:'25px'}}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6>Price Range</h6>
                       
                   
                    <input type="range" className="form-control"  onChange={()=>{}}  value="200" min="0" max="1000"/>
                    
                
                    </div>
                </div>
             </div>
        )
                
    }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(Filter), domContainer);
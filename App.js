import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/82/be/d4/82bed479344270067e3d2171379949b3.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


    

const ResturantCard = ({resData})=>{
     
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return(
        <div className="res-card" >
            
            <img className="res-logo" alt="res-logo" src={url+resData.cloudinaryImageId}/>

            <h3>{resData.name}</h3>
            <h4>{resData.locality}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.cuisines.join(",")}</h4>
        </div>
    );
};

const Body = () =>{

    const resList = [

        {
                              "id": "11091",
                              "name": "Pizza Hut",
                              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                              "locality": "Attapur",
                              "areaName": "Attapur",
                              "costForTwo": "₹350 for two",
                              "cuisines": [
                                "Pizzas"
                              ],
                              "avgRating": 4
        },
        
        {
        
                              "id": "312149",
                              "name": "Wow! Momo",
                              "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                              "locality": "Banjara Hills",
                              "areaName": "Banjara Hills",
                              "costForTwo": "₹300 for two",
                              "cuisines": [
                                "Tibetan",
                                "Healthy Food",
                                "Asian",
                                "Chinese",
                                "Snacks",
                                "Continental",
                                "Desserts",
                                "Beverages"
                              ],
                              "avgRating": 4.2
        
        },
        
        {
        
                              "id": "28108",
                              "name": "Al Rabea Al Arabi Cafeteria",
                              "cloudinaryImageId": "jnzmscxd37rbjmgciwt5",
                              "locality": "Mehdipatnam",
                              "areaName": "Mehdipatnam",
                              "costForTwo": "₹250 for two",
                              "cuisines": [
                                "Arabian",
                                "Lebanese"
                              ],
                              "avgRating": 4.4
        
        },
        
        {
        
                             "id": "659669",
                              "name": "Dum Safar Biryani",
                              "cloudinaryImageId": "b374f789191669e20eb97a17f01bf23f",
                              "locality": "COMMERCIAL CENTRE",
                              "areaName": "Attapur",
                              "costForTwo": "₹500 for two",
                              "cuisines": [
                                "Biryani",
                                "Kebabs",
                                "Tandoor",
                                "Indian",
                                "Desserts"
                              ],
                              "avgRating": 3.5
        
        },
        
        {
                              "id": "750389",
                              "name": "Daily Kitchen - Homely Meals",
                              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750389.JPG",
                              "locality": "GUMMA KONDA COLONY",
                              "areaName": "Attapur",
                              "costForTwo": "₹400 for two",
                              "cuisines": [
                                "Home Food",
                                "Indian",
                                "North Indian",
                                "Thalis"
                              ],
                              "avgRating": 3.9
        
        },
        
        {
                              "id": "491963",
                              "name": "NH1 Bowls - Highway To North",
                              "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
                              "locality": "Attapur",
                              "areaName": "GUMMA KONDA COLONY",
                              "costForTwo": "₹250 for two",
                              "cuisines": [
                                "North Indian",
                                "Punjabi",
                                "Home Food"
                              ],
                              "avgRating": 4.5
        
        },
        
        {
                              "id": "612602",
                              "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
                              "locality": "Circle No 13",
                              "areaName": "Charminar",
                              "costForTwo": "₹200 for two",
                              "cuisines": [
                                "Desserts",
                                "Ice Cream",
                                "Ice Cream Cakes"
                              ],
                              "avgRating": 4.6
        
        }
        
        ];
   
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                 {
                   resList.map((place)=>
                    (<ResturantCard key={resList.id}resData={place}/>)
                )
                    
                 }
                
                 {/* <ResturantCard resData={resList[4]}/> */}

            </div>
        </div>
       
    );
};
const AppLayout = () =>{
    return(
        <div className = "app">
            <Header/>
            <Body/>

        </div>
    );
};




//console.log(jsxHeading)
const root=ReactDOM.createRoot(document.getElementById("parent"));
root.render(<AppLayout/>);










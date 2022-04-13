import React, { useState } from 'react'
import Navbar from './Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const App = () => {
    const [aaa, bbb] = useState([]);
    const [dis, SetDis] = useState([]);
    const [showMediaIcons, setshowMediaIcons] = useState();
    console.log("Discount", dis);

    // const suum = () => {
    //     const sum = dis.map(ele => ele.discount).reduce((acc, curr) => {
    //         return acc + curr;
    //     });
    //     console.log(sum);
    // }
    // suum();

    const handleChange = (event, name) => {
        if (dis.map(ele => ele.tamplateName === name)) {

        }
    }

    const handleClick = () => {
        SetDis(oldstate => {
            let newArray = oldstate.slice();
            newArray.push({
                tamplateName: "Skin",
                actualPrice: "11300",
                discount: "",
            })
            return [...newArray]
        })
    }


    return (
        <>
            <Navbar/>
        </>
    )
}

export default App

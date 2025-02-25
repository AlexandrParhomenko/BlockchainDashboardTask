import {CiCircleList} from "react-icons/ci";
import {LuChartNetwork} from "react-icons/lu";
import {IoCartOutline} from "react-icons/io5";
import {BsCoin} from "react-icons/bs";
import {GoGear} from "react-icons/go";
import {useState} from "react";

const NavBar = () => {
    const [activePage, setActivePage] = useState<string>("Dashboard")

    return (
        <div className={"appContainer__navBar"}>
            <div onClick={() => setActivePage("Dashboard")} className={"navItem active"}>
                <CiCircleList size={30} color={activePage === "Dashboard" ? "white" : "#4a5d73"}/>
                <span style={{color: activePage === "Dashboard" ? "white" : "#4a5d73", fontSize: 10}}>Dashboard</span>
            </div>
            <div onClick={() => setActivePage("Megabot")} className={"navItem"}>
                <LuChartNetwork size={30} color={activePage === "Megabot" ? "white" : "#4a5d73"}/>
                <span style={{color: activePage === "Megabot" ? "white" : "#4a5d73", fontSize: 10}}>Megabot</span>
            </div>
            <div onClick={() => setActivePage("Bot market")} className={"navItem"}>
                <IoCartOutline size={30} color={activePage === "Bot market" ? "white" : "#4a5d73"}/>
                <span style={{color: activePage === "Bot market" ? "white" : "#4a5d73", fontSize: 10}}>Bot market</span>
            </div>
            <div onClick={() => setActivePage("Coin prices")} className={"navItem"}>
                <BsCoin size={30} color={activePage === "Coin prices" ? "white" : "#4a5d73"}/>
                <span style={{color: activePage === "Coin prices" ? "white" : "#4a5d73", fontSize: 10}}>Coin prices</span>
            </div>
            <div onClick={() => setActivePage("Profile")} className={"navItem"}>
                <GoGear size={30} color={activePage === "Profile" ? "white" : "#4a5d73"}/>
                <span style={{color: activePage === "Profile" ? "white" : "#4a5d73", fontSize: 10}}>Profile</span>
            </div>
        </div>
    );
};

export default NavBar;
import './App.css'
import './style.scss'
import {RxHamburgerMenu} from "react-icons/rx";
import NavBar from "./components/NavBar/NavBar.tsx";
import {useEffect, useState} from "react";
import {LuRefreshCw} from "react-icons/lu";
import data from '../src/data/data.min.json'
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from "recharts";

function App() {
    const [filter, setFilter] = useState<string>()
    const [activeBot, setActiveBot] = useState<number>()
    const [chartData, setChartData] = useState<any>([{name: '22.04', uv: getRandomInt(10000)},
        {name: '23.04', uv: getRandomInt(10000)},
        {name: '24.04', uv: getRandomInt(10000)},
        {name: '25.04', uv: getRandomInt(10000)},
        {name: '26.04', uv: getRandomInt(10000)}
    ])
    const [charPercent, setChartPercent] = useState<number>(getRandomInt(100))

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const pickedFilter = localStorage.getItem("filter")
    useEffect(() => {
        if (!pickedFilter) {
            localStorage.setItem("filter", "all_time")
            setFilter("all_time")
        } else setFilter(pickedFilter)
    }, [])

    return (
        <div className={"appContainer"}>
            <div className={"mainContentWrapper"}>
                <div className={"flexContainer"}>
                    <RxHamburgerMenu color={"#4a5d73"} size={35}/>
                    <span style={{color: "#4a5d73", fontWeight: "bold", fontSize: 30}}>Dashboard</span>
                    <LuRefreshCw color={"#4a5d73"} size={35}/>
                </div>
                <div>
                    <span style={{color: "#4a5d73", fontWeight: "bold", fontSize: 18, letterSpacing: 0.5}}>TRADING CAPITAL</span>
                    <div className={"flexContainer"}>
                        <span
                            className={"titleFont"}>{data.trading_capital} {data.trading_capital_currency.toUpperCase()}</span>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", rowGap: 6}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", columnGap: 20}}>
                                <span className={"mainFont"}>BALANCE:</span>
                                <div style={{display: "flex", flexDirection: "row", columnGap: 5}}>
                                    <span className={"dataFont"}>{data.balance}</span>
                                    <div className={"circleLogoWrapper"}>
                                        <div className={"circle"}>
                                            <span className={"circle__font"}>H</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", columnGap: 20}}>
                                <span className={"mainFont"}>ON HOLD:</span>
                                <div style={{display: "flex", flexDirection: "row", columnGap: 5}}>
                                    <span className={"dataFont"}>{data.on_hold}</span>
                                    <div className={"circleLogoWrapper"}>
                                        <div className={"circle"}>
                                            <span className={"circle__font"}>H</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position: "relative"}}>
                    <LineChart width={document.body.clientWidth - 40} height={400} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2}/>
                    </LineChart>
                    <span style={{
                        color: "#5ea753",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "40%",
                        left: "45%",
                        fontSize: 30
                    }}>+{charPercent}%</span>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {data.bots.map((el, idx) => <div onClick={() => {
                        setActiveBot(idx)
                        setChartPercent(getRandomInt(100))
                        setChartData([{name: '22.04', uv: getRandomInt(10000)},
                            {name: '23.04', uv: getRandomInt(10000)},
                            {name: '24.04', uv: getRandomInt(10000)},
                            {name: '25.04', uv: getRandomInt(10000)},
                            {name: '26.04', uv: getRandomInt(10000)}
                        ])
                    }}
                                                     className={idx === activeBot ? "botBoxWrapper botActive" : "botBoxWrapper"}
                                                     key={idx}>
                        <img style={{objectFit: "contain", width: "10vw", height: "10vw"}}
                             src={`../src/assets/p${idx + 1}.png`} alt={`bot_img${idx + 1}`}/>
                        <span style={{color: "white", fontWeight: "bold"}}>{el.name}</span>
                        <span style={{
                            color: parseInt(el[filter]) > 0 ? "#5ea753" : "#de3f76",
                            fontWeight: "bold"
                        }}>{el[filter] || 0}%</span>
                    </div>)}
                </div>
                <div className={"rangeWrapper"}>
                    <span style={{color: "#4a5d73", fontWeight: "bold"}}>Time Range</span>
                    <div onClick={() => {
                        setFilter("24h")
                        localStorage.setItem("filter", "24h")
                    }} className={filter === "24h" ? "rangeFilter filterActive" : "rangeFilter"}>24h
                    </div>
                    <div onClick={() => {
                        setFilter("7d")
                        localStorage.setItem("filter", "7d")
                    }} className={filter === "7d" ? "rangeFilter filterActive" : "rangeFilter"}>7 days
                    </div>
                    <div onClick={() => {
                        setFilter("30d")
                        localStorage.setItem("filter", "30d")
                    }} className={filter === "30d" ? "rangeFilter filterActive" : "rangeFilter"}>30 days
                    </div>
                    <div onClick={() => {
                        setFilter("all_time")
                        localStorage.setItem("filter", "all_time")
                    }} className={filter === "all_time" ? "rangeFilter filterActive" : "rangeFilter"}>All time
                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}

export default App

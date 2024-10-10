//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./secondsCounter.jsx";

// contador de segundos//
let seconds = 0
let intervalo;
let sentido = true;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter />)
app.render(<SecondsCounter counter={seconds} />);

const renderSecondsCounter = () => {
    if (sentido) {
        seconds++
    } else {
        seconds--
    };
    
    app.render(<>
        <SecondsCounter counter={seconds} />
        <div className="ml-3 .bg-info-subtle">

            <input id="Counting" className="" onChange={(event) => {
                seconds = event.target.value;
            }}
                placeholder="Insert number to start countdown" type="number" />

            <div className="btn-group m-3" role="group" aria-label="Basic mixed styles example">

                <button onClick={() => {
                    clearInterval(intervalo);
                }} type="button" className="btn btn-danger">Stop</button>

                <button onClick={() => {
                    seconds = 0;
                    document.querySelector("#Counting").value = undefined;
                }} type="button" className="btn btn-warning">Reset</button>

                <button onClick={() => {
                    intervalo = setInterval(renderSecondsCounter, 1000);
                }} type="button" className="btn btn-success">Start</button>

                <button onClick={() => {
                    sentido = !sentido;
                }} type="button" className="btn btn-info">{sentido ? "Final Countdown!" : "Not the Final Countdown"}</button>

            </div>

        </div>
    </>); if(seconds <= 0){
        alert("Go to -> https://www.youtube.com/watch?v=9jK-NcRmVcw");
        clearInterval(intervalo);
    };;
}
intervalo = setInterval(renderSecondsCounter, 1000);



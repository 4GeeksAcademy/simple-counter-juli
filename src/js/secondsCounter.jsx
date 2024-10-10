import React from "react";

    const Card = (props) => {
        return (
            <div className="card text-bg-dark mb-3 m-1">
                <div className="card-body">
                    <h5 className="card-title">{props.digito}</h5>
                </div>
            </div>
        )
    }

    const SecondsCounter = (props) => {
        return ( 
            <div className="d-flex mb-2 bg-primary text-white">
                <Card digito={<i className="far fa-clock"></i>}/>
                <Card digito={Math.floor (props.counter/10000 %10)}/>
                <Card digito={Math.floor (props.counter/10000 %10)}/>
                <Card digito={Math.floor (props.counter/1000 %10)}/>
                <Card digito={Math.floor (props.counter/10000 %10)}/>
                <Card digito={Math.floor (props.counter/100 %10)}/>
                <Card digito={Math.floor (props.counter/10 %10)}/>
                <Card digito={props.counter %10}/>         
            </div>
        )
    }



    export default SecondsCounter;
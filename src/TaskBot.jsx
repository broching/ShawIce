import React from "react";
import './TaskBot.css'
import beeProf from "./beeProfessional.jpg"
import bingenProf from "./bingenProfessional.jpg"
import anisulProf from "./anisulProfessional.jpg"
import brian from "./brian.jpg"
import groupPhoto from "./groupPhoto.jpg"
import k2 from "./k2.jpg"
import k1 from "./k1.jpg"
import weirenCute from "./weirenCute.jpg"
import joyProf from "./joyProf.jpg"
import lester from "./lester.jpg"
import sf from "./sf.jpg"
import gabby2 from './gabbySelfie.jpg'

function TaskBot(props) {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            
            <div className="task-bot">
                <h1 className="special">Introducing ICE Team</h1>
                <img src={joyProf} class="spin"></img>
                <img src={brian} class="spin"></img>
                <img src={anisulProf} class="spin"></img>
                <img src={beeProf} class="spin"></img>
                <img src={bingenProf} class="spin"></img>
                <img src={k2} class="spin"></img>
                <img src={k1} class="spin"></img>
                <img src={weirenCute} class="spin"></img>
                <img src={gabby2} class="spin"></img>
                <img src={lester} class="spin"></img>
                <img src={sf} class="spin"></img>
                <img src={groupPhoto} width={600} style={{marginTop:"40px"}}></img>

            </div>

        </div>
    );
}
export default TaskBot;
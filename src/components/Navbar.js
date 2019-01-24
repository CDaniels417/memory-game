import React from "react";

const Navbar = props => (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="navbar-brand">Forget Me Not Mario Kart!!!</div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-link">
                        <div class="nav-link">Status: {props.status}</div>
                    </li>
                    <li class="nav-link">
                        <div class="nav-link" title= "Store">Score: {props.currentScore}</div>
                    </li>
                    <li class="nav-link">
                        <div class="nav-link" title= "Contact">High Score: {props.highScore}</div>
                    </li>
                </ul>
            </div>
        </nav>
)

export default Navbar;
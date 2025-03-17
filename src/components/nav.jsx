import React from "react";
import LikeButton from "./likeButton";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <LikeButton />
                <button id="toggle_meny">Dölj meny</button>

                <button className="hide toggle_läge">
                    <img id="sun_ikon" src="/src/assets/Images/ikoner/sun.png" alt="Ikon för ljust läge" />
                </button>

                <img className="hide logo_nav" src="/src/assets/Images/logga.png" alt="logotyp" />
                <a className="hide" href="/index.html">
                    <h1>mini Barber</h1>
                </a>

                <a className="hide boka_nu" href="https://boka.timma.se/reservation/minibarber">
                    <p>BOKA NU</p>
                </a>
            </nav>
        )
    }
}

export default Nav;
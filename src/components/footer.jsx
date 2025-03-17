import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div id="layout_footer">
                    <div id="linje1"></div>
                    <div id="linje2"></div>
                    <div className="sektion"><img id="logo_footer" src="/src/assets/Images/logga.png" alt="logotyp" /></div>
                    <div className="sektion">
                        <p id="kontakt_text"><span id="kontakt_rubrik">Kontakt</span><br />
                            <a id="mail" href="mailto:exempel@mail.com">exempel@mail.com</a>
                            <br />070-123 45 67
                        </p>
                        <div id="social_media">
                            <a id="instagram" href="https://www.instagram.com/mini_barber97/?igsh=MzJubTU2aWMzbWhx"></a>
                            <a id="facebook" href="https://www.facebook.com/people/Mini-barber/61553260184497/"></a>
                            <a id="tiktok" href="https://www.tiktok.com/@mini.barber3?_t=8ni4NDSLn0a&_r=1"></a>
                        </div>
                    </div>
                    <div className="sektion" id="sektion_öppettider">
                        <p id="öppettider_rubrik">Öppettider</p>
                        <ul id="lista_öppettider">
                            <li><span className="dag">Mån</span> 00.00 - 24.00</li>
                            <li><span className="dag">Tis</span> 00.00 - 24.00</li>
                            <li><span className="dag">Ons</span> 00.00 - 24.00</li>
                            <li><span className="dag">Tor</span> 00.00 - 24.00</li>
                            <li><span className="dag">Fre</span> 00.00 - 24.00</li>
                            <li><span className="dag">Lör</span> 00.00 - 24.00</li>
                            <li><span className="dag">Sön</span> 00.00 - 24.00</li>
                        </ul>
                        <p id="copyright">All rights reserved. Copyright 2024.</p>
                    </div>
                    <div className="sektion">
                        <div id="hitta_hit">
                            <p id="hitta_hit_rubrik">Hitta hit</p>
                            <a className="vägvisning"
                                href="https://www.google.com/maps/place/Pr%C3%A4stg%C3%A5rdsgatan+48,+941+32+Pite%C3%A5/@65.319198,21.4735283,17z/data=!3m1!4b1!4m6!3m5!1s0x467f17a67a9f356b:0x257bd2447cba3819!8m2!3d65.319198!4d21.4761032!16s%2Fg%2F11y2g_gttn?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"></a>
                            <div id="adress_ikon">
                                <img id="ikon_pin" src="/src/assets/Images/ikoner/pin.png" alt="bild för google pin" />
                                <a id="adress"
                                    href="https://www.google.com/maps/place/Pr%C3%A4stg%C3%A5rdsgatan+48,+941+32+Pite%C3%A5/@65.3190927,21.468995,15.56z/data=!4m6!3m5!1s0x467f17a67a9f356b:0x257bd2447cba3819!8m2!3d65.319198!4d21.4761032!16s%2Fg%2F11y2g_gttn?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D">
                                    Exempeladress 99, stad, land</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
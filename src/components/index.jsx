import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

class Index extends React.Component {
    render() {
        return (
            <main>
                <button id="pil_upp">
                    <img src="/src/assets/Images/ikoner/arrowup.png" alt="Pil för att återgå till startsidan" />
                </button>

                <header>
                    <p id="header_text"><span id="välkommen">Välkommen</span><br />till din mini barber<br />i Piteå</p>
                    <Link to ="#sida_behandlingar" id="button_behandlingar">
                        <p id="text_knapp_behandlingar">BEHANDLINGAR</p>
                    </Link>
                    <Link to="#sida_galleri" id="button_galleri">
                        <p>GALLERI</p>
                    </Link>
                    <Link to="#sida_om_oss" id="button_om_oss">
                        <p>OM OSS</p>
                    </Link>
                </header>

                <section id="sida_behandlingar">
                    <h2>BEHANDLINGAR</h2>
                    <div id="behandlingar_grid">
                        <div className="ruta" id="klippning">
                            <img className="ikon_sax" src="/src/assets/Images/ikoner/sax.png" alt="Ikon för sax" />
                            <p className="text_behandling">Herrklippning<br /><span className="pris"> 400kr</span></p>
                        </div>
                        <div className="ruta" id="klippning_skägg">
                            <div className="dubbla_ikoner"> <img className="ikon_sax" src="/src/assets/Images/ikoner/sax.png"
                                alt="Ikon för sax" />
                                <img className="ikon_skägg" src="/src/assets/Images/ikoner/skägg.png" alt="Ikon för skägg" />
                            </div>
                            <p className="text_behandling">Klippning + skägg<br /><span className="pris">600kr</span></p>
                        </div>
                        <div className="ruta" id="skäggtrim">
                            <div className="dubbla_ikoner"> <img id="ikon_trimmer" src="/src/assets/Images/ikoner/trimmer.png"
                                alt="Ikon för trimmer" />
                                <img className="ikon_skägg" src="/src/assets/Images/ikoner/skägg.png" alt="Ikon för skägg" />
                            </div>
                            <p className="text_behandling">Skäggtrim<br /><span className="pris">300kr</span></p>
                        </div>
                        <div className="ruta" id="barnklippning">
                            <div className="dubbla_ikoner"> <img className="ikon_sax" src="/src/assets/Images/ikoner/sax.png"
                                alt="Ikon för sax" />
                                <img id="ikon_barn" src="/src/assets/Images/ikoner/barn.png" alt="Ikon för barn" />
                            </div>
                            <p className="text_behandling">Barnklippning<br /><span className="pris">300kr</span></p>
                        </div>
                        <div className="ruta" id="seniorklippning">
                            <div className="dubbla_ikoner"> <img className="ikon_sax" src="/src/assets/Images/ikoner/sax.png"
                                alt="Ikon för sax" />
                                <img id="ikon_senior" src="/src/assets/Images/ikoner/senior.png" alt="Ikon för pensionär" />
                            </div>
                            <p className="text_behandling">Seniorklippning<br /><span className="pris">300kr</span></p>
                        </div>
                        <div className="ruta" id="soon">
                            <img id="ikon_soon" src="/src/assets/Images/ikoner/coming.png" alt="Ikon för (kommer snart)" />
                            <p>. . .</p>
                        </div>
                    </div>
                </section>

                <section id="sida_galleri">
                    <h2>GALLERI</h2>
                    <div id="layout_övre">
                        <div id="bild_1">
                            <img id="byta_bild" src="./src/assets/Images/stock/stock1.jpg" alt="Bild på resultat" />
                            <p className="figurtext">Herrklippning: Mittbena</p>
                        </div>
                        <img id="bild_2" src="./src/assets/Images/stock/stock2.jpg" alt="Bild på resultat" />
                        <img id="bild_3" src="./src/assets/Images/stock/stock3.jpg" alt="Bild på resultat" />
                        <img id="bild_4" src="./src/assets/Images/stock/stock4.jpg" alt="Bild på resultat" />
                    </div>
                    <div id="layout_undre">
                        <img id="bild_5" src="./src/assets/Images/stock/stock5.jpg" alt="Bild på resultat" />
                        <img id="bild_6" src="./src/assets/Images/stock/stock6.jpg" alt="Bild på resultat" />
                        <img id="bild_7" src="./src/assets/Images/stock/stock7.jpg" alt="Bild på resultat" />
                    </div>
                </section>

                <section id="sida_om_oss">
                    <h2>OM OSS</h2>
                    <div id="bakgrundsruta">
                        <img id="bild_barberare" src="/src/assets/Images/barber.jpg" alt="bild på frisören" />
                        <p><span id="rubrik_beskrivning">Lorem Ipsum</span><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at fermentum orci.
                            Sed vestibulum nec augue et scelerisque. Etiam sed nibh sit amet ligula tempor imperdiet.
                            Proin eu scelerisque velit. Quisque vehicula tincidunt ultrices. Etiam sit amet viverra odio.
                            Aenean eu enim consectetur, facilisis ligula et, porta nunc. Vivamus pulvinar a tellus ut tincidunt.
                            Sed fringilla, diam sed condimentum fermentum, enim leo vehicula mi, nec sodales risus enim vitae erat.
                            Quisque tristique urna nec elit dictum aliquam. Donec dui nulla, scelerisque nec risus nec, gravida
                            sollicitudin
                            lectus. Sed rhoncus varius orci ac blandit. Nam et leo a mi cursus venenatis. Aenean fermentum feugiat
                            arcu, sit
                            amet congue ex ullamcorper at. Donec at mi a sapien gravida dignissim.</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default Index;
import React from 'react'
import hello from '../../../assets/hello.svg';
import Charts from '../../charts/Charts'
import "./home.css";


const Home = () => {
    return (
        <>
            <div className="home__container">{/* === Container === */}

                <div className="home__title">{/* === Title === */}
                    <img src={hello} alt="hello" />
                    <div className="home_greeting">
                        <h1>Teacher</h1>
                        <p>Panel</p>
                    </div>
                </div>

                <div className="home__cards">
                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Subject</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-money-bill fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Program</p>
                            <span className="font-bold text-title">R$2.467</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">class</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>

                    <div className="card">{/* === CARDS === */}
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Students</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>

                <div className="charts">{/* === CHARTS ==== */}

                    <div className="charts__left">{/* === LEFT ==== */}
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Lorem ipsum dolor sit .</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Charts />

                    </div>

                    <div className="charts__right">{/* === RIGHT === */}
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Lorem ipsum dolor sit .</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Exam</h1>
                                <p>R$2.500</p>
                            </div>

                            <div className="card2">
                                <h1>Events</h1>
                                <p>R$250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Off class</h1>
                                <p>R$150,00</p>
                            </div>

                            <div className="card4">
                                <h1>time</h1>
                                <p>R$180,00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;
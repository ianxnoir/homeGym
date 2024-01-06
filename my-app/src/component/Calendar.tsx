import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Calendar() {

    return (
        <div>
            {/* <div className="route" id="index"></div>
            <div className="route" id="oct-week-3"></div>
            <div className="route" id="oct-week-4"></div>
            <div className="route" id="nov-week-1"></div>
            <div className="route" id="schedule"></div>
            <div className="cal-device">
                <header className="cal-header">
                    <div className="cal-subheader"></div>
                    <div className="cal-bar">
                        <div className="cal-button -left">

                        </div>
                        <div className="cal-title">
                            <div className="cal-heading -calendar">Calendar</div>
                            <div className="cal-heading -schedule">Wednesday, November 10</div>
                        </div>
                        <div className="cal-button -right">
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </header>




                <section className="cal-app">


                    <header className="cal-week">
                        <div className="cal-weekday">SUN</div>
                        <div className="cal-weekday">MON</div>
                        <div className="cal-weekday">TUE</div>
                        <div className="cal-weekday">WED</div>
                        <div className="cal-weekday">THU</div>
                        <div className="cal-weekday">FRI</div>
                        <div className="cal-weekday">SAT</div>
                    </header>

                    <div className="cal-scene -calendar">
                        <div className="cal-month -october">


                            <header className="cal-header">


                                <a className="cal-link" href="#oct-week-1"><span>October</span></a>
                                <a className="cal-arrow" href="#nov-week-1"><i className="fa fa-chevron-up"></i></a>
                                <a className="cal-arrow" href="#oct-week-4"><i className="fa fa-chevron-up"></i></a>
                            </header>



                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                        </div>


                        <div className="cal-month -november">
                            <header className="cal-header">
                                <a className="cal-link" href="#nov-week-1"><span>November</span></a>
                                <a className="cal-arrow"><i className="fa fa-chevron-up"></i></a>
                            </header>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                        </div>


                        <div className="cal-month -december">


                            <header className="cal-header">


                                <a className="cal-link"><span>December</span></a>
                                <a className="cal-arrow" href="#nov-week-1"><i className="fa fa-chevron-down"></i></a>
                                <a className="cal-arrow" href="#oct-week-3"><i className="fa fa-chevron-down"></i></a>


                            </header>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a href="#schedule" className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                        </div>




                        <div className="cal-month -january">
                            <header className="cal-header">
                                <div className="cal-link"><span>January</span></div>
                                <a className="cal-arrow" href="#oct-week-4"><i className="fa fa-chevron-down"></i></a>
                            </header>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                            <a className="cal-day"></a>
                        </div>
                    </div>




                    <div className="cal-scene -schedule">
                        <div className="cal-item">
                            <div className="cal-time"><span>08:00</span></div>
                            <div className="cal-task">
                                <p>wake up</p>
                            </div>
                        </div>
                        <div className="cal-item -long">
                            <div className="cal-time"><span>12:15</span></div>
                            <div className="cal-task">
                                <p>meeting with the team, discussing the project requirements</p>
                            </div>
                        </div>
                        <div className="cal-item">
                            <div className="cal-time"><span>13:00</span></div>
                            <div className="cal-task">
                                <p>lunch with Peter</p>
                                <a><i className="fa fa-map-marker"></i>cafe <q>Petit brasserie</q></a>
                            </div>
                        </div>
                        <div className="cal-item">
                            <div className="cal-time"><span>14:30</span></div>
                            <div className="cal-task">
                                <p>call with Johnathan and Stevie</p>
                            </div>
                        </div>
                        <div className="cal-item -long">
                            <div className="cal-time"><span>16:45</span></div>
                            <div className="cal-task">
                                <p>project presentation</p>
                                <a><i className="fa fa-map-marker"></i>Head Office</a>
                            </div>
                        </div>
                        <div className="cal-item">
                            <div className="cal-time"><span>18:00</span></div>
                            <div className="cal-task">
                                <p>call with Johnathan and Stevie</p>
                            </div>
                        </div>
                        <div className="cal-item -long">
                            <div className="cal-time"><span>19:00</span></div>
                            <div className="cal-task">
                                <p>David's birthday party</p>
                                <a><i className="fa fa-map-marker"></i>bar <q>Tailor's John</q></a>
                            </div>
                        </div>
                        <div className="cal-item">
                            <div className="cal-time"></div>
                            <div className="cal-task"></div>
                        </div>
                    </div>



                </section>
            </div> */}
            <div className="wrapper2">
                <main>
                    <div className="toolbar">
                        <div className="toggle">
                            <div className="toggle__option">week</div>
                            <div className="toggle__option toggle__option--selected">month</div>
                        </div>
                        <div className="current-month">June 2016</div>
                        <div className="search-input">
                            <input type="text" value="What are you looking for?" />
                            <i className="fa fa-search"></i>
                        </div>
                    </div>


                    
                    <div className="calendar">
                        <div className="calendar__header">
                            <div>mon</div>
                            <div>tue</div>
                            <div>wed</div>
                            <div>thu</div>
                            <div>fri</div>
                            <div>sat</div>
                            <div>sun</div>
                        </div>
                        <div className="calendar__week">
                            <div className="calendar__day day">1</div>
                            <div className="calendar__day day">2</div>
                            <div className="calendar__day day">3</div>
                            <div className="calendar__day day">4</div>
                            <div className="calendar__day day">5</div>
                            <div className="calendar__day day">6</div>
                            <div className="calendar__day day">7</div>
                        </div>
                        <div className="calendar__week">
                            <div className="calendar__day day">8</div>
                            <div className="calendar__day day">9</div>
                            <div className="calendar__day day">10</div>
                            <div className="calendar__day day">11</div>
                            <div className="calendar__day day">12</div>
                            <div className="calendar__day day">13</div>
                            <div className="calendar__day day">14</div>
                        </div>
                        <div className="calendar__week">
                            <div className="calendar__day day">15</div>
                            <div className="calendar__day day">16</div>
                            <div className="calendar__day day">17</div>
                            <div className="calendar__day day">18</div>
                            <div className="calendar__day day">19</div>
                            <div className="calendar__day day">20</div>
                            <div className="calendar__day day">21</div>
                        </div>
                        <div className="calendar__week">
                            <div className="calendar__day day">22</div>
                            <div className="calendar__day day">23</div>
                            <div className="calendar__day day">24</div>
                            <div className="calendar__day day">25</div>
                            <div className="calendar__day day">26</div>
                            <div className="calendar__day day">27</div>
                            <div className="calendar__day day">28</div>
                        </div>
                        <div className="calendar__week">
                            <div className="calendar__day day">29</div>
                            <div className="calendar__day day">30</div>
                            <div className="calendar__day day">31</div>
                            <div className="calendar__day day">1</div>
                            <div className="calendar__day day">2</div>
                            <div className="calendar__day day">3</div>
                            <div className="calendar__day day">4</div>
                        </div>
                    </div>
                </main>

            </div>




        </div>
    )
}
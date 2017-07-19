import React from 'react';

class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <header className="calendar-header">
          <div className="calendar-title">July 2017</div>
          <div className="calendar-cell-container">
            <div className="calendar-cell">Sunday</div>
            <div className="calendar-cell">Monday</div>
            <div className="calendar-cell">Tuesday</div>
            <div className="calendar-cell">Wednesday</div>
            <div className="calendar-cell">Thursday</div>
            <div className="calendar-cell">Friday</div>
            <div className="calendar-cell">Saturday</div>
          </div>
        </header>
        <section className="calendar-body">
          <div className="calendar-cell-container">
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell">1</div>
            <div className="calendar-cell">2</div>
            <div className="calendar-cell">3</div>
            <div className="calendar-cell">4</div>
            <div className="calendar-cell">5</div>
            <div className="calendar-cell">6</div>
            <div className="calendar-cell">7</div>
            <div className="calendar-cell">8</div>
            <div className="calendar-cell">9</div>
            <div className="calendar-cell">10</div>
            <div className="calendar-cell">11</div>
            <div className="calendar-cell">12</div>
            <div className="calendar-cell">13</div>
            <div className="calendar-cell">14</div>
            <div className="calendar-cell">15</div>
            <div className="calendar-cell">16</div>
            <div className="calendar-cell">17</div>
            <div className="calendar-cell">18</div>
            <div className="calendar-cell calendar-cell-today">19</div>
            <div className="calendar-cell">20</div>
            <div className="calendar-cell">21</div>
            <div className="calendar-cell">22</div>
            <div className="calendar-cell">23</div>
            <div className="calendar-cell">24</div>
            <div className="calendar-cell">25</div>
            <div className="calendar-cell">26</div>
            <div className="calendar-cell">27</div>
            <div className="calendar-cell">28</div>
            <div className="calendar-cell">29</div>
            <div className="calendar-cell">30</div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
            <div className="calendar-cell calendar-cell-space"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default Calendar;

import React from 'react';

class Cell extends React.Component {
  render() {
    let classNames = ['calendar-cell'];

    if (this.props.spacer) {
      classNames.push('calendar-cell-space');
    }

    if (this.props.active) {
      classNames.push('calendar-cell-today');
    }

    return (
      <div className={classNames.join(' ')}>
        {this.props.day}
      </div>
    );
  }
}

class Calendar extends React.Component {
  daysOfTheWeek() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  monthsOfTheYear() {
    return ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
  }

  isLeapYear() {
    const date = new Date(this.props.date);
    const year = date.getFullYear();

    return (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0));
  }

  daysInMonth() {
    const date = new Date(this.props.date);
    const month = date.getMonth() + 1;

    switch (month) {
      case 4: // Apr
      case 6: // Jun
      case 9: // Sep
      case 11: // Nov
        return 30;
      case 2: // Feb
        if (this.isLeapYear()) {
          return 29;
        }
        return 28;
      default:
        return 31;
    }
  }

  firstDayOfMonth() {
    const date = new Date(this.props.date);
    const year = date.getFullYear();
    const month = date.getMonth();

    return new Date(year, month, 1);
  }

  lastDayOfMonth() {
    const date = new Date(this.props.date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = this.daysInMonth();

    return new Date(year, month, day);
  }

  renderCells(count) {
    const date = new Date(this.props.date);

    return Array(count).fill(null).map((_val, i) => {
      const day = i + 1;
      const active = day === date.getDate();

      return (<Cell key={i} day={day} active={active} />);
    });
  }

  renderSpacers(count) {
    return Array(count).fill(null).map((_val, i) => {
      return (<Cell key={i} spacer />);
    });
  }

  renderTitle() {
    const date = new Date(this.props.date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthStr = this.monthsOfTheYear()[month];

    return `${monthStr} ${year}`;
  }

  renderHeaderCells() {
    return this.daysOfTheWeek().map((day, i) => {
      return (<Cell key={i} day={day} />);
    });
  }

  renderBodyCells() {
    const leftPad = this.firstDayOfMonth().getDay();
    const rightPad = (6 - this.lastDayOfMonth().getDay());

    return [
      this.renderSpacers(leftPad),
      this.renderCells(this.daysInMonth()),
      this.renderSpacers(rightPad)
    ];
  }

  render() {
    return (
      <div className="calendar">
        <header className="calendar-header">
          <div className="calendar-title">
            {this.renderTitle()}
          </div>
          <div className="calendar-cell-container">
            {this.renderHeaderCells()}
          </div>
        </header>
        <section className="calendar-body">
          <div className="calendar-cell-container">
            {this.renderBodyCells()}
          </div>
        </section>
      </div>
    );
  }
}

export default Calendar;

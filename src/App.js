import React, { Component } from "react";
import hearts from "./img/Hearts.jpg";
import * as api from "./api";

class App extends Component {
  state = {
    index: 0,
    currentPos: 0,
    currentEventsLength: 0,
    events: null,
  };
  render() {
    const { events, index } = this.state;
    return events === null ? (
      <p>loading</p>
    ) : (
      <div className="wholePage">
        <div className="page">
          <div className="sideBar">
            <img className="hearts" src={hearts} alt="hearts logo" />
            <div className="navLinks">
              <p>some</p>
              <p>pish</p>
              <p>dunno</p>
              <p>what</p>
            </div>
          </div>
          <div className="entries" onScroll={this.handleScroll}>
            <div className="date">
              <p className="month">{events[index].month}</p>
              {+events[index].day < 10 ? (
                <p className="day">{"0" + events[index].day}</p>
              ) : (
                <p className="day">{this.state.events[this.state.index].day}</p>
              )}
            </div>
            {events.map((singleDay) => {
              return (
                <div
                  className="listItem"
                  key={singleDay.link}
                  value={singleDay}
                >
                  {/* <div className="date">
                   
                  </div> */}
                  <div class="video-container">
                    <div className="overText">
                      {/* <div className="date">
                        <p className="month">{data[index].month}</p>
                        {+data[index].day < 10 ? (
                          <p className="day">{"0" + data[index].day}</p>
                        ) : (
                          <p className="day">
                            {this.state.data[this.state.index].day}
                          </p>
                        )}
                      </div> */}
                      {/* <div className="date">
                        <p className="month">{singleDay.month}</p>
                        {+singleDay.day < 10 ? (
                          <p className="day">{"0" + singleDay.day}</p>
                        ) : (
                          <p className="day">{singleDay.day}</p>
                        )}
                      </div> */}
                      <div className="eventText">
                        <p>{singleDay.event1}</p>
                      </div>
                    </div>
                    <div class="video-foreground">
                      <iframe
                        title={singleDay.event1}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={singleDay.link1}
                      />
                    </div>
                  </div>
                  {/* <p className="event">{singleDay.event}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        <footer>some footer chat</footer>
      </div>
    );
  }

  componentDidMount() {
    api.fetchEvent(this.state.currentEventsLength).then((events) => {
      this.setState({ events, currentEventsLength: 5 });
    });
  }
  handleScroll = (e) => {
    let element = e.target;

    let scrollTop = element.scrollTop;
    // console.log(this.state.currentPos, "current position");

    // console.log(
    //   scrollTop - this.state.currentPos,
    //   "scrollTop minus currentpos"
    // );

    if (scrollTop - this.state.currentPos >= 613) {
      this.setState((currentState) => {
        return {
          currentPos: (currentState.currentPos += 613),
          index: (currentState.index += 1),
        };
      });
    }

    if (scrollTop - this.state.currentPos <= 0 && this.state.index !== 0) {
      this.setState((currentState) => {
        return {
          currentPos: (currentState.currentPos -= 613),
          index: (currentState.index -= 1),
        };
      });
    }
  };
  componentDidUpdate(prevState, prevProps) {
    if (
      prevState.index !== this.state.index &&
      this.state.currentEventsLength - this.state.index <= 2
    ) {
      api.fetchEvent(this.state.currentEventsLength).then((newEvents) => {
        this.setState((currentState) => {
          const newEventsArray = [...currentState.events];
          newEvents.forEach((event) => newEventsArray.push(event));
          return {
            events: newEventsArray,
            currentEventsLength: (currentState.currentEventsLength += 5),
          };
        });
      });
    }
  }
}

export default App;

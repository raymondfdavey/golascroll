import React, { Component } from "react";
import hearts from "./img/Hearts.jpg";

class App extends Component {
  state = {
    index: 0,
    currentPos: 0,
    data: [
      {
        month: "January",
        day: 1,
        event: ' 1968 "Sukerman", aka Davor Suker, is born in Osijek',
        link: "https://www.youtube.com/embed/BMxZFOehN_0",
        event2: "1972 Lilian Thuram is born",
        link2: "https://www.youtube.com/embed/e_Neb-TI_kg",
        event3: "1905 Independiente are founded",
        link3: "https://www.youtube.com/embed/-PW-3b7aS0w",
      },
      {
        month: "January",

        day: 2,
        event: "1971 66 Rangers fans die in the Ibrox stadium disaster",
        link: "https://www.youtube.com/embed/GOdzNQ0VzUw",
        event2: "1987 Loic Remy",
        link2: "https://www.youtube.com/embed/druvmWa1454",
      },
      {
        month: "January",
        day: 3,
        event: "1988 Northern Ireland defender Jonny Evans is born",
        link: "https://www.youtube.com/embed/q35nPNOsP3Q",
      },
      {
        month: "January",
        day: 4,
        event: "1990 Germany midfielder Toni Kroos is born",
        link: "https://www.youtube.com/embed/uEpi1nfNI0Y&t=18s",
        event2: "2005 Pedro Mendes disalllowed goal v united",
        link2: "https://www.youtube.com/embed/xowj6Qx78so",
      },
      {
        month: "February",
        day: 5,
        event: "2000 The Maracana hosts the new World Club Championships",
        link: "https://www.youtube.com/embed/ZzkeCbQsiMs",
      },
      // {
      //   month: "January",
      //   day: 6,
      //   event: "1939 Revolutionary coach Valery Lobanovsky is born in Ukraine",
      //   link: "https://www.youtube.com/embed/t7OuAerP_OU",
      //   event2: "1989 Andy Carroll",
      //   link2: "https://www.youtube.com/embed/1qGNJnNFwW0",
      //   event3: "1953 Manfred Kaltz is born hamburg legend",
      //   link3: "https://www.youtube.com/embed/NlZfYfPR29Y",
      // },
      // {
      //   month: "January",
      //   day: 7,
      //   event: "1970 Kaizer Chiefs are formed in South Africa",
      //   link: "https://www.youtube.com/embed/ILpTlcf6Nw8",
      //   event2: "1991 Eden Hazard",
      //   link2: "https://www.youtube.com/embed/GWhVkFTe_BY",
      //   event3: "1993 jan oblak",
      //   link3: "https://www.youtube.com/embed/gdmeb-xYU7o",
      // },
      // {
      //   month: "January",
      //   day: 8,
      //   event: "2010 Togo tradegy as the national team is attacked in Angola",
      //   link: "https://www.youtube.com/embed/gEtIIrTdzS8",
      //   event2: "1986 David Silva",
      //   link2: "https://www.youtube.com/embed/Ts2tBNYDP58",
      // },
      // {
      //   month: "January",
      //   day: 9,
      //   event: "1900 S.S. Lazio are formed in Rome",
      //   link: "https://www.youtube.com/embed/XTjIjUtrsqY&t=83s",
      //   event2: "2009 Benitez gets his ''facts'' straight",
      //   link2: "https://www.youtube.com/embed/fOaZYhTd2BU",
      //   event3: "1978 Gattuso",
      //   link3: "https://www.youtube.com/embed/LkePlcYYXrI",
      //   event4: "2012 Henry scores on his return to Arsenal",
      //   undefined: "https://www.youtube.com/embed/vAPygYVubug",
      // },
      // {
      //   month: "January",
      //   day: 10,
      //   event: "1974 Steve Marlet",
      //   link: "https://www.youtube.com/embed/DVprZ2lOcHQ",
      // },
      // {
      //   month: "January",
      //   day: 11,
      //   event: "2007 David Beckham goes stateside with the LA Galaxy",
      //   link: "https://www.youtube.com/embed/28FTfigLv0A",
      //   event2: "1941 GErson is born in Niteroi",
      //   link2: "https://www.youtube.com/embed/PdvvJVlpRfU",
      //   event3: "1996 Leroy Sané",
      //   link3: "https://www.youtube.com/embed/qSZsziBa8uU",
      //   event4: "1978 Emile Heskey",
      //   undefined: "https://www.youtube.com/embed/HYmAxqG59l0",
      // },
      // {
      //   month: "January",
      //   day: 12,
      //   event: "2011 Galatasaray wave goodbye to the Ali Sami Yen stadium",
      //   link: "https://www.youtube.com/embed/FGEukaGw5Gw",
      //   event2: "1969 Robert Prosinekki is born",
      //   link2: "https://www.youtube.com/embed/QSIVcMmTOeA",
      //   event3: '1965 "Drunk ref" Segei Shmolik is born in Belarus',
      //   link3: "https://www.youtube.com/embed/eVkFVgqhYlk",
      // },
      // {
      //   month: "January",
      //   day: 13,
      //   event: "1976  Defender Mario Yepes is born in Cali, Colombia",
      //   link: "https://www.youtube.com/embed/K5h9rMPxj1I",
      // },
      // {
      //   month: "January",
      //   day: 14,
      //   event: "2000 Corinthians claim the World Club Championship",
      //   link: "https://www.youtube.com/embed/7620RwfcGrA",
      //   event2: "1986 Yohan Cabaye",
      //   link2: "https://www.youtube.com/embed/hFlLrxDcvIY",
      //   event3: "1971 Antonios Nikopolidas is born in athens",
      //   link3: "https://www.youtube.com/embed/tUEc17XL3JQ",
      // },
      // {
      //   month: "January",
      //   day: 15,
      //   event: "1981 El Hadji Diouf is born",
      //   link: "https://www.youtube.com/embed/RG1oFkrjPd4",
      // },
      // {
      //   month: "January",
      //   day: 16,
      //   event: "1935 Udo Lattek is born in Poland",
      //   link: "https://www.youtube.com/embed/0LZYSJVeqrk",
      //   event2: "2002 Zola back heel goal",
      //   link2: "https://www.youtube.com/embed/1Z4DAaQe7Q4",
      // },
      // {
      //   month: "January",
      //   day: 17,
      //   event: "1973 Cuauhtémoc Blanco is born in Mexico",
      //   link: "https://www.youtube.com/embed/Fk5zM3yCgWc",
      // },
      // {
      //   month: "January",
      //   day: 18,
      //   event: '1971 Josep "Pep" Guardiola is born in Spain',
      //   link: "https://www.youtube.com/embed/CKiSjD386Mw",
      //   event2: "1967 Ivan Zamorano is born in Chile",
      //   link2: "https://www.youtube.com/embed/t2PqcboPdpg",
      // },
      // {
      //   month: "January",
      //   day: 19,
      //   event: "1922 Miguel Muñoz is born in Madrid",
      //   link: "https://www.youtube.com/embed/dT-pN_zf1nc",
      //   event2: "1974 Jamie Moreno",
      //   link2: "https://www.youtube.com/embed/7b24w2aELQo",
      //   event3: "2008 Landon Donova becomes US top scorer",
      //   link3: "https://www.youtube.com/embed/wt_3xXSaRwA",
      // },
      // {
      //   month: "January",
      //   day: 20,
      //   event: "1983 Garrincha dies in Rio de Janeiro",
      //   link: "https://www.youtube.com/embed/JeYyx87NWrU",
      //   event2: "1981 Owen HArgreqves",
      //   link2: "https://www.youtube.com/embed/sUGV02YfnHw",
      // },
      // {
      //   month: "January",
      //   day: 21,
      //   event: "1975 Nicky Butt is born in Manchetser",
      //   link: "https://www.youtube.com/embed/HiCVjpHVvgk",
      //   event2: "1989 Henrik Mkhitaryan",
      //   link2: "https://www.youtube.com/embed/l-LbOqQ1Yj8",
      //   event3: "1996 Marco Asensio",
      //   link3: "https://www.youtube.com/embed/CottE6EL8-c",
      // },
      // {
      //   month: "January",
      //   day: 22,
      //   event: "1977 Hidetoshi Nakata",
      //   link: "https://www.youtube.com/embed/Q1mLYnq44qc",
      //   event2: "2018 George Weah is elected President of Liberia",
      //   event3: "2017 Rod Stewart rocks the Scottish Cup draw",
      //   link3: "https://www.youtube.com/embed/_DvSxDqIQng",
      // },
      // {
      //   month: "January",
      //   day: 23,
      //   event: "1919 Bob Paisley is born ",
      //   link: "https://www.youtube.com/embed/xudo1NLICRw",
      //   event2: "1984 Arhen Robben is born",
      //   event3: "2013 Hazard kicks ball boy",
      //   link3: "https://www.youtube.com/embed/lCacZz-OQzU",
      // },
      // {
      //   month: "January",
      //   day: 24,
      //   event: "1987 Luis Suarez is born",
      //   link: "https://www.youtube.com/embed/1dLiLDV6dPY",
      //   event2: "2004 Leonidas da Silva dies",
      // },
      // {
      //   month: "January",
      //   day: 25,
      //   event: "1942 Eusébio da Silva is born in Mozambique ",
      //   link: "https://www.youtube.com/embed/bJtBmcI8Gbw",
      //   event2: "1995 Eric Cantona kick",
      //   event3: " 1980 Xavi is born",
      //   link3: "https://www.youtube.com/embed/l9KxpxQl6GU",
      //   event4: "1890 Sevilla are formed",
      //   undefined: "https://www.youtube.com/embed/mutVyvOdvLI",
      // },
      // {
      //   month: "January",
      //   day: 26,
      //   event: "1963 José Mourinho is born",
      //   link: "https://www.youtube.com/embed/lLnJrvho9Go",
      //   event3: "1987 Giovinco",
      //   link3: "https://www.youtube.com/embed/kMM4A2dGxr0",
      // },
      // {
      //   month: "January",
      //   day: 27,
      //   event: "1965 Former Jamaica striker Robbie Earle is born",
      //   link: "https://www.youtube.com/embed/lYjXOrcl2MA",
      //   event2: "1994 Bermuda 4-2 Grenada weirdest game ever",
      //   link2: "https://www.youtube.com/embed/4QVXQD6MySw",
      // },
      // {
      //   month: "January",
      //   day: 28,
      //   event: "1978 Gianluigi Buffon is born in Carrara, Italy",
      //   link: "https://www.youtube.com/embed/UVay8RI7BYU",
      // },
      // {
      //   month: "January",
      //   day: 29,
      //   event: '1966 Romario "The genius of the penalty area" is born',
      //   link: "https://www.youtube.com/embed/v-PS_wM1Leg",
      //   event2:
      //     "2011 Geographiclly the right result? Japan beat Australia to Asian Cup",
      //   link2: "https://www.youtube.com/embed/aQnbGeU-JBI",
      // },
      // {
      //   month: "January",
      //   day: 30,
      //   event: "1981 Dimitar Berbatov is born",
      //   link: "https://www.youtube.com/embed/pyst_cuZf_o",
      //   event2: "1981 Peter Crouch",
      //   link2: "https://www.youtube.com/embed/JTPX4IpdiIM",
      // },
      // {
      //   month: "January",
      //   day: 31,
      //   event: "2015 Australia win the Asian Cup for the first time",
      //   link: "https://www.youtube.com/embed/ItDQ6u-c_zs",
      // },
    ],
  };
  render() {
    const { data, index } = this.state;
    return (
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
              <p className="month">{data[index].month}</p>
              {+data[index].day < 10 ? (
                <p className="day">{"0" + data[index].day}</p>
              ) : (
                <p className="day">{this.state.data[this.state.index].day}</p>
              )}
            </div>
            {data.map((singleDay) => {
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
                        <p>{singleDay.event}</p>
                      </div>
                    </div>
                    <div class="video-foreground">
                      <iframe
                        title={singleDay.event}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={singleDay.link}
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
}

export default App;

import React  from "react";
import "./pokedex.css";
import Card from '../Card/Card'
import Squirtle from '../../assets/squirtle.png'

export default function Pokedex() {

    // const [name, setName] = useState('')

    


  return (
    <div className="pokedex">
      <div className="left">
        <div className="left-main">
          <div className="left-top-wrapper">
            <div className="left-top">
              <div className="blueBtn btn huge" />
              <div className="redBtn btn medium" />
              <div className="jauneBtn btn medium" />
              <div className="vertBtn btn medium" />
            </div>
          </div>

          <div className="left-screen">
            <div className="screen-border-grey">
              <div className="screen-top-btn">
                <div className="redBtn btn small" />
                <div className="redBtn btn small" />
              </div>
              <div className="screen-black"><Card photo={<img className="poke" src={Squirtle} alt="squirtle"/>} /></div>
              <div className="screen-bottom-btn">
                <div className="redBtn btn medium" />
                <div className="burger">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="left-commands">
            <div className="noirBtn btn large" />
            <div className="commands-central">
              <div className="longBtn redBtn" />
              <div className="longBtn blueBtn" />
              <div className="greenScreen medlargeScreen">
                <Card number={<span className="number">#7</span>} />
              </div>
            </div>
            <div className="croix" />
          </div>
        </div>

        <div className="central-cylinder">
          <div className="cynlinder-central-block" />
        </div>
      </div>

      <div className="right-wrapper">
        <div className="right">
          <div className="greenScreen largeScreen"><Card name={<span className="name">Squirtle</span>} /></div>
          <div className="gridBtn blueGrid">
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
            <div className="gridCell" />
          </div>
          <div className="longBtnRight">
            <div className="longBtn noirBtn" />
            <div className="longBtn noirBtn" />
          </div>
          <div className="gridBtn, whiteGrid">
            <div className="gridCell" />
            <div className="gridCell" />
          </div>
          <div className="jauneBtn btn large" />
          <div className="noirScreen mediumScreen" />
          <div className="noirScreen mediumScreen" />
        </div>
      </div>
    </div>
  );
}

// CSS POR Wikode medias

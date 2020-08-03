import React from "react";
import "./pokedex.css";

export default function Pokedex(props) {
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
              <div className="screen-green">{props.photo}</div>

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
              <div className="greenScreen medlargeScreen number">
                {"#" + props.number}
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
          <div className="greenScreen largeScreen name">
            <div className="textContainer">
              <div className="statsName">{props.name}</div>
              <div className="statsHp">
                {" "}
                {props.hp > 0 ? <>HP:{props.hp}</> : <></>}
              </div>
              <div className="statsAttack">
                {props.attack > 0 ? <>Attack:{props.attack}</> : <> </>}
              </div>
              <div className="statsDefense">
                {props.defense > 0 ? <>Defense:{props.defense}</> : <></>}
              </div>
            </div>
          </div>
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

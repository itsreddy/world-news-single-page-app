import "./Header.css";
import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import LinkButton from "../LinkButton/LinkButton";

function Header() {
  return (
    <span onClick={() => window.scroll(0, 0)} className='header'>
      <div className='buttons'>
        <div className='myButton'>
          <LinkButton to='/'>
            <HomeOutlinedIcon />
          </LinkButton>
        </div>
        <div className='myButton'>
          <LinkButton to='/world'>
            <MapOutlinedIcon />
          </LinkButton>
        </div>
        <div className='myButton'>
          <LinkButton to='/news'>
            <ListAltOutlinedIcon />
          </LinkButton>
        </div>
      </div>
    </span>
  );
}

export default Header;

import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const { image, name, salary } = props.player;
    const handleSelectButton = props.handleSelectButton;
    return (
        <div className="player-card">
            <div className="player">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>${salary}</p>
                <button onClick={() => handleSelectButton(props.player)} className="select-button"><FontAwesomeIcon icon={faCheckCircle} className="icon" />Select Player</button>
            </div>
        </div>
    );
};

export default Players;
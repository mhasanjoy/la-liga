import React from 'react';

const PlayerSelect = (props) => {
    const players = props.selectedPlayers;
    const totalSalary = players.reduce((total, player) => total + player.salary, 0);
    return (
        <div>
            <h3>Selected Players: {players.length}</h3>
            <h3>Players:</h3>
            {
                players.map(player => <p>{player.name} - ${player.salary}</p>)
            }
            <h4>Total Salary: ${totalSalary}</h4>
        </div>
    );
};

export default PlayerSelect;
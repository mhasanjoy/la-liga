import { useEffect, useState } from 'react';
import './App.css';
import Players from './components/Players/Players';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import playersList from './fakeData/players.json';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersList);
  }, []);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleSelectButton = (player) => {
    const repeatedPlayer = selectedPlayers.find(selectedPlayer => selectedPlayer.id === player.id);
    if (!repeatedPlayer) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="players-profile">
        <h1 style={{ marginBottom: "50px" }}>Players Profile:</h1>
        <div className="players-card">
          {
            players.map(player => <Players key={player.id} handleSelectButton={handleSelectButton} player={player}></Players>)
          }
        </div>
      </div>
      <div className="select-card">
        <PlayerSelect selectedPlayers={selectedPlayers}></PlayerSelect>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import TeamSelector from './components/TeamSelector';
import './style.css';

function App() {
    const [team, setTeam] = useState('Liverpool');

    const handleTeamChange = (newTeam) => {
        setTeam(newTeam);
    };

    return (
        <div>
            <Navbar team={team} />
            <TeamSelector onTeamSelect={handleTeamChange} currentTeam={team} />
            <Visualizer team={team} />
        </div>
    );
}

export default App;


import React from 'react';

const TeamSelector = ({ onTeamSelect, currentTeam }) => {
    const teams = ['Liverpool', 'Chelsea', 'Manchester United', 'Arsenal']; // Full team names

    const teamDisplayNames = {
        'Liverpool': 'Liverpool',
        'Chelsea': 'Chelsea',
        'Manchester United': 'Man Utd',
        'Arsenal': 'Arsenal',
        // Add more teams as needed
    };

    return (
        <div className="team-selector">
            {teams.map(team => (
                <button
                    key={team}
                    onClick={() => onTeamSelect(team)}
                    className={`team-button ${team === currentTeam ? 'active' : ''}`}
                >
                    {teamDisplayNames[team]}
                </button>
            ))}
        </div>
    );
};

export default TeamSelector;


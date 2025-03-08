import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import { fetchTeams } from "./dataLoader";

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    getTeams();
  }, []);

  return (
    <div className="team-list">
      {teams.length > 0 ? (
        teams.map((team, index) => <TeamCard key={index} team={team} />)
      ) : (
        <p>Loading teams...</p>
      )}
    </div>
  );
};

export default TeamList;

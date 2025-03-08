export const fetchTeams = async () => {
    const response = await fetch('/teams.json'); // Fetches from public folder
    const data = await response.json();
    return data.teams;
};

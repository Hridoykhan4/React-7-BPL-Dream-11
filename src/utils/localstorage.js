const getStoredPlayers = () => {
    const storedPlayers = localStorage.getItem('player');
    return storedPlayers ? JSON.parse(storedPlayers) : []
}

const saveToLS = (player) => {
    localStorage.setItem('player', JSON.stringify(player))
}

const addToLS = (id) => {
    const player = getStoredPlayers();
    player.push(id);
    saveToLS(player)
}

const removeFromLS = (id) => {
    const players = getStoredPlayers();
    const remaining = players.filter((player) => player !== id);
    saveToLS(remaining)
}

export {addToLS, getStoredPlayers, removeFromLS}
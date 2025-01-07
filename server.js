const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mock server data
const serverInfo = {
    name: "Battlefield 4 - Server 1",
    players: 23,
    maxPlayers: 64,
    map: "Operation Locker"
};

// API route to get server info
app.get('/api/server-info', (req, res) => {
    res.json({
      serverName: 'Battlefield 4 - Server 2',
      players: '42/64',
      maxPlayers: 64,
      map: 'Siege of Shanghai',
      gameMode: 'Conquest',
      ping: 32,
    });
  });
  

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const db = require('./connection');
const { Player, User } = require('../models');

db.once('open', async () => {
    await Player.deleteMany();

    const players = await Player.insertMany([
        {
            firstName: 'Admin',
            lastName: 'Admin',
            birthday: '04/06/2022',
            gender: 'M',
            singleRank: 0,
            doubleRank: 0,
            mixedRank: 0,
        },
        {
            firstName: 'CJ',
            lastName: 'Sanders',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1312,
            doubleRank: 1313,
            mixedRank: 1289,
        },
        {
            firstName: 'Nick',
            lastName: 'Blanchard',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1212,
            doubleRank: 1318,
            mixedRank: 0,
        },
        {
            firstName: 'Chantel',
            lastName: 'Anderson',
            birthday: '02/04/1986',
            gender: 'F',
            singleRank: 1212,
            doubleRank: 1218,
            mixedRank: 1287,
        },
        {
            firstName: 'Khyathi',
            lastName: 'Velpuri',
            birthday: '02/04/1986',
            gender: 'F',
            singleRank: 1012,
            doubleRank: 1113,
            mixedRank: 1389,
        },
    ]);

    console.log('Players Seeded')

    await User.deleteMany();

    const users = await User.insertMany([
        {
            firstName: 'Admin',
            lastName: 'Admin',
            username: 'admin',
            email: 'a@a.com',
            playerId: players[0]._id,
            role: 'amdin',
            password: 'pass',
            club: 'None',
            location: 'None',
        },
        {
            firstName: 'CJ',
            lastName: 'Sanders',
            username: 'SQUEE',
            email: 'c@c.com',
            playerId: players[1]._id,
            role: 'player',
            password: 'pass',
            club: 'DAC',
            location: 'Denver',
        },
    ]);

    console.log('Users Seeded')

    process.exit();
});
const db = require('./connection');
const { Player, User, Tournament, Match, PlayerHistory } = require('../models');

db.once('open', async () => {
    await Player.deleteMany();

    const players = await Player.insertMany([
        {
            // 00
            firstName: 'Admin',
            lastName: 'Admin',
            birthday: '04/06/2022',
            gender: 'M',
            singleRank: 0,
            doubleRank: 0,
            mixedRank: 0,
            avatar: '',
        },
        {
            // 01
            firstName: 'CJ',
            lastName: 'Sanders',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1312,
            doubleRank: 1313,
            mixedRank: 1289,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/186770_large.jpg',
        },
        {
            // 02
            firstName: 'Luis',
            lastName: 'Martinez',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1212,
            doubleRank: 1318,
            mixedRank: 1205,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/102032_large.jpg',
        },
        {
            // 03
            firstName: 'Dominic',
            lastName: 'Garcia',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 1100,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/317309_large.jpg',
        },
        {
            // 04
            firstName: 'Vikram',
            lastName: 'Pathrojuthri',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/279312_large.jpg',
        },
        {
            // 05
            firstName: 'David',
            lastName: 'Stone',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 1300,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/67020_large.jpg',
        },
        {
            // 06
            firstName: 'Lee',
            lastName: 'Beckwith',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/18373_large.gif',
        },
        {
            // 07
            firstName: 'Jorge',
            lastName: 'Cuellar',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/180050_large.jpg',
        },
        {
            // 08
            firstName: 'Ken',
            lastName: 'Huey',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/27024_large.jpg',
        },
        {
            // 09
            firstName: 'Michael',
            lastName: 'Nigro',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/275445_large.jpg',
        },
        {
            // 10
            firstName: 'Luis',
            lastName: 'Torres',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/262238_large.jpg',
        },
        {
            // 11
            firstName: 'Chantel',
            lastName: 'Anderson',
            birthday: '02/04/1986',
            gender: 'F',
            singleRank: 1212,
            doubleRank: 1218,
            mixedRank: 1287,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/37675_large.jpg',
        },
        {
            // 12
            firstName: 'Khyathi',
            lastName: 'Velpuri',
            birthday: '02/04/1986',
            gender: 'F',
            singleRank: 1012,
            doubleRank: 1113,
            mixedRank: 1389,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/281354_b0a5_sm.png',
        },
        {
            // 13
            firstName: 'Derek',
            lastName: 'Schaeffer',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1112,
            doubleRank: 1183,
            mixedRank: 0,
            avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fimg%2Fracquetball-silhouette-23.jpg&f=1&nofb=1',
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

    await Tournament.deleteMany();

    const tournaments = await Tournament.insertMany([
        {
            // 00
            name: '2020 Apex Open',
            location: 'Arvada',
            club: 'Apex',
            startDate: '02/07/20',
            endDate: '02/09/20',
            weightIndex: 20,
            link: 'https://www.r2sports.com/website/event-website.asp?TID=31675',
            status: 'completed',
        },
        {
            // 01
            name: '2022 State Singles',
            location: 'Denver',
            club: 'Denver Athletic Club',
            startDate: '05/13/22',
            endDate: '05/15/22',
            weightIndex: 30,
            link: 'none',
            status: 'future',
        },
        {
            // 02
            name: '2022 Rocky Mountain State Games',
            location: 'Colorado Springs',
            club: 'Denver Athletic Club',
            startDate: '07/22/22',
            endDate: '07/24/22',
            weightIndex: 20,
            link: 'https://www.r2sports.com/tourney/home.asp?TID=39071',
            status: 'future',
        },
    ]);

    console.log('Tournaments Seeded')

    await Match.deleteMany();

    const matches = await Match.insertMany([
        {
            // 00
            matchId: 'MO9',
            winningPlayerId: players[3]._id,
            losingPlayerId: players[4]._id,
            pointDifferential: 3,
            score: '15-12, 14-15, 11-10',
            tieBreaker: true,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 01
            matchId: 'MO10',
            winningPlayerId: players[9]._id,
            losingPlayerId: players[10]._id,
            pointDifferential: 14,
            score: '15-9, 15-7',
            tieBreaker: false,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 02
            matchId: 'MO8',
            winningPlayerId: players[2]._id,
            losingPlayerId: players[3]._id,
            pointDifferential: 15,
            score: '13-15, 15-5, 11-4',
            tieBreaker: true,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 03
            matchId: 'MO5',
            winningPlayerId: players[6]._id,
            losingPlayerId: players[5]._id,
            pointDifferential: 2,
            score: '15-12, 8-15, 11-9',
            tieBreaker: true,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 04
            matchId: 'MO6',
            winningPlayerId: players[8]._id,
            losingPlayerId: players[7]._id,
            pointDifferential: 25,
            score: '15-5, 15-0',
            tieBreaker: false,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 05
            matchId: 'MO7',
            winningPlayerId: players[9]._id,
            losingPlayerId: players[1]._id,
            pointDifferential: 12,
            score: '15-7, 15-11',
            tieBreaker: false,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 06
            matchId: 'MO4',
            winningPlayerId: players[2]._id,
            losingPlayerId: players[6]._id,
            pointDifferential: 11,
            score: '15-9, 15-10',
            tieBreaker: false,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 07
            matchId: 'MO3',
            winningPlayerId: players[8]._id,
            losingPlayerId: players[9]._id,
            pointDifferential: 8,
            score: '15-9, 9-15, 11-3',
            tieBreaker: true,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 08
            matchId: 'MO1',
            winningPlayerId: players[2]._id,
            losingPlayerId: players[8]._id,
            pointDifferential: 6,
            score: '15-12, 15-12',
            tieBreaker: false,
            division: 'Open',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 09
            matchId: 'cMO5',
            winningPlayerId: players[1]._id,
            losingPlayerId: players[10]._id,
            pointDifferential: 13,
            score: '15-14, 15-3',
            tieBreaker: false,
            division: 'Open Consolation',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 10
            matchId: 'cMO4',
            winningPlayerId: players[4]._id,
            losingPlayerId: players[5]._id,
            pointDifferential: 10,
            score: 'WBF - No Show',
            tieBreaker: false,
            division: 'Open Consolation',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 11
            matchId: 'cMO3',
            winningPlayerId: players[1]._id,
            losingPlayerId: players[7]._id,
            pointDifferential: 10,
            score: 'WBF - No Show',
            tieBreaker: false,
            division: 'Open Consolation',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
        {
            // 12
            matchId: 'cMO1',
            winningPlayerId: players[1]._id,
            losingPlayerId: players[4]._id,
            pointDifferential: 8,
            score: '2-15, 15-11, 11-10',
            tieBreaker: true,
            division: 'Open Consolation',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'singles',
        },
    ]);

    console.log('Matches Seeded')
    
    await PlayerHistory.deleteMany();

    const playerHistory = await PlayerHistory.insertMany([
        {
            // CJ SANDERS
            playerId: players[1]._id,
            matchesWon: [
                {
                    matches: [matches[9]._id, matches[11]._id, matches[12]._id]
                }
            ],
            matchesLost: [
                {
                    matches: [matches[5]._id,]
                }
            ],
        },
    ]);

    console.log('Player Match History Seeded')

    process.exit();
});
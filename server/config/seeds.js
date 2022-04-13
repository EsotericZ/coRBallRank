const db = require('./connection');
const { Club, Location, Player, User, Tournament, Match } = require('../models');

db.once('open', async () => {
    await Location.deleteMany();

    const locations = await Location.insertMany([
        {
            // 00
            city: 'Arvada, CO',
        },
        {
            // 01
            city: 'Colorado Springs, CO',
        },
        {
            // 02
            city: 'Denver, CO',
        },
        {
            // 03
            city: 'Pueblo, CO',
        },
        {
            // 04
            city: 'Thornton, CO',
        },
        {
            // 05
            city: 'Highlands Ranch, CO',
        },
        {
            // 06
            city: 'Centennial, CO',
        },
    ]);
    
    console.log('Locations Seeded')

    await Club.deleteMany();

    const clubs = await Club.insertMany([
        {
            // 00
            name: 'Apex Rec Center',
            address: '12120 W 64th Ave',
            locationId: locations[0]._id,
        },
        {
            // 01
            name: 'Denver Athletic Club',
            address: '1325 Glenarm Pl',
            locationId: locations[2]._id,
        },
        {
            // 02
            name: 'Highlands Ranch Rec Center',
            address: '8800 S Broadway',
            locationId: locations[5]._id,
        },
        {
            // 03
            name: 'Pueblo Athletic Club',
            address: '58 Glen Royal Dr',
            locationId: locations[3]._id,
        },
        {
            // 04
            name: 'Goodson Rec Center',
            address: '6315 S University Blvd',
            locationId: locations[6]._id,
        },
        {
            // 05
            name: 'Downtown YMCA',
            address: '207 N Nevada Ave',
            locationId: locations[1]._id,
        },
    ])

    console.log('Clubs Seeded')

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
            singleRank: 1284,
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
            singleRank: 1122,
            doubleRank: 1141,
            mixedRank: 1109,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/317309_large.jpg',
        },
        {
            // 04
            firstName: 'Vikram',
            lastName: 'Pathrojuthri',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1002,
            doubleRank: 1013,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/279312_large.jpg',
        },
        {
            // 05
            firstName: 'David',
            lastName: 'Stone',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1212,
            doubleRank: 1183,
            mixedRank: 1301,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/67020_large.jpg',
        },
        {
            // 06
            firstName: 'Lee',
            lastName: 'Beckwith',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1211,
            doubleRank: 1197,
            mixedRank: 1055,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/18373_large.gif',
        },
        {
            // 07
            firstName: 'Jorge',
            lastName: 'Cuellar',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1102,
            doubleRank: 1053,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/180050_large.jpg',
        },
        {
            // 08
            firstName: 'Ken',
            lastName: 'Huey',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1302,
            doubleRank: 1263,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/27024_large.jpg',
        },
        {
            // 09
            firstName: 'Michael',
            lastName: 'Nigro',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1342,
            doubleRank: 1243,
            mixedRank: 0,
            avatar: 'https://www.r2sports.com/tourney/imageGallery/gallery/player/275445_large.jpg',
        },
        {
            // 10
            firstName: 'Luis',
            lastName: 'Torres',
            birthday: '02/04/1986',
            gender: 'M',
            singleRank: 1052,
            doubleRank: 1053,
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
            singleRank: 1022,
            doubleRank: 1043,
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
            email: 'admin@admin.com',
            playerId: players[0]._id,
            role: 'admin',
            password: 'pass',
            club: 'Denver Athletic Club',
            location: 'Denver, CO',
        },
        {
            firstName: 'CJ',
            lastName: 'Sanders',
            username: 'SQUEE',
            email: 'c@c.com',
            playerId: players[1]._id,
            role: 'player',
            password: 'pass',
            club: 'Apex Rec Center',
            location: 'Arvada, CO',
        },
    ]);

    console.log('Users Seeded')

    await Tournament.deleteMany();

    const tournaments = await Tournament.insertMany([
        {
            // 00
            name: '2020 Apex Open',
            clubId: clubs[0]._id,
            locationId: locations[0]._id,
            startDate: '02/07/20',
            endDate: '02/09/20',
            weightIndex: 20,
            link: 'https://www.r2sports.com/website/event-website.asp?TID=31675',
            status: 'completed',
            image: 'https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/16735_large.jpg',
        },
        {
            // 01
            name: '2022 State Singles',
            clubId: clubs[1]._id,
            locationId: locations[2]._id,
            startDate: '05/13/22',
            endDate: '05/15/22',
            weightIndex: 30,
            link: 'none',
            status: 'future',
            image: 'https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/24770_large.jpg',
        },
        {
            // 02
            name: '2022 Rocky Mountain State Games',
            clubId: clubs[5]._id,
            locationId: locations[1]._id,
            startDate: '07/22/22',
            endDate: '07/24/22',
            weightIndex: 20,
            link: 'https://www.r2sports.com/tourney/home.asp?TID=39071',
            status: 'future',
            image: 'https://www.r2sports.com/tourney/imageGallery/gallery/tourneyLogo/rmsg_rokstories_1493_large.jpg',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
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
            matchType: 'Singles',
        },
        {
            // 13
            matchId: 'cMO1a',
            winningPlayerId: players[1]._id,
            losingPlayerId: players[4]._id,
            pointDifferential: 15,
            score: '15-2, 15-13',
            tieBreaker: false,
            division: 'Test Match',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'Singles',
        },
        {
            // 14
            matchId: 'cMO1b',
            winningPlayerId: players[1]._id,
            losingPlayerId: players[4]._id,
            pointDifferential: 20,
            score: '15-5, 15-5',
            tieBreaker: true,
            division: 'Test Match 2',
            status: 'completed',
            tournamentId: tournaments[0]._id,
            matchType: 'Singles',
        },
    ]);

    console.log('Matches Seeded')

    process.exit();
});
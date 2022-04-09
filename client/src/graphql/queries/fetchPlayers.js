import { gql } from '@apollo/client';

const FETCH_PLAYER = gql`
    query Player($playerId: String!) {
        player(id: $playerId) {
            _id
            firstName
            lastName
            gender
            singleRank
            doubleRank
            mixedRank
            birthday
            fullName
        }
    }
`;

const ALL_PLAYERS = gql`
    query allPlayers {
        allPlayers {
            _id
            firstName
            lastName
            gender
            singleRank
            birthday
            fullName
        }
    }
`;

const MALE_SINGLES = gql`
    query fetchPlayers {
        maleSingles {
            _id
            fullName
            firstName
            lastName
            gender
            singleRank
            birthday
        }
    }
`;

const FEMALE_SINGLES = gql`
    query femalePlayers {
        femaleSingles {
            _id
            fullName
            firstName
            lastName
            gender
            singleRank
            birthday
        }
    }
`;

const MALE_DOUBLES = gql`
    query fetchPlayers {
        maleDoubles {
            _id
            fullName
            firstName
            lastName
            gender
            doubleRank
            birthday
        }
    }
`;

const FEMALE_DOUBLES = gql`
    query fetchPlayers {
        femaleDoubles {
            _id
            fullName
            firstName
            lastName
            gender
            doubleRank
            birthday
        }
    }
`;

const MIXED_DOUBLES = gql`
    query fetchPlayers {
        mixedDoubles {
            _id
            fullName
            firstName
            lastName
            gender
            mixedRank
            birthday
        }
    }
`;

export {
    FETCH_PLAYER,
    ALL_PLAYERS,
    MALE_SINGLES,
    FEMALE_SINGLES,
    MALE_DOUBLES,
    FEMALE_DOUBLES,
    MIXED_DOUBLES,
};
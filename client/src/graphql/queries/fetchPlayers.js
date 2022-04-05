import { gql } from '@apollo/client';

const FETCH_SINGLES = gql`
    query fetchPlayers {
        playersSingles {
            _id
            firstName
            lastName
            gender
            singleRank
            birthday
        }
    }
`;

const MALE_SINGLES = gql`
    query fetchPlayers {
        maleSingles {
            _id
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
            firstName
            lastName
            gender
            mixedRank
            birthday
        }
    }
`;

export {
    FETCH_SINGLES,
    MALE_SINGLES,
    FEMALE_SINGLES,
    MALE_DOUBLES,
    FEMALE_DOUBLES,
    MIXED_DOUBLES,
};
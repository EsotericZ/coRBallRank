import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const Nav = () => {
    const isLoggedIn = window.localStorage.getItem("token") ? true : false;

    return isLoggedIn ?
            <LoggedIn />
            :
            <LoggedOut />
};

export default Nav;
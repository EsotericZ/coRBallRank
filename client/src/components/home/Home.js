import HomeNav from '../homenav/HomeNav';
import './home.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const Home = () => {
    return (
        <div>
            <HomeNav />
            <h1>TAKE ME HOME!! to the place!!! i BELONG!!!  </h1>
            {/* <HomeMain />
            <HomeRanking />
            <HomeEvents /> */}
        </div>
    )
};


export default Home;
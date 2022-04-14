import Avatar from '@mui/material/Avatar';

const ProPic = ({data}) => {
    // <Avatar className="avatar" sx={{ width: 52, height: 52 }} src={data.user.playerId.avatar}></Avatar>
    // : 
    // <Avatar className="avatar" sx={{ width: 52, height: 52 }}>RB</Avatar>

    return (
        <Avatar className="avatar" sx={{ width: 52, height: 52 }} src={data.user.playerId.avatar}></Avatar>
    )
}

export default ProPic;
import { Stack, Typography } from '@mui/material'; 
import { Link } from 'react-router-dom';
// import { Logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () =>(
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }}
    >
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
            {/* <img src={Logo} height={45} />  */}
            <Typography color="#5C7AFF" fontSize={{ xs: '1.4rem', sm: '1.8rem', md: '2.2rem'}} fontWeight='bold'> 
                NK Media
            </Typography>
        </Link>

        <SearchBar />
    </Stack>
)

export default Navbar;
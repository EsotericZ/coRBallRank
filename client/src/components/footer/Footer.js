import './footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className='permalinks'>
                <li><a className='permalinks' href='https://github.com/kirtleyadams' target='_blank'>Kirtley Adams</a></li>
                <li><a className='permalinks' href='https://github.com/ooernica' target='_blank'>Erna Lukac</a></li>
                <li><a className='permalinks' href='https://github.com/EsotericZ' target='_blank'>CJ Sanders</a></li>
                <li><a className='permalinks' href='https://github.com/kaiwalsh1' target='_blank'>Kai Walsh</a></li>
                <li></li>
            </ul>
            <div className='copyright'>
                <small>&copy; 2022</small>
            </div>
        </footer>
    )
}

export default Footer;
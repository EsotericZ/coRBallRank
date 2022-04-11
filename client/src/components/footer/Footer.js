import './footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className='permalinks'>
                {/* <li><a href='#'>Home</a></li>
                <li><a href='#About Me'>About Me</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Contact'>Contact</a></li> */}
                <li><a href='https://github.com/kirtleyadams' target='_blank'>Kirtley Adams</a></li>
                <li><a href='https://github.com/ooernica' target='_blank'>Erna Lukac</a></li>
                <li><a href='https://github.com/EsotericZ' target='_blank'>CJ Sanders</a></li>
                <li><a href='https://github.com/kaiwalsh1' target='_blank'>Kai Walsh</a></li>
                <li></li>
            </ul>
            <div className='copyright'>
                <small>&copy; 2022</small>
            </div>
        </footer>
    )
}

export default Footer;
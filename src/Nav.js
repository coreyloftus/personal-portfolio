import './App.css';
const Nav = (props) => {
    return (
        <div className='Nav' id='Nav'>
            <div className='nav-container'>
                <div className='links-box'>
                    <p><a href='#' target='_blank' rel='noreferrer'>Home</a></p>
                    <p><a href='#' target='_blank' rel='noreferrer'>Projects</a></p>
                    <p><a href='#' target='_blank' rel='noreferrer'>About</a></p>
                    <p><a href='#' target='_blank' rel='noreferrer'>Contact</a></p>
                </div>
            </div>
        </div>
    )
}
export default Nav
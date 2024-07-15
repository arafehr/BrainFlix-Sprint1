import Logo from '../../assets/Logo/BrainFlix-logo.svg'
import Avatar from '../../assets/Images/Mohan-muruge.jpg'
import searchIcon from '../../assets/Icons/search.svg'
import UploadIcon from '../../assets/Icons/upload.svg'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu__items">
          <div className="navbar__menu__search">
            <img
              src={searchIcon}
              alt="search"
              className="navbar__menu__search-icon"
            />
            <input type="text" placeholder="search" />
          </div>
          <div className="navbar__menu__button">
            <img
              src={UploadIcon}
              alt="upload-icon"
              className="navbar__menu__upload-icon"
            />
            <button>Upload</button>
          </div>
        </div>
        <div className="navbar__menu__avatar">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

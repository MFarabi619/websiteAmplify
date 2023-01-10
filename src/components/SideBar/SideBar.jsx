import { BsPlus, BsFillLightningFill, BsGearFill, BsPersonCircle, BsPersonLinesFill,BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import {RiContactsLine} from 'react-icons/ri'
import {
    FaFire,
    FaPoo,
    FaInfo,
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
    FaFileDownload,
    FaBriefcase,
    FaInfoCircle,
  } from 'react-icons/fa';
  import {GrDocumentPdf,GrDocumentDownload} from 'react-icons/gr'
  import {FiInfo,FiBriefcase } from 'react-icons/fi'
  import {MdOutlineSimCardDownload} from 'react-icons/md'

import useDarkMode from '../../hooks/useDarkMode';
  
const SideBar = (props) => {
    return (
        <div className="fixed top-0 h-screen w-16 
                        flex flex-col z-40
                        bg-gray-100 text-gray-900  
                        dark:bg-gray-900 dark:text-white 
                        shadow-lg">
        <SideBarIcon className='z-1' icon={<FaFire size="28" />} text={"Home 💡"} callBack={props.pshOnClick}/>
        <Divider />
        <SideBarIcon icon={<FaInfoCircle size="28" />} text={"About Me 💡"} callBack={props.pshOnClick}/>
        <SideBarIcon icon={<FaBriefcase size="24" />} text={"Work Experience 💡"} callBack={props.pshOnClick}/>
        <SideBarIcon icon={<BsFillLightningFill size="26" />} text={"Projects 💡"} callBack={props.pshOnClick}/>
        <SideBarIcon icon={<BsPersonLinesFill size="26" />} text={"Contact Info & Refrences 💡"} callBack={props.pshOnClick}/>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text={"Settings 💡"} callBack={props.pshOnClick} />
        <SideBarIcon icon={<FaFileDownload size="22" />} text={"Resumè 💡"} callBack={props.pshOnClick} />

        {/* <SideBarIcon icon={ThemeIcon} /> */}
        <ThemeIcon theme={props.theme} setTheme={props.setTheme} text={"Theme"}/>
        </div>
    )
}; 

const ThemeIcon = (props) => {
    // const [darkTheme, setDarkTheme] = useDarkMode();
    let darkTheme = props.theme 

    const handleMode = () => props.setTheme(!darkTheme);
    return (
        <div className="sidebar-icon group">
      <span onClick={handleMode}>

        {darkTheme ? (
          <FaSun size='24' />
        ) : (
          <FaMoon size='24' />
        )}
      </span>
    </div>

    );
  };

const SideBarIcon = ({ icon, text = 'tooltip 💡', callBack}) => {
  const handleClick = () => callBack(text);
  return (
    // Group is used to apply CSS to a child element when a parent element changes state.
    //however group does not work in apply so it must be stated here. 

    <div onClick={handleClick} className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr dark:bg-gray-500" />;

export default SideBar 
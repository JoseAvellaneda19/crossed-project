import { useCallback, useState, useEffect, useRef, FC} from "react";

import { useDispatch, useSelector} from 'react-redux'
import '../App.css'
import { RootState } from '../app/store'
import { setLanguage } from "../features/languagesSlice";
import { translate } from "../i18n";
import CustomLink from './Button/CustomLink'
import '../Styles.scss'


export interface HeaderProps {
    fixed?: boolean;
    transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
    const {language} = useSelector((state: RootState) => state.language) ;
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    let headerClass = 'header';

    if(fixed) {
        headerClass += 'header--fixed';
    }
    if(transparent){
        headerClass += 'header--transparent';
    }

    const handleClickOutside = useCallback((e) => {
        if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current){
            setShowDropdown(false)
        }
    }, [showDropdown, setShowDropdown, dropdownEl]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [handleClickOutside])

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        dispatch(setLanguage(value));
        
    }

    return(
       
        <header className={headerClass}>
            <div className="container">
                <div className="header__brand">
                    <p><CustomLink label="App Language" to="/"/></p>
                </div>
                <div className="header__nav">
                    <div className="header__nav_lang">
                        <p className="selected" data-testid="paragraphID" onClick={() => setShowDropdown(true)}>{language}</p>
                        {showDropdown && <ul className='dropdown' ref={dropdownEl}>
                            <li data-testid='lang-selector' onClick={() => chooseLanguageHandler('EN')}>EN</li>
                            <li data-testid='lang-selector' onClick={() => chooseLanguageHandler('DE')}>DE</li>
                            <li data-testid='lang-selector' onClick={() => chooseLanguageHandler('FR')}>FR</li>
                          </ul>
                        }
                    </div>
                    <ul className="header__nav_menu">
                        <li><CustomLink label={translate('home', language).toUpperCase()} to='' /></li>
                        <li><CustomLink label={translate('about', language).toUpperCase()} to='about' /></li>
                        <li><CustomLink label='RESTAURANT' to='restaurant'/></li>
                        <li><CustomLink label='DASHBOARD' to='board'/></li>
                    </ul>
                </div>
            </div>
        </header>
        
    )
}

export default Header;



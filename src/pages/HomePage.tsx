import React, { Fragment, FC } from "react";
import { useSelector } from "react-redux";
import '.././App.css'
import Header from "../components/Header";
import { translate } from "../i18n";
import { languageSelector } from "../features/languagesSlice";

const HomePage: FC = () => {
    const { language } = useSelector(languageSelector);

    return(
        <Fragment>
            <Header fixed transparent  />
            <section className='intro' data-testid='HomePageID'>
                <div className="intro__overlay"></div>
                <div className="intro__body">
                    <h1>React</h1>
                    <p>{translate('introText', language)}</p>
                </div>
            </section>
        </Fragment>
    )
}


export default HomePage
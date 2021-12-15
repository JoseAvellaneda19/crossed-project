import React, { Fragment, FC } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import { translate } from "../i18n";
import { languageSelector } from "../features/languagesSlice";

const About: FC = () => {
    const { language } = useSelector(languageSelector);

    return(
        <Fragment>
            <Header/>
            <section className="about" data-testid='AboutPageID'>
                <div className="container">
                    <h1>{translate('about', language)}</h1>
                    <img src="https://images.unsplash.com/photo-1634750672132-8ac08575f5f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                    <p>{translate('aboutUsText', language)}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
import { FC } from "react";
import { useSelector } from "react-redux";


import { translate } from "../i18n";
import { languageSelector } from "../features/languagesSlice";
import CustomLink from "../components/Button/CustomLink";

const Page404: FC = () => {
    const { language } = useSelector(languageSelector);

    return (
        <div className="page-404" data-testid='Page404ID'>
            <div className="container">
                <h1>404</h1>
                <p>{translate('pageDoesNotExist', language)}</p>
                <p><CustomLink label={translate('returnToHomepage', language).toUpperCase()} to='' /></p>
            </div>
        </div>
    )
}


export default Page404;
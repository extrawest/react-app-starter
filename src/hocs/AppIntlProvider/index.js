import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import messages_en from "../../i18n/en.json";
import dayjs from "dayjs";

const AppIntlProvider = ( {
    children
}) => {
    const currentLanguage = useSelector((state) => state.language.selectedLanguage) ?? "en";

    const formats = {
        number: {
            CURRENCY: {
                style: "currency",
                currency: "USD", // default currency
            },
        },
    };    

    const messages = {
        "en": messages_en,
    };

    useEffect( () => {
        document.documentElement.lang = currentLanguage;

        dayjs.locale( currentLanguage );
    }, [currentLanguage]);

    return (
        <>
            <IntlProvider
                locale={currentLanguage}
                messages={messages[currentLanguage]}
                formats={formats}
            >
                {children}
            </IntlProvider>
        </>    
        
    );
};

export default AppIntlProvider;

import type { NextPage } from "next";

import HeaderSimple from '../../components/header/Header';
import Information from "../../components/information/Information";
import getNavbar from '../../controllers/headerFetcher';

const getInformation: NextPage = () => {

    return (
        <>
            <Information />
        </>
    );
};

export default getInformation;


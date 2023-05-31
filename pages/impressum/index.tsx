import type { NextPage } from "next";

import HeaderSimple from '../../components/header/Header';
import Impressum from "../../components/impressum/Impressum";
import getNavbar from '../../controllers/headerFetcher';


const impressum: NextPage = () => {

    return (
        <Impressum />
    );
};

export default impressum;


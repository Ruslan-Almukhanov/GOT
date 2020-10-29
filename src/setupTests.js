import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const config = {
    "jest": {
        "setupTestFrameworkScriptFile": "jest-extended"
    }
}

export default config;
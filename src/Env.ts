import {getConfig} from "@brojs/cli";
import {ConfigType} from "../urls";

const cliConfig: ConfigType = getConfig() as ConfigType;

export const API_URL = cliConfig['ConnectMe.API_URL'];
export const HEADERS_KEY = 'ConnectMe_627b30c377023f956d76';
export const MEDIA_URL = cliConfig['ConnectMe.MEDIA_URL'];
export const API_CITY = cliConfig['ConnectMe.API_CITY'];
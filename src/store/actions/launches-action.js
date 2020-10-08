import axios from 'axios';
import { GET_LAUNCHES_LIST } from '../constants/action-types';
import { BASE_PATH } from '../constants/http-paths';


const doStoreLaunchesList = (launchesList) => ({
    type: GET_LAUNCHES_LIST,
    launchesList
});

const getAsyncLaunchesList = (startDate, endDate) => {
    return (dispatch) => {
        return axios
            .get(`${BASE_PATH}${startDate}/${endDate}`, {
                params: {
                    limit: -1
                }
            })
            .then((res) => {
                const launchesData = res.data.launches;
                return dispatch(doStoreLaunchesList(launchesData));
            })
            .catch((err) => {
                /**
                 * Didn't do proper error handling coz of time shortage
                 */
                console.log(err, 'Error getting launches');
            });
    };
};

export { getAsyncLaunchesList };

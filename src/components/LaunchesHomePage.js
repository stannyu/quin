import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import GoogleMapReact from 'google-map-react';

import {selectLaunchesList} from "../store/selectors/launches";
import {getAsyncLaunchesList} from "../store/actions/launches-action";
import LoadingComponent from "./LoadingComponent";

import moment from 'moment';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const AnyReactComponent = ({ text }) => <div style={{width: "20px", height: "20px", background: "lightseagreen"}}>{text}</div>;

const LaunchesHomePage = ({getAsyncLaunchesList, launchesList}) => {

    const defaultProps = {
        center: {
            lat: 52.370682,
            lng: 4.897201
        },
        zoom: 14
    };
    const dateFormat = 'YYYY-MM-DD';

    const currentDate = moment().format(dateFormat);
    const threeMonthsFromNow = moment().add(3, 'M').format(dateFormat);

    const { RangePicker } = DatePicker;

    /**
     * set state functions are not defined but would be used when date range changed to
     * set new dates
     */
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(threeMonthsFromNow);

    useEffect(() => {
        if (!launchesList.length) {
            getAsyncLaunchesList(startDate, endDate);
        }
    }, [getAsyncLaunchesList, launchesList.length, startDate, endDate]);




    const LaunchesPageContent = (
        <div>
            <RangePicker
                defaultValue={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
                format={dateFormat}
            />

            <div style={{ height: '50vh', width: '500px', margin: "40px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyDkXt4o-7LYEMyopxt88g6jCnNUfRq6ZIs" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={52.370682}
                        lng={4.897201}
                        text="M1"
                    />
                    <AnyReactComponent
                        lat={52.369063}
                        lng={4.890586}
                        text="M2"
                    />
                </GoogleMapReact>
            </div>

            {launchesList.map(launch => (<p key={launch.id}>{launch.name}</p>))}
        </div>
    );

    return (
        <div>{launchesList.length ? LaunchesPageContent : <LoadingComponent />}</div>
    );
};


const mapStateToProps = (state) => ({
    launchesList: selectLaunchesList(state)
});

const mapDispatchToProps = (dispatch) => ({
    getAsyncLaunchesList: (limit, offset) => dispatch(getAsyncLaunchesList(limit, offset))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchesHomePage);
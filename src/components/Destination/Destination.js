import React from 'react';
import '../Destination/Destination.css';

import 'date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';


const Destination = () => {
    const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChangeFrom = (date) => {
        setSelectedDateFrom(date);
    };
    const handleDateChangeTo = (date) => {
        setSelectedDateTo(date);
    }

    const history = useHistory();
    const handleStartBooking = () => {
        history.push('/hotel')
    }

    return (
        <div className="destination">
            <div className="description">
                <h1>COX'S Bazar</h1>
                <p>The name of Sajek Valley came from the Sajek River that originates from Karnafuli river. The Sajek river works as a border between Bangladesh and India.Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable.</p>
            </div>

            <div className="calender">
                <form action="" className="form">
                    <p>Origin</p>
                    <input type="text" name="origin" id="origin" className="origin" required/><br/>
                    <p>Destination</p>
                    <input type="text" name="destination" id="destination" className="destinationTo" required/>
               
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            className="dataPiker"
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="From"
                            value={selectedDateFrom}
                            onChange={handleDateChangeFrom}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            className="dataPiker"
                            margin="normal"
                            id="date-picker-dialog"
                            label="To"
                            format="MM/dd/yyyy"
                            value={selectedDateTo}
                            onChange={handleDateChangeTo}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                    <input onClick={handleStartBooking} type="submit" value="Start Booking" class="btn btn-primary"/>
                </form>
            </div>
        </div>
    );
};

export default Destination;
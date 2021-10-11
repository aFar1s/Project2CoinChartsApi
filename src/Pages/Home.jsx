import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    return (
        <div>
          <div className="text-container">
            <h2>
                Welcome to CoinCharts
            </h2>
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus luctus erat et ante aliquam, sed condimentum ex dapibus.
                 Nullam dolor enim, iaculis non ligula nec, sodales interdum arcu.
                 Vivamus vel purus interdum, malesuada augue tincidunt, scelerisque ligula.
                 Quisque feugiat commodo scelerisque. Nulla ac enim elit. 
                 Suspendisse lacus lorem, tempor et dictum et, rhoncus eu leo. 
                 Nunc lacinia magna vitae tortor congue feugiat. 
                 Nulla luctus quam ac vestibulum bibendum.</p>
          </div>
          <div className="data-input">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currency}
                        label="Select Currency"
                        onChange={handleChange}
                        >
                        <MenuItem value={'usd'}>USD</MenuItem>
                        <MenuItem value={'sgd'}>SGD</MenuItem>
                    </Select>
                </FormControl>
            </Box>

          </div>
        </div>
    )
}

export default Home

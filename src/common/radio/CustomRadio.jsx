import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CustomRadioButton({
    defaultValue,
    radioButtons,
    handleOnRadioButton
}) {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleOnRadioButton(event.target.value)
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="menu"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
       
        {radioButtons.map((radio, index) => (
            <FormControlLabel
                key={`${index}-${radio.label}`}
                value={radio.value} control={<Radio />}
                label={radio.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
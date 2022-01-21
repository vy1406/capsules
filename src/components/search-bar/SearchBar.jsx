import React, {useState, useEffect} from 'react';
import './style.scss'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { Button, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks({ 
  items,
  onCloseDropDown,
}) {


  const [itemNames, setItemNames] = useState(items);


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemNames(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleOnReset = () => {
    setItemNames([])
    onCloseDropDown([])
  }

  return (
      <Box className="searchBarWrap">
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Users</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={itemNames}
          onChange={handleChange}
          onClose={() => onCloseDropDown(itemNames)}
          input={<OutlinedInput label="Users" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={itemNames.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <Button
            variant="contained"
            className="searchBarButton"
            onClick={handleOnReset}>
            Reset
        </Button>
        </Box>
  );
}
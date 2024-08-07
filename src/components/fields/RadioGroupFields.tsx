import React, { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface RadioGroupFields {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const RadioGroupFields: FC<RadioGroupFields> = ({ handleChange, name }) => {
  return (
    <FormControl>
      <RadioGroup row name={name} onChange={handleChange} defaultValue="Under">
        <FormControlLabel
          value="Under"
          control={<Radio />}
          label="Under"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Over"
          control={<Radio />}
          label="Over"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupFields;

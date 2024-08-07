import React, { FC } from "react";
import { Slider, SliderProps } from "@mui/material";

interface SliderFieldProps {
  onChange: (event: Event, newValue: number | number[]) => void;
}

const SliderField: FC<SliderFieldProps & SliderProps> = ({
  onChange,
  ...props
}) => {
  return <Slider onChange={onChange} {...props} />;
};

export default SliderField;

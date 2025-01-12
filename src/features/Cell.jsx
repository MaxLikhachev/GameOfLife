import React from "react";

import {CellEntity} from "../entities";

export const Cell = ({value, ...props}) => {
  const options = CellEntity({value, ...props})
  return (<rect {...options} className={value ? "active" : "inactive"} />)
}
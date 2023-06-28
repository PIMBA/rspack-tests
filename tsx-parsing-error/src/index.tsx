import React, { PropsWithChildren } from "react";

const GProps = <T extends object>(props: PropsWithChildren<T>) => null;

export const CheckBox = () => {
  return <GProps<any>>child</GProps>;
};

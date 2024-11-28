import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

export interface LayoutType {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  key: string;
}

export const LayoutData: LayoutType[] = [
  {
    label: "Category List",
    key: "/app/category",
    icon: HomeOutlined,
  },

];

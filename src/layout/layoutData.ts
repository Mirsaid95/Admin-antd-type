import React from "react";
import { AlignLeftOutlined, DatabaseOutlined, FileOutlined, ProductOutlined } from '@ant-design/icons';

import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { nanoid } from "nanoid";

export interface LayoutType {
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
  path: string;
  id: string
}

export const LayoutData: LayoutType[] = [
  {
    id: nanoid(),
    label: "Category",
    path: "category",
    icon: AlignLeftOutlined,
  
  },
  {
    id: nanoid(),
    label: "Sub Category",
    path: "/app/sub-category",
    icon: DatabaseOutlined,
  },
  {
    id: nanoid(),
    label: "Brand",
    path: "/app/brand",
    icon: FileOutlined,
  },
  {
    id: nanoid(),
    label: "Product",
    path: "/app/product",
    icon: ProductOutlined
  }
];

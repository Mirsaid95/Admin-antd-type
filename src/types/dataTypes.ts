import { RcFile } from "antd/es/upload";

export interface TableDataType {
    title: string,
    dataIndex: string,
    key: string,
    render?: any,
    width?: string,
    align?: 'left' | 'center' | 'right',
    fontWeight?: string,
    fontSize?: string,
}

export interface CreateDataType {
    title: string,
    image: string,
}

export interface FormDataType {
    submit: (values: any) => void,
    data?: object,
    form?: any,
}

export interface ModalDataType {
    key: string,
    label: string,
    children: React.FC | any,

}

export interface FormData {
    parent?: string | any,
    title: string,
    image?: {file: RcFile},
}

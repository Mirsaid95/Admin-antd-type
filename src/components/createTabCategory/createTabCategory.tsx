import { Tabs } from "antd"
import { CreateCategory } from "../createCategory"
import { nanoid } from "nanoid"
import {ModalDataType} from "../../types/dataTypes"


export const CreateTabCategory = () => {
    const items: ModalDataType[] = [
        {
            key: nanoid(),
            label: "Category",
            children: <CreateCategory/>
        }
    ];
    return <Tabs defaultActiveKey="1" items={items}/>
}
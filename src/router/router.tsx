import { nanoid } from "nanoid";
import { Category } from "../page/Category/category";
import { CreateTabCategory } from "../components/createTabCategory";


interface RouteType {
    component: React.FC
    id: string,
    path?: string;
}

export const Routers: RouteType[] = [
    {
        id: nanoid(),
        path: "/app/category",
        component: Category,
    },
    {
        id: nanoid(),
        component: CreateTabCategory,
        path: "/app/category/create-category",
    }
]
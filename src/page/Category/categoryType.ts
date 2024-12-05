
export interface CategoryData {
    id: number,
    key: number,
    image: string,
    title: string,
    parent?: CategoryParent;
}

export interface CategoryParent {
    image: string;
}

export interface getDataType{
    count: number,
    next?: string | null,
    previous?: string | null,
    results:{
        id: number,
        title: string,
        image: string,
        parent?: CategoryParent;
    }[],
}
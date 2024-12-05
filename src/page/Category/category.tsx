import { useGetData } from "../service/query/useGetData";
import { CategoryData } from "./categoryType";
import { useDeleteCategory } from "../service/mutation/useDelete"
import { TableDataType } from "../../types/dataTypes";
import { Link } from "react-router-dom";
import { message, Table, Button, Image, Flex, Popconfirm } from "antd";
import { useQueryClient } from "@tanstack/react-query";



export const Category = () => {
    const { data } = useGetData();
    const queryClient = useQueryClient();
    const { mutate: deleteData } = useDeleteCategory();

    const categorySource = data?.results.map((item: CategoryData) => ({
        key: item.id,
        id: item.id,
        title: item.title,
        image: item.image,
    }));

    const handleDelete = (id: number) => {
        deleteData(id, {
            onSuccess: () => {
                message.success('Data deleted successfully');
                queryClient.invalidateQueries({ queryKey: ['getData'] });
            },
            onError: () => {
                message.error('Failed to delete data');
            }
        });

    }
    const columns: TableDataType[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: '30%',
            align: 'center',
            render: (image: string) => (
                <div style={{ textAlign: "center" }}>
                    <Image
                        style={{
                            width: "70px",
                        }}
                        src={image}
                        alt="#"
                    />
                </div>
            )
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
            render: (title: string) => (
                <span style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "600" }}>{title}</p>
                </span>

            ),
        },
        {
            title: "Change",
            dataIndex: 'action',
            key: "action",
            align: "center",
            width: "25%",

            render: (_: any, record: CategoryData) => (
                <Flex gap="small" justify="center">
                    <Link to={`/app/edit-category/${record.id}`}>
                        <Button type="primary" style={{ backgroundColor: "#f1cf0f" }}>
                            Edit
                        </Button>
                    </Link>
                    <Popconfirm
                        title="Delete this item?"
                        onConfirm={() => handleDelete(record.id)}
                        cancelText="No"
                        okText="Yes"
                    >
                        <Button danger type="primary">Delete</Button>
                    </Popconfirm>
                </Flex>
            )

        }
    ]

    return (
        <>
            <div>
                <Link to={"create-category"}>
                    <Button type="primary">
                        Create
                    </Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={categorySource} bordered size="large" />
        </>
    )
}

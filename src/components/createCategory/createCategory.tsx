import { RcFile } from "antd/es/upload"
import { useCreateData } from "../../page/service/mutation/useCreate"
import { FormReausable } from "../form"
import { useNavigate } from "react-router-dom"
import { message, Form } from "antd"


export const CreateCategory = () => {
    const { mutate: CreateData } = useCreateData();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const submit = (values: { title: string; image?: { file: RcFile } }) => {
        const formData = new FormData();
        formData.append("title", values.title);

        if (values.image) {
            formData.append("image", values.image.file);
        };

        CreateData(formData,{
            onSuccess: ()=>{
        message.success("Category added successfully!");
                navigate("/app");
                form.resetFields();
            },
            onError: (error: unknown) => {
                const err = error as Error;
                message.error(`Failed to add category: ${err.message}`);
            }
        })
    }

    return(
        <>
            <div style={{ width: "400px", border: "2px solid black", padding: "20px" }}>
                <FormReausable submit={submit} form={form}/>
            </div>
        </>
    )

}
import { UploadOutlined } from "@ant-design/icons";
import { Button,Form,Input,Upload } from "antd";
import { FormDataType } from "../../types/dataTypes";

export const FormReausable: React.FC<FormDataType> =({submit,form,data}) =>{
  return(
    <>
        <Form layout="vertical" initialValues={{...data}}
        onFinish={submit}
        form={form}>
            <Form.Item label={"Title"} name={"title"} rules={[{required: true, message: "write your title"}]}>
                <Input placeholder="enter your text"/>
            </Form.Item>
            <Form.Item label={"img"} name={"image"} valuePropName="file" rules={[{required: true, message: "Download the image"}]}>
                <Upload listType="picture" beforeUpload={() => false} accept="image" maxCount={1}>
                    <Button type="primary" icon={<UploadOutlined/>}>
                        Upload
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Send
                </Button>
            </Form.Item>
        </Form>
    </>
  )
}
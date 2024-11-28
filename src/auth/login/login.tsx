import { useLogin } from "../../service/mutation/useLgoin";
import { Form, Input, Button, message } from "antd";
import { useNavigate, Navigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";
import { loginType } from "../../service/loginType";
import { useForm, Controller } from "react-hook-form";

export const Login = () => {
  const { handleSubmit, control } = useForm<loginType>(); 
  const { mutate } = useLogin();
  const navigate = useNavigate();

  // Agar foydalanuvchi tizimga kirgan bo'lsa uni "/app"ga yo'naltirish
  if (Cookies.get("accessToken")) {
    return <Navigate to="/app" replace={true} />;
  }

  // Formani yuborish funksiyasi
  const onSubmit = (data: loginType) => {
    console.log("Submitted Data:", data);

    mutate(data, {
      onSuccess: () => {
        message.success("Login Successfully");
        navigate("/app", { replace: true });
      },
      onError: () => {
        message.error("Login failed. Please try again.");
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Form
        onFinish={handleSubmit(onSubmit)} // handleSubmit react-hook-form dan ishlatildi
        name="login"
        layout="vertical"
        style={{
          width: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <fieldset style={{ border: "none", padding: "0", margin: "0" }}>
          <legend style={{ fontSize: "24px", fontWeight: "medium" }}>
            Sign in
          </legend>
        </fieldset>
        {/* Telefon raqam */}
        <Form.Item
          label="Phone number"
          name="phone_number"
          rules={[{ required: false, message: "Phone Number is required" }]}
        >
          <Controller
            name="phone_number"
            control={control}
            defaultValue=" "
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                autoComplete="off"
                style={{ height: "40px", fontSize: "18px", fontWeight: "medium" }}
              />
            )}
          />
        </Form.Item>

        {/* Parol */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: false, message: "Password is required" }]}
        >
          <Controller
            name="password"
            control={control}
            defaultValue=" "
            render={({ field }) => (
              <Input.Password
                {...field}
                type="password"
                autoComplete="off"
                style={{ height: "40px", fontSize: "18px", fontWeight: "medium" }}
              />
            )}
          />
        </Form.Item>

        {/* Yuborish tugmasi */}
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            height: "40px",
            fontSize: "18px",
            fontWeight: "medium",
            marginTop: "20px",
          }}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

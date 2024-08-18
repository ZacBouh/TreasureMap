import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <div className="flex bg-blue-50">
      <div className="w-1/2 h-screen bg-white flex items-center justify-center ">
        <AuthForm type="sign-in"></AuthForm>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;

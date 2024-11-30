import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
// import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
    email: '',
    password: ''
}

function onSubmit() {

}

function AuthLogin() {

    const [formData, setFormData] = useState(initialState);

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold trcking-tight text-foreground">Sign in to your account</h1>
                <p className="mt-2 ">Don't have an account 
                    <Link to='/auth/register' className="font-medium ml-2 text-primary hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <CommonForm 
                formControls={loginFormControls}
                buttonText={'Sign In'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default AuthLogin;
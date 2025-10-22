import { Link, useNavigate } from "react-router-dom";
import Brand from "../components/Brand.jsx";
import Field, { Label } from "../components/Field.jsx";
import Divider from "../components/Divider.jsx";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button.jsx";

export default function Login() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     navigate("/dashboard"); // 🔹 arahkan ke halaman dashboard
  };
  return (
    <div>
      <Brand />

      <h1 className="text-[40px] leading-none sm:text-5xl font-extrabold mb-8">Sign in</h1>

       <form onSubmit={handleSubmit} className="max-w-xl">
        <div className="mb-5">
          <Label htmlFor="email">E-mail</Label>
          <Field
            id="email"
            type="email"
            placeholder="example@gmail.com"
            autoComplete="email"
          />
        </div>

        <div className="mb-7">
          <Label htmlFor="password">Password</Label>
          <Field
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>

        {/* tombol sign in */}
        <Button type="submit">Sign in</Button>

        <Divider label="OR" />

        {/* tombol sign in google */}
        <Button>
          <FcGoogle size={24} />
          <span>Sign in with Google</span>
        </Button>


        <div className="mt-6 flex items-center justify-between text-sm">
          <Link to="#" className="text-brand-700 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/register" className="text-brand-700 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

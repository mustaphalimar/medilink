import { TypographyH1 } from "@/Typography/TypographyH1";

import { TypographyP } from "@/Typography/TypographyP";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="p-6 lg:p-0 h-[100vh] w-full bg-gray-100 mx-auto flex items-center justify-center">
      <div className=" flex items-center justify-center rounded-lg bg-white overflow-hidden ">
        <div className="hidden lg:block max-w-[500px]  min-h-0 overflow-hidden p-10 ">
          <img src="/loginImg.jpg" className="rounded-lg w-full h-full" />
        </div>
        <div className="space-y-10 p-10 max-w-[500px]">
          <div>
            <TypographyH1>MediLink</TypographyH1>
            <TypographyP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              in magnam explicabo
            </TypographyP>
          </div>
          <form className="space-y-6">
            <div>
              <Label>Email</Label>
              <Input placeholder="Email" type="email" />
            </div>
            <div>
              <Label>Password</Label>
              <Input placeholder="Password" type="password" />
            </div>
            <div className="w-full">
              <Button className="w-full">Login</Button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;

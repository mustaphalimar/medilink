"use client";
import { TypographyH1 } from "@/Typography/TypographyH1";
import { TypographyP } from "@/Typography/TypographyP";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "react-query";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "@/features/user/userSlice";
import BeatLoader from "react-spinners/BeatLoader";

import { Navigate, useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must contain at least 6 characters",
  }),
});

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  const { mutate, isLoading, error } = useMutation(
    async (data: { email: string; password: string }) => {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        data
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        if (data) {
          dispatch(setUser(data));
        }
      },
    }
  );

  return user?.user?.id ? (
    <Navigate to="/" />
  ) : (
    <div className="p-6 lg:p-0 h-[100vh] w-full bg-gray-100 mx-auto flex items-center justify-center ">
      <div className=" flex items-center justify-center rounded-lg bg-white overflow-hidden ">
        <div className="hidden lg:block max-w-[500px]  min-h-0 overflow-hidden p-10 ">
          <img src="/loginImg.jpg" className="rounded-lg w-full h-full" />
        </div>
        <div className="space-y-10 p-10 max-w-[500px]">
          <div>
            <TypographyH1>MediLink</TypographyH1>
            <TypographyP>
              Log in to manage patient appointments, access medical records, and
              collaborate with other healthcare professionals in a secure and
              efficient environment.
            </TypographyP>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter your account password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <BeatLoader color="#36d7b7" size={10} /> : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

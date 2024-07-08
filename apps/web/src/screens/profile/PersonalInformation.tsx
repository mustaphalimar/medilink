import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { useMutation } from "react-query";
import { updateDoctorProfile } from "@/api/api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  speciality: z.string().min(2).max(50),
  adress: z.string().min(2).max(50),
  phoneNumber: z.string().min(9).max(9),
  email: z.string().email({
    message: "enter a valid email",
  }),
  password: z.string().optional(),
});

function PersonalInformation({ refetchUser }: { refetchUser: any }) {
  const { user } = useSelector(getUser);
  // console.log(user);

  const [isEdit, setIsEdit] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.doctor?.name,
      speciality: user?.doctor?.speciality,
      adress: user?.doctor?.adress,
      phoneNumber: user?.doctor?.phoneNumber,
      email: user?.email,
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const db = {
      name: values.name,
      speciality: values.speciality,
      phoneNumber: values.phoneNumber,
      adress: values.adress,
      doctorId: user?.doctor?.id,
      cred: {
        userId: user?.id,
        email: values.email,
        password: values.password,
      },
    };
    mutate(db);
    setIsEdit(true);
  }

  const { mutate, isLoading, error } = useMutation(
    async (data: {
      doctorId: any;
      name: string;
      speciality: string;
      adress: string;
      phoneNumber: string;
      cred: {
        userId: string;
        email: string;
        password?: string;
      };
    }) => updateDoctorProfile(data),
    {
      onSuccess: (data) => {
        toast("Personal informations updated");
        refetchUser();
      },
    }
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 px-10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Your Profile
              </h4>
              <p className="text-neutral-500">
                Update Your Profile photo and details here.
              </p>
            </div>

            <div>
              {!isEdit ? (
                <div className="space-x-2">
                  <Button
                    type="button"
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => setIsEdit(true)}
                  >
                    cancel
                  </Button>
                  <Button
                    type="submit"
                    size={"sm"}
                    variant={"default"}
                    className="bg-neutral-950 text-white hover:bg-neutral-700"
                  >
                    Save chnages
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={() => setIsEdit(false)}
                  size={"sm"}
                  variant={"default"}
                  className="bg-neutral-950 text-white hover:bg-neutral-700"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-3 gap-10">
            <div>
              <h4 className="scroll-m-20 text-lg font-medium tracking-tight">
                Personal Information
              </h4>
              <p className="text-neutral-500">
                This will be displayed on your profile.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <FormField
                disabled={isEdit}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={isEdit}
                control={form.control}
                name="speciality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Speciality</FormLabel>
                    <FormControl>
                      <Input placeholder="Speciality" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={isEdit}
                control={form.control}
                name="adress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adress</FormLabel>
                    <FormControl>
                      <Input placeholder="Adress" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                disabled={isEdit}
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl className="relative">
                      <div className="relative overflow-hidden">
                        <p className="bg-neutral-100 text-neutral-600 h-full absolute flex items-center p-2 left-0 top-0 text-sm  rounded-l-lg">
                          +212
                        </p>
                        <Input
                          className="pl-14"
                          placeholder="Phone Number"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-3 gap-10">
            <div>
              <h4 className="scroll-m-20 text-lg font-medium tracking-tight">
                Credentials Information
              </h4>
              <p className="text-neutral-500">Edit your credentials.</p>
            </div>

            <div className="pt-2 space-y-4">
              <FormField
                disabled={isEdit}
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={isEdit}
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription>
                      *If you don't want to update the password leave this field
                      empty
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default PersonalInformation;

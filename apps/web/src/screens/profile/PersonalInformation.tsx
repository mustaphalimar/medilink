import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function PersonalInformation() {
  const [isEdit, setIsEdit] = useState(false);
  return (
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
          {isEdit ? (
            <div className="space-x-2">
              <Button
                size={"sm"}
                variant={"outline"}
                onClick={() => setIsEdit(false)}
              >
                cancel
              </Button>
              <Button
                onClick={() => setIsEdit(false)}
                size={"sm"}
                variant={"default"}
                className="bg-neutral-950 text-white hover:bg-neutral-700"
              >
                Save chnages
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => setIsEdit(true)}
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
          <div>
            <Label>Full Name</Label>
            <Input value={"MohamedAmine Azirgui"} />
          </div>
          <div>
            <Label>Speciality</Label>
            <Input value={"Cardiologist"} />
          </div>
          <div>
            <Label>Adress</Label>
            <Input value={"avenue Hassan II, 3°et., Grand Casablanca"} />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input value={"+212 622002200"} />
          </div>
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
          <div>
            <Label>Email</Label>
            <Input value={"mohamedamine@gmail.com"} />
          </div>
          <div>
            <Label>Password</Label>
            <Input value={"**********"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;

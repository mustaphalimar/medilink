import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ProfileScreen = () => {
  const [toggleEdit, setToggleEdit] = useState(true);

  return (
    <div>
      <Heading title="MohamedAmine Azirgui" description="Cardiologist" />

      <div className="mt-10 space-y-6 ">
        {/* profile info display */}
        <div className="w-1/3 space-y-4">
          <div className="space-y-4 ">
            <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Profile Picture</AvatarFallback>
            </Avatar>
            <div>
              <Button variant={"outline"} size={"sm"}>
                Change Avatar
              </Button>
            </div>
          </div>
          <div>
            <Label>Full Name</Label>
            <Input value={"MohamedAmine Azirgui"} disabled={toggleEdit} />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={"MedAmine@test.com"}
              disabled={toggleEdit}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" value={"something"} disabled={toggleEdit} />
          </div>

          <div className="space-x-4">
            <Button
              onClick={() => setToggleEdit(false)}
              size={"sm"}
              variant={"secondary"}
            >
              Edit
            </Button>
            <Button onClick={() => setToggleEdit(true)} size={"sm"}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

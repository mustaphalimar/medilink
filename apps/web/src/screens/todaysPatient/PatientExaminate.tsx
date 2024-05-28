import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EyeIcon, PencilIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PatientExaminate = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} size={"sm"} className="space-x-2">
          <span>Examinate</span> <EyeIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-max">
        <DialogHeader>
          <DialogTitle className="text-3xl pb-6">Patient Card</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 grid-rows-5 gap-10">
          <div className="row-span-full">
            <Avatar className="w-60 h-60">
              <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQH18wOjTHgOww/profile-displayphoto-shrink_800_800/0/1677798557815?e=1722470400&v=beta&t=XvuEKjaswz_Rcl5iWqWnKjmU4tJu1XzegMM2VCFIbOs" />
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <Label>Full Name</Label>
            <Input placeholder="Full Name" type="text" />
          </div>
          <div>
            <Label>Weight</Label>
            <Input placeholder="Email" type="email" />
          </div>

          <div className="col-start-2">
            <Label>Gendre</Label>
            <Input placeholder="Email" type="email" />
          </div>
          <div>
            <Label>Height</Label>
            <Input placeholder="password" type="password" />
          </div>
          <div className="col-start-2">
            <Label>Height</Label>
            <Input placeholder="password" type="password" />
          </div>
          <div>
            <Label>Height</Label>
            <Input placeholder="password" type="password" />
          </div>
          <div className="col-start-2">
            <Label>Height</Label>
            <Input placeholder="password" type="password" />
          </div>
          <div>
            <Label>Height</Label>
            <Input placeholder="password" type="password" />
          </div>
        </div>
        <DialogClose>
          <Button className="w-full">Done</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PatientExaminate;

import { getPatientById } from "@/api/api";
import Heading from "@/components/ui/heading";
import { getUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ConsultationDisplay from "./ConsultationDisplay";
import { CalendarClock, File } from "lucide-react";
import AppointmentDisplay from "./AppointmentDiplay";
import { Button } from "@/components/ui/button";
import UploadsDisplay from "./UploadsDisplay";

const LabelAndText = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="border-b  py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <span className="text-lg font-medium capitalize ">{label} :</span>
        <span className="text-lg font-normal capitalize ">{value}</span>
      </div>
    </div>
  );
};

function PatientProfile() {
  const { patientId } = useParams();
  const user = useSelector(getUser);

  const { data } = useQuery(`getUser${patientId}`, () =>
    getPatientById(patientId)
  );

  const patient = data?.data;
  console.log(patient);

  return (
    <div>
      <Button size={"sm"} variant={"outline"} className="mb-4">
        <Link to="/patients">Go Back</Link>
      </Button>
      <Heading
        title={`Patient ${patient?.user?.name}`}
        description="Here's full data about the patient"
      />

      <div className="my-10  space-y-12   gap-4">
        <div className="space-y-2 border shadow-sm p-6 rounded-lg ">
          <h3 className="text-xl font-semibold flex items-center space-x-2 pb-4">
            <span>
              <File size={20} />
            </span>
            <span>Personal Informations</span>
          </h3>
          <LabelAndText label="Full Name" value={patient?.user?.name} />
          <LabelAndText label="age" value={patient?.age} />
          <LabelAndText label="height (cm)" value={patient?.height} />
          <LabelAndText label="weight (kg)" value={patient?.weight} />
          <LabelAndText label="gendre" value={patient?.gendre} />
        </div>

        <AppointmentDisplay appointments={patient?.Appointment} />
        <ConsultationDisplay consultations={patient?.Consultation} />
        <UploadsDisplay />
      </div>
    </div>
  );
}

export default PatientProfile;

import { getPatientById } from "@/api/api";
import Heading from "@/components/ui/heading";
import { getUser } from "@/features/user/userSlice";
import { createMarkup } from "@/utils/CreateMarkup";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      <Heading
        title="Patient Page"
        description="Here's full data about the patient"
      />

      <div className="my-10 p-6 grid bg-neutral-50  gap-4">
        <div>Full Name: {patient?.user?.name}</div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b">
            Consultation Display
          </h3>

          <div
            dangerouslySetInnerHTML={createMarkup(
              patient?.Consultation[0]?.instructions
            )}
            className="space-y-4 p-6 co_ren"
          />
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;

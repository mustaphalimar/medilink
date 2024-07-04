import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import BeatLoader from "react-spinners/BeatLoader";
import { getPatientById, postConsultation } from "@/api/api";
import { getUser } from "@/features/user/userSlice";
import { useSelector } from "react-redux";
import { createMarkup } from "@/utils/CreateMarkup";

function ConsulationPage() {
  const { patientId, appointmentId } = useParams();
  const user = useSelector(getUser);

  const { data } = useQuery(`getUser${patientId}`, () =>
    getPatientById(patientId)
  );

  const patient = data?.data;

  const [value, setValue] = useState("");
  const date = new Date();

  const { mutate, isLoading: loading } = useMutation(() =>
    postConsultation({
      patientId,
      doctorId: user?.user?.doctor?.id,
      medicalFileId: patient?.MedicalFile?.id,
      instructions: value,
      appointmentId,
    })
  );
  return (
    <div>
      <Heading
        title={`Consultation For ${patient?.user?.name?.toString().toUpperCase()}`}
        description="Consulation in making"
      />

      <Alert className="my-6">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can make a column layout row by giving your previous input some
          styling (bold, italic..), then click the TAB key on your keyboard.
        </AlertDescription>
      </Alert>
      <p className="italic text-neutral-500">
        Date: {date.toDateString()} {date.toLocaleTimeString()}
      </p>
      <div className="my-6">
        <Editor value={value} setValue={setValue} />
      </div>

      <div className="p-6 bg-white space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b">
          Consultation Display
        </h3>
        <p className="italic text-neutral-500">
          Date: {date.toDateString()} {date.toLocaleTimeString()}
        </p>
        <div
          dangerouslySetInnerHTML={createMarkup(value)}
          className="space-y-4 p-6 co_ren"
        />
      </div>

      <div className="my-4">
        <Button onClick={() => mutate()} type="button" disabled={loading}>
          {loading ? (
            <BeatLoader color="#36d7b7" size={10} />
          ) : (
            "Submit Consultation"
          )}
        </Button>
      </div>
    </div>
  );
}

export default ConsulationPage;

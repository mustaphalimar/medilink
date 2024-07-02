import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { useState } from "react";

function createMarkup(dirty: any) {
  return { __html: dirty };
}

function ConsulationPage() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Heading
        title="Consultation For Azirgui"
        description="Consulation in making"
      />
      <div className="my-6">
        <Editor value={value} setValue={setValue} />
      </div>

      <div className="p-6 bg-white space-y-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b">
          Consultation Display
        </h3>
        <div
          dangerouslySetInnerHTML={createMarkup(value)}
          className="space-y-4 p-6 co_ren"
        />
      </div>

      <div className="my-4">
        <Button onClick={() => console.log(value)}>Submit Consultation</Button>
      </div>
    </div>
  );
}

export default ConsulationPage;

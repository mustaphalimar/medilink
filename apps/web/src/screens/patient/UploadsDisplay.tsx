import { ImageUp } from "lucide-react";

function UploadsDisplay() {
  return (
    <div className="space-y-2 border shadow-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold  flex items-center space-x-2 pb-4">
        <span>
          <ImageUp size={20} />
        </span>
        <span>Attachments History</span>
      </h3>

      <div className="space-y-4">
        <p className="italic text-neutral-500 text-sm">No Attachments found</p>
      </div>
    </div>
  );
}

export default UploadsDisplay;

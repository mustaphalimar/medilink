import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="bg-white ">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default Editor;

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../css/quillStyles.css";

const RichTextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-2xl p-5 py-6  bg-white rounded-lg shadow-lg border border-gray-200">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="custom-quill mb-8  w-full sm:h-40 h-60 text-lg rounded-lg"
      />
    </div>
  );
};

export default RichTextEditor;

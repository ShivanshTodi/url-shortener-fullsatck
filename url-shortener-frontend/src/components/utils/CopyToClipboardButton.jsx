import { useState } from "react";
import toast from "react-hot-toast";
import { LiaCheckSolid } from 'react-icons/lia'
import { IoCopy } from 'react-icons/io5'

export default function CopyToClipboardButton({ text }) {

  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (

    <div className="flex cursor-pointer rounded-md items-center gap-1 bg-btnColor font-semibold px-3 py-2 text-white shadow-slate-500 shadow-md" >
      <button
        className="cursor-pointer text-white text-sm"
        onClick={copyToClipboard}>{copied ? "Copied" : "Copy"}
      </button>
      {copied ? (
        <LiaCheckSolid className="text-md" />
      ) : (
        <IoCopy className="text-md" />
      )
      }
    </div>
  );
}

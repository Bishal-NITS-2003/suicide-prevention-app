import React from "react";

interface TextResponseStepProps {
  question: string;
  value: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextResponseStep({
  question,
  value,
  maxLength = 1000,
  onChange,
}: TextResponseStepProps) {
  return (
    <>
      <label className="block mb-2 font-medium text-lg">{question}</label>
      <textarea
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full h-40 p-4 rounded-lg border border-gray-300 resize-none text-sm text-black"
      />
      <div className="text-right text-xs text-black mt-1">
        {value.length}/{maxLength}
      </div>
    </>
  );
}

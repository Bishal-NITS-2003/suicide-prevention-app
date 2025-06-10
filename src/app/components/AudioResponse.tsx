import React from "react";
interface AudioResponseStepProps {
  question: string;
  isRecording: boolean;
  toggleRecording: () => void;
  audioBlob: Blob | null;
}

export default function AudioResponseStep({
  question,
  isRecording,
  toggleRecording,
  audioBlob,
}: AudioResponseStepProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <p className="text-lg font-medium text-center">{question}</p>

      <button
        onClick={toggleRecording}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition ${
          isRecording ? "bg-red-500 animate-pulse" : "bg-gray-300"
        }`}
      >
        {isRecording ? (
          <img
            src="/microphone-svgrepo-com.svg"
            alt="Stop Recording"
            className="w-8 h-8"
          />
        ) : (
          <img
            src="/microphone-svgrepo-com.svg"
            alt="Mic Icon"
            className="w-8 h-8"
          />
        )}
      </button>

      {audioBlob && (
        <audio controls src={URL.createObjectURL(audioBlob)} className="mt-4" />
      )}
    </div>
  );
}

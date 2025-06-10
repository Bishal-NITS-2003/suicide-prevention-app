"use client";
import { useRouter } from "next/navigation";

import React, { useState, useRef, useCallback } from "react";
import TextResponseStep from "@/app/components/TextResponse";
import AudioResponseStep from "@/app/components/AudioResponse";
import VideoRecorder from "@/app/components/videoResponse";

export default function TestPage() {
  const router = useRouter();
  const videoRecorderRef = useRef<{ stopRecording: () => void }>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [responses, setResponses] = useState<{
    [key: number]: string | null;
    audioBlobs: { [key: number]: Blob | null };
    videoBlob?: Blob | null;
  }>({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    audioBlobs: {},
    videoBlob: null,
  });

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const questions: { [key: number]: string } = {
    1: "How would you describe your emotional state this week?",
    2: "Have there been any moments of stress or anxiety recently?",
    3: "Can you recall something positive that happened recently?",
    4: "Speak about your biggest challenge this week.",
    5: "Describe your current mood aloud.",
  };

  // Memoized callback to avoid re-renders in VideoRecorder
  const onVideoReady = useCallback((blob: Blob) => {
    setResponses((prev) => ({ ...prev, videoBlob: blob }));
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponses((prev) => ({ ...prev, [currentStep]: e.target.value }));
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (e: BlobEvent) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      setResponses((prev) => ({
        ...prev,
        audioBlobs: { ...prev.audioBlobs, [currentStep]: audioBlob },
      }));
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  const handleNext = () => {
    if (isRecording) stopRecording();
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (isRecording) stopRecording();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (isRecording) stopRecording();
    videoRecorderRef.current?.stopRecording(); // Stop video recording on submit

    console.log("Submitting all data", responses);
    router.push("/result");
  };

  const renderStep = () => {
    if (currentStep <= 3) {
      return (
        <TextResponseStep
          question={questions[currentStep]}
          value={responses[currentStep] ?? ""}
          onChange={handleTextChange}
        />
      );
    }
    return (
      <AudioResponseStep
        question={questions[currentStep]}
        isRecording={isRecording}
        toggleRecording={toggleRecording}
        audioBlob={responses.audioBlobs[currentStep] ?? null}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-black">
      <div className="bg-gradient-to-br from-white to-blue-200 w-full max-w-xl rounded-xl shadow-lg p-6 border-2 border-yellow-300">
        <h1 className="text-2xl font-bold text-center mb-4">
          Weekly Wellness Check
        </h1>

        <div className="flex justify-center items-center space-x-4 mb-6">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-5 h-5 rounded-full ${
                step <= currentStep
                  ? "bg-blue-500"
                  : "bg-white border-2 border-gray-300"
              }`}
            />
          ))}
        </div>

        {renderStep()}

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            PREV
          </button>

          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              NEXT
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              SUBMIT
            </button>
          )}
        </div>
      </div>

      {/* Video Component Runs Entire Time */}
      <div className="fixed bottom-4 right-4">
        <VideoRecorder ref={videoRecorderRef} onVideoReady={onVideoReady} />
      </div>
    </div>
  );
}

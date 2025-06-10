import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

const VideoRecorder = forwardRef(function VideoRecorder(
  { onVideoReady }: { onVideoReady: (blob: Blob) => void },
  ref,
) {
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    async function startVideoAndRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        recordedChunks.current = [];
        const options = { mimeType: "video/webm; codecs=vp9" };
        mediaRecorderRef.current = new MediaRecorder(stream, options);

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(recordedChunks.current, { type: "video/webm" });
          const url = URL.createObjectURL(blob);
          setVideoURL(url);
          onVideoReady(blob);
        };

        mediaRecorderRef.current.start();
      } catch (err) {
        console.error("Error accessing webcam or starting recording:", err);
      }
    }

    startVideoAndRecording();

    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [onVideoReady]);

  // Expose stopRecording method to parent via ref
  useImperativeHandle(ref, () => ({
    stopRecording() {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
    },
  }));

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: "200px",
          height: "150px",
          backgroundColor: "black",
          border: "2px solid black",
        }}
      />
    </div>
  );
});

export default VideoRecorder;

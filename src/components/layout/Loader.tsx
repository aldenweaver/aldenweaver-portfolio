import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div role="status" aria-live="polite" aria-label={`Loading: ${progress.toFixed(0)}% complete`}>
        <span className="canvas-load">
          <p
            style={{
              fontSize: 14,
              color: "#f1f1f1",
              fontWeight: 800,
              marginTop: 40,
            }}
            aria-hidden="true"
          >
            {progress.toFixed(2)}
          </p>
        </span>
        <span className="sr-only">Loading 3D content: {progress.toFixed(0)}% complete</span>
      </div>
    </Html>
  );
};

export default Loader;

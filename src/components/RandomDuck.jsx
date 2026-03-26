import { useState, useTransition } from "react";

export default function RandomDuck() {
  const [duck, setDuck] = useState();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const response = await fetch("/api/duck");
      const data = await response.json();
      setDuck(data.url);
    });
  };

  return (
    <div>
      <button
        disabled={isPending}
        style={{
          display: "block",
          marginBottom: "8px",
        }}
        onClick={handleClick}
      >
        {isPending ? "Loading..." : duck ? "Get a new Duck" : "Get a Duck"}
      </button>

      {duck && (
        <img
          src={duck}
          alt="A random duck"
          style={{
            maxWidth: "320px",
            maxHeight: "140px",
          }}
        />
      )}
    </div>
  );
}

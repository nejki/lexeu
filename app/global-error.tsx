"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="sl">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Nekaj je šlo narobe</h2>
          <button onClick={() => reset()} style={{ marginTop: "1rem" }}>
            Poskusite znova
          </button>
        </div>
      </body>
    </html>
  );
}

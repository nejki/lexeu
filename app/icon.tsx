import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#4A7060",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontFamily: "Georgia, serif",
          color: "white",
          fontWeight: 400,
        }}
      >
        §
      </div>
    ),
    { ...size }
  );
}

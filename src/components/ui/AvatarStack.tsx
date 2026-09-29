import Img from "./Img";

const tones = [
  "#f2b8a0",
  "#e5a94a",
  "#8fb7d9",
  "#6b7280",
  "#b48a6a",
  "#d18b8b",
  "#5a6a4a",
];

export default function AvatarStack({
  size = 32,
  overlap = 8,
  count = 5,
  label,
}: {
  size?: number;
  overlap?: number;
  count?: number;
  label: string;
}) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="relative shrink-0 overflow-hidden rounded-full border-2 border-white"
          style={{
            width: size,
            height: size,
            marginRight: -overlap,
            background: tones[i % tones.length],
          }}
        >
          <Img
            src={`/images/avatar-${(i % 7) + 1}.png`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </span>
      ))}
      <span
        className="relative flex shrink-0 items-center justify-center rounded-full bg-lime text-xs font-bold text-black"
        style={{ width: size, height: size, marginLeft: overlap > 0 ? 8 : 0 }}
      >
        {label}
      </span>
    </div>
  );
}

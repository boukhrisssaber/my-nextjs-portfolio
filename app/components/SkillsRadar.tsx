"use client";

const skills = [
  { label: "Security Ops", value: 95 },
  { label: "Pen Testing", value: 90 },
  { label: "GRC / ISO", value: 88 },
  { label: "AWS Cloud", value: 85 },
  { label: "SOC / SIEM", value: 92 },
  { label: "Product Mgmt", value: 85 },
  { label: "DevSecOps", value: 78 },
  { label: "Threat Intel", value: 80 },
];

const SIZE = 500;
const CENTER = SIZE / 2;
const MAX_R = 100;
const LEVELS = 5;
const SIDES = skills.length;
const ANGLE_STEP = (2 * Math.PI) / SIDES;
const LABEL_R = MAX_R + 45;

function getPoint(index: number, radius: number) {
  const angle = ANGLE_STEP * index - Math.PI / 2;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

function polygonPoints(radius: number) {
  return skills
    .map((_, i) => {
      const p = getPoint(i, radius);
      return `${p.x},${p.y}`;
    })
    .join(" ");
}

function dataPoints() {
  return skills
    .map((s, i) => {
      const r = (s.value / 100) * MAX_R;
      const p = getPoint(i, r);
      return `${p.x},${p.y}`;
    })
    .join(" ");
}

export default function SkillsRadar() {
  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">Skills</h2>
      <div className="flex justify-center overflow-visible">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-sm" style={{ overflow: "visible" }}>
          {Array.from({ length: LEVELS }, (_, lvl) => {
            const r = ((lvl + 1) / LEVELS) * MAX_R;
            return (
              <polygon
                key={lvl}
                points={polygonPoints(r)}
                fill="none"
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="1"
              />
            );
          })}

          {skills.map((_, i) => {
            const p = getPoint(i, MAX_R);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="1"
              />
            );
          })}

          <polygon
            points={dataPoints()}
            fill="rgba(20, 184, 166, 0.15)"
            stroke="rgb(20, 184, 166)"
            strokeWidth="2"
          />

          {skills.map((s, i) => {
            const r = (s.value / 100) * MAX_R;
            const p = getPoint(i, r);
            return (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="3"
                fill="rgb(20, 184, 166)"
                stroke="white"
                strokeWidth="1.5"
                className="dark:stroke-gray-900"
              />
            );
          })}

          {skills.map((s, i) => {
            const p = getPoint(i, LABEL_R);
            const angle = ANGLE_STEP * i - Math.PI / 2;
            const deg = (angle * 180) / Math.PI;

            let anchor: "start" | "middle" | "end" = "middle";
            if (deg > -60 && deg < 60) anchor = "start";
            else if (deg > 120 || deg < -120) anchor = "end";

            return (
              <text
                key={i}
                x={p.x}
                y={p.y}
                textAnchor={anchor}
                dominantBaseline="central"
                className="fill-gray-600 dark:fill-gray-300 text-[11px] font-medium"
              >
                {s.label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

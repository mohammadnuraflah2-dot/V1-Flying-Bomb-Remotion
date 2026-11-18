import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {Background} from "./components";
import {
  SceneTitle,
  SceneOpening,
  SceneBagian1,
  SceneBagian2,
  SceneBagian3,
  SceneBagian4,
  SceneBagian5,
} from "./scenes";

// Durasi tiap adegan dalam frame (30 FPS). Ubah angka di sini untuk memperpanjang/memperpendek.
const SCENES: {dur: number; Comp: React.FC<{dur: number}>}[] = [
  {dur: 150, Comp: SceneTitle},
  {dur: 900, Comp: SceneOpening},
  {dur: 1200, Comp: SceneBagian1},
  {dur: 1500, Comp: SceneBagian2},
  {dur: 1200, Comp: SceneBagian3},
  {dur: 1500, Comp: SceneBagian4},
  {dur: 1200, Comp: SceneBagian5},
];

export const TOTAL = SCENES.reduce((s, x) => s + x.dur, 0);

export const Video: React.FC = () => {
  let from = 0;
  return (
    <AbsoluteFill>
      <Background />
      {SCENES.map(({dur, Comp}, i) => {
        const start = from;
        from += dur;
        return (
          <Sequence key={i} from={start} durationInFrames={dur}>
            <Comp dur={dur} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

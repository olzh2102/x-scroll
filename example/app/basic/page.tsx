"use client";

import Scroller from "@/components";

export default function Page() {
  return (
    <Scroller className="outer-scroller m-2.5 rounded-lg flex gap-2.5 h-[700px]">
      <div
        data-testid="inner"
        className="flex-[0_0_100%] bg-blue-400 grid place-content-center"
      >
        <Scroller className="inner-scroller m-2.5 rounded-lg flex gap-2.5 w-[700px] h-[400px] p-2.5 bg-red-800">
          <div className="flex-[0_0_90%] bg-yellow-500" />
          <div className="flex-[0_0_90%] bg-yellow-500" />
          <div className="flex-[0_0_90%] bg-yellow-500">inner last</div>
        </Scroller>
      </div>
      <div className="flex-[0_0_100%] bg-blue-600">outer last</div>
    </Scroller>
  );
}

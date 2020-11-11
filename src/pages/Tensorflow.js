import React, { useRef } from "react";
import useTFClassify from "../utils/hook/useTFClassify";

export default function Tensorflow() {
  const ref = useRef();

  const { predict, prediction, isLoading } = useTFClassify();

  return (
    <div className="flex justify-center">
      <div className="w-1/3 text-center">
        <h1>Tensorflow</h1>
        <img
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3ODc3N30"
          ref={ref}
          alt=""
          width="400"
          crossOrigin="anonymous"
        />
        {prediction.length > 0 &&
          prediction.map((pre, index) => (
            <div className="flex justify-between" key={index}>
              <p>{pre.className}</p>
              <p>{Math.floor(pre.probability * 10)}%</p>
            </div>
          ))}
        <button
          onClick={() => predict(ref.current)}
          className="p-2 mt-5 rounded bg-blue-500 text-white w-64"
        >
          {isLoading && "⏳"}
          {!isLoading && "Predict Result"}
        </button>
      </div>
    </div>
  );
}

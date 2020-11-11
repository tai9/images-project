import { useState } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function useTFClassify() {
  const [prediction, setprediction] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  function predict(img) {
    setisLoading(true);
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        setprediction(predictions);
        setisLoading(false);
      });
    });
  }

  return { predict, prediction, isLoading };
}

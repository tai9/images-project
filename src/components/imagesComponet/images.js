import React, { useState } from "react";
import Image from "./image";
import useFetchImages from "../../utils/hook/useFetchImages";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../../utils/hook/useDebounce";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setsearchTerm] = useState(null);
  const { images, errors } = useFetchImages(page, searchTerm);

  const ShowImages = () => {
    const [showPreview, setShowPreview] = useState(false);

    return (
      <AnimateSharedLayout>
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="flex flex-wrap"
        >
          {images.map((image, index) => (
            <motion.div
              className="w-1/6 p-1 border flex justify-center"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId={image.urls.regular}
            >
              <Image
                show={() => setShowPreview(image.urls.regular)}
                image={image.urls.regular}
                alt={image.alt_description}
                index={index}
              />
            </motion.div>
          ))}
        </InfiniteScroll>

        <AnimatePresence>
          {showPreview && (
            <motion.section
              className="fixed h-full w-full flex justify-center items-center top-0 left-0 z-40"
              layoutId={showPreview}
              onClick={() => setShowPreview(false)}
              exit={{ opacity: 0, rotate: 360, transition: { duration: 0.5 } }}
            >
              <img
                className="rounded"
                src={showPreview}
                alt={showPreview}
                width="300"
              />
            </motion.section>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    );
  };

  const debounce = useDebounce();
  const handleInput = (e) => {
    const text = e.target.value;
    debounce(() => setsearchTerm(text));
  };

  return (
    <section>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <h1 className="m-auto">errors</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-xl m-10">Happy Coding ^^</h1>
          <div className="my-2">
            <input
              className="border border-green-400 rounded shadow w-full text-center p-2"
              type="text"
              onChange={handleInput}
              placeholder="Search Photos Here"
            />
          </div>
          <div className="flex flex-wrap" style={{ columnCount: 5 }}>
            <ShowImages />
          </div>
        </div>
      )}
    </section>
  );
}

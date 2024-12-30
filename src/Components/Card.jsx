import { FaRegFileLines } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference, darkMode, onDelete }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className={`relative flex-shrink-0 w-60 h-72 rounded-[45px] px-8 py-10 overflow-hidden ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <FaRegFileLines />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center px-8 py-3 justify-between mb-3">
          <h5>{data.filesize}</h5>
          <button
            className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center"
            onClick={onDelete}
          >
            <IoMdCloseCircleOutline size="1.2em" color="#fff" />
          </button>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue"
                ? "bg-blue-600"
                : data.tag.tagColor === "red"
                ? "bg-red-600"
                : ""
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;

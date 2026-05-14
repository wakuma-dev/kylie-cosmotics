import { IoCloseOutline } from "react-icons/io5";

export default function ModalBanner({ onClose }) {
  return (
    <div className="relative flex flex-col gap-6 p-8 rounded-none bg-white max-w-[450px] w-[90%] shadow-2xl animate-in fade-in zoom-in duration-300">
      {/* Header */}
      <h2 className="text-sm font-bold uppercase tracking-widest border-b pb-2">
        Privacy Policy
      </h2>

      {/* Body */}
      <div className="space-y-4">
        <p className="text-[13px] leading-relaxed text-gray-700">
          By clicking <span className="font-bold">"AGREE"</span> below, I
          understand I am executing a release in which I agree Coty Inc. and its
          technology provider, Perfect Corp., will have access to my camera to
          collect biometric data (face scan) captured by{" "}
          <span className="italic font-medium">
            Kylie Cosmetics Virtual Try On
          </span>
          .
        </p>
        <p className="text-[12px] text-gray-500 underline cursor-pointer hover:text-black transition-colors">
          View Virtual Try-on Privacy Policy
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-2">
        <button
          onClick={onClose}
          className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98]"
        >
          Agree
        </button>

        <button
          onClick={onClose}
          className="w-full py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          No Thanks
        </button>
      </div>

      {/* Close Icon */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close modal"
      >
        <IoCloseOutline size={24} />
      </button>
    </div>
  );
}

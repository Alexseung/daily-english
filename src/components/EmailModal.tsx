"use client";
import { useRef, useImperativeHandle, forwardRef } from "react";
import EmailSubscribeForm from "./EmailSubscribeForm";

type EmailModalHandle = {
  open: () => void;
  close: () => void;
};

type EmailModalProps = {
  message: string;
};

const EmailModal = forwardRef<EmailModalHandle, EmailModalProps>(
  function EmailModal(props, ref) {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    }));

    return (
      <dialog
        ref={dialog}
        className="
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[30rem] max-w-[90%]
          rounded-2xl bg-white text-black overflow-hidden shadow-xl z-50
        "
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-[#5b3d45]">
              {props.message}
            </h2>
            <button
              aria-label="close"
              onClick={() => dialog.current?.close()}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <p className="mt-2 text-sm text-[--muted]">
            평일 오전 한 문장씩 받아서 편히 읽어만 보세요!
          </p>

          <div className="mt-6">
            {/* 여기서 모바일 반응형을 적용하기 위해 래퍼 추가 */}
            <div className="flex flex-col gap-3 w-full">
              <EmailSubscribeForm />
            </div>
          </div>
        </div>
      </dialog>
    );
  }
);

export default EmailModal;

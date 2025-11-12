// 'use client';
// import {useRef, useImperativeHandle, forwardRef} from 'react';
// import EmailSubscribeForm from './EmailSubscribeForm';

// type EmailModalHandle = {
//   open: () => void;
//   close: () => void;
// };

// type EmailModalProps = {
//   message: string;
// };

// const EmailModal = forwardRef<EmailModalHandle, EmailModalProps>(
//   function CartModal(props, ref) {
//     const dialog = useRef<HTMLDialogElement | null>(null);

//     useImperativeHandle(ref, () => ({
//       open: () => {
//         dialog.current?.showModal();
//       },
//       close: () => {
//         dialog.current?.close();
//       },
//     }));

//     return (
//       <dialog
//         ref={dialog}
//         className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//              w-[32rem] rounded-lg bg-white text-black overflow-hidden
//              shadow-2xl backdrop:bg-black/50 z-50'
//       >
//         <div className='p-6 space-y-6'>
//           <h2 className='text-xl font-bold text-center text-gray-800'>
//             {props.message}
//           </h2>
//           <EmailSubscribeForm />
//           <div className='flex justify-end mt-4'>
//             <button
//               onClick={() => dialog.current?.close()}
//               className='px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold transition-all duration-300'
//             >
//               닫기
//             </button>
//           </div>
//         </div>
//       </dialog>
//     );
//   }
// );

// export default EmailModal;

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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] rounded-2xl bg-white text-black overflow-hidden shadow-xl z-50"
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
            평일 오전 같은 시간에 한 문장씩 받아보세요.
          </p>

          <div className="mt-6">
            <EmailSubscribeForm onSuccess={() => dialog.current?.close()} />
          </div>
        </div>
      </dialog>
    );
  }
);

export default EmailModal;

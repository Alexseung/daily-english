'use client';
import {useRef, useImperativeHandle, forwardRef} from 'react';
import EmailSubscribeForm from './EmailSubscribeForm';

type EmailModalHandle = {
  open: () => void;
  close: () => void;
};

type EmailModalProps = {
  message: string;
};

const EmailModal = forwardRef<EmailModalHandle, EmailModalProps>(
  function CartModal(props, ref) {
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
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             w-[32rem] rounded-lg bg-white text-black overflow-hidden 
             shadow-2xl backdrop:bg-black/50 z-50'
      >
        <div className='p-6 space-y-6'>
          <h2 className='text-xl font-bold text-center text-gray-800'>
            {props.message}
          </h2>
          <EmailSubscribeForm />
          <div className='flex justify-end mt-4'>
            <button
              onClick={() => dialog.current?.close()}
              className='px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold transition-all duration-300'
            >
              닫기
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default EmailModal;

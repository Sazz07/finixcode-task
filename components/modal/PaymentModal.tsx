'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (paymentMethod: string) => void;
}

export function PaymentModal({
  isOpen,
  onClose,
  onContinue,
}: PaymentModalProps) {
  const [selectedPayment, setSelectedPayment] = useState<string>('bKash');

  const handleContinue = () => {
    onContinue(selectedPayment);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          'overflow-hidden p-0 bg-transparent rounded-2xl border-none w-[300px] md:w-[400px]'
        )}
      >
        <DialogTitle className='sr-only'>Choose Payment Method</DialogTitle>
        <div className='relative p-8 rounded-2xl bg-secondary-pure-green text-light-orange'>
          <div className='flex justify-center mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='140'
              height='141'
              viewBox='0 0 140 141'
              fill='none'
              className={cn('size-[80px] md:size-[140px]')}
            >
              <path
                d='M78.75 93.3672C78.75 95.6878 77.8281 97.9134 76.1872 99.5544C74.5462 101.195 72.3206 102.117 70 102.117C67.6794 102.117 65.4538 101.195 63.8128 99.5544C62.1719 97.9134 61.25 95.6878 61.25 93.3672C61.25 91.0465 62.1719 88.8209 63.8128 87.18C65.4538 85.5391 67.6794 84.6172 70 84.6172C72.3206 84.6172 74.5462 85.5391 76.1872 87.18C77.8281 88.8209 78.75 91.0465 78.75 93.3672Z'
                fill='#FDE8CD'
              />
              <path
                d='M83.6908 3.88281L102.241 29.8761L114.473 25.7053L125.638 58.3661H131.25V128.366H8.75V58.3661H11.725V58.3078L15.505 58.3428L83.6908 3.88281ZM54.8158 58.3661H113.312L107.263 40.6736L98.385 43.5145L54.8158 58.3661ZM45.7275 49.132L90.7083 33.8078L81.3517 20.6828L45.7275 49.132ZM32.0833 70.0328H20.4167V81.6995C23.5109 81.6995 26.4783 80.4703 28.6662 78.2824C30.8542 76.0945 32.0833 73.127 32.0833 70.0328ZM90.4167 93.3661C90.4167 90.685 89.8886 88.0301 88.8625 85.553C87.8365 83.076 86.3326 80.8252 84.4368 78.9294C82.5409 77.0335 80.2902 75.5296 77.8131 74.5036C75.3361 73.4776 72.6812 72.9495 70 72.9495C67.3188 72.9495 64.6639 73.4776 62.1869 74.5036C59.7098 75.5296 57.4591 77.0335 55.5632 78.9294C53.6674 80.8252 52.1635 83.076 51.1375 85.553C50.1114 88.0301 49.5833 90.685 49.5833 93.3661C49.5833 98.781 51.7344 103.974 55.5632 107.803C59.3921 111.632 64.5852 113.783 70 113.783C75.4148 113.783 80.6079 111.632 84.4368 107.803C88.2656 103.974 90.4167 98.781 90.4167 93.3661ZM119.583 116.699V105.033C116.489 105.033 113.522 106.262 111.334 108.45C109.146 110.638 107.917 113.605 107.917 116.699H119.583ZM107.917 70.0328C107.917 73.127 109.146 76.0945 111.334 78.2824C113.522 80.4703 116.489 81.6995 119.583 81.6995V70.0328H107.917ZM20.4167 116.699H32.0833C32.0833 113.605 30.8542 110.638 28.6662 108.45C26.4783 106.262 23.5109 105.033 20.4167 105.033V116.699Z'
                fill='#FDE8CD'
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className={cn('mb-8 text-xl font-bold text-center md:text-3xl')}>
            Choose Payment <br /> Method
          </h2>

          {/* Payment options */}
          <div className={cn('space-y-2 md:space-y-4')}>
            {/* bKash option */}
            <label className={cn('flex gap-3 items-start cursor-pointer')}>
              <div className={cn('flex items-center h-6 mt-0.5')}>
                <input
                  type='radio'
                  value='bKash'
                  checked={selectedPayment === 'bKash'}
                  onChange={() => setSelectedPayment('bKash')}
                  className='sr-only'
                />
                <div
                  className={cn(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                    selectedPayment === 'bKash'
                      ? 'border-primary-jithbo'
                      : 'border-neutral-300',
                    selectedPayment !== 'bKash' ? 'bg-white' : ''
                  )}
                >
                  {selectedPayment === 'bKash' && (
                    <div className='w-2.5 h-2.5 rounded-full bg-primary-jithbo' />
                  )}
                </div>
              </div>
              <div className={cn('flex-1 text-white')}>
                <div className={cn('flex gap-2 items-center')}>
                  <span className={cn('font-medium md:text-xl')}>bKash</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='23'
                    viewBox='0 0 22 23'
                    fill='none'
                    className={cn('size-5.5')}
                  >
                    <path
                      d='M10.5319 4.48438C10.5319 4.48438 8.62391 11.2237 8.78616 11.2237C8.94841 11.2237 16.3377 12.5634 16.3377 12.5634L10.5319 4.48438Z'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.5326 4.48667L2.90039 3.35001L8.78677 11.226L9.80197 15.8946L16.3383 12.5657L18.0433 8.52596M18.0433 8.52596L13.9297 9.21392M18.0433 8.52596L19.7079 10.0889H17.3837'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.80319 15.8969L9.96544 16.77L6.29144 19.713L8.78798 11.2283M16.3395 12.568L16.0961 13.8875L10.4728 15.5559M3.87602 4.65625H2.29248L7.35431 9.30971'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p
                  className={cn(
                    'mt-1 text-sm font-light text-white md:text-base md:w-11/12'
                  )}
                >
                  Send the payment now via bKash to confirm your spot instantly.
                </p>
              </div>
            </label>

            {/* Cash option */}
            <label className={cn('flex gap-3 items-start cursor-pointer')}>
              <div className={cn('flex items-center h-6 mt-0.5')}>
                <input
                  type='radio'
                  value='Cash'
                  checked={selectedPayment === 'Cash'}
                  onChange={() => setSelectedPayment('Cash')}
                  className='sr-only'
                />
                <div
                  className={cn(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                    selectedPayment === 'Cash'
                      ? 'border-primary-jithbo'
                      : 'border-neutral-300',
                    selectedPayment !== 'Cash' ? 'bg-white' : ''
                  )}
                >
                  {selectedPayment === 'Cash' && (
                    <div className='w-2.5 h-2.5 rounded-full bg-primary-jithbo' />
                  )}
                </div>
              </div>
              <div className={cn('flex-1 text-white')}>
                <div className={cn('flex gap-2 items-center')}>
                  <span className={cn('font-medium md:text-xl')}>Cash</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='23'
                    viewBox='0 0 22 23'
                    fill='none'
                    className={cn('size-5.5')}
                  >
                    <path
                      d='M1.83252 4.65625H8.02644C8.3877 4.65621 8.74543 4.72734 9.07918 4.8656C9.41294 5.00385 9.71619 5.20651 9.9716 5.462L12.8325 8.32292M4.58252 12.9063H1.83252M7.79085 7.40625L9.62419 9.23958C9.74456 9.35996 9.84005 9.50287 9.9052 9.66015C9.97035 9.81744 10.0039 9.98601 10.0039 10.1563C10.0039 10.3265 9.97035 10.4951 9.9052 10.6523C9.84005 10.8096 9.74456 10.9525 9.62419 11.0729C9.50381 11.1933 9.3609 11.2888 9.20362 11.3539C9.04633 11.4191 8.87776 11.4526 8.70752 11.4526C8.53728 11.4526 8.36871 11.4191 8.21142 11.3539C8.05414 11.2888 7.91123 11.1933 7.79085 11.0729L6.41585 9.69792C5.62752 10.4863 4.3781 10.5752 3.48527 9.906L3.20752 9.69792'
                      stroke='white'
                      strokeWidth='1.2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.58252 10.6175V14.7425C4.58252 16.4713 4.58252 17.3348 5.11969 17.872C5.65685 18.4091 6.52035 18.4091 8.24919 18.4091H16.4992C18.228 18.4091 19.0915 18.4091 19.6287 17.872C20.1659 17.3348 20.1659 16.4713 20.1659 14.7425V11.9925C20.1659 10.2636 20.1659 9.40014 19.6287 8.86297C19.0915 8.32581 18.228 8.32581 16.4992 8.32581H8.70752'
                      stroke='white'
                      strokeWidth='1.2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M13.9784 13.3675C13.9784 13.7929 13.8093 14.201 13.5085 14.5018C13.2077 14.8026 12.7996 14.9716 12.3742 14.9716C11.9487 14.9716 11.5407 14.8026 11.2399 14.5018C10.939 14.201 10.77 13.7929 10.77 13.3675C10.77 12.942 10.939 12.534 11.2399 12.2332C11.5407 11.9323 11.9487 11.7633 12.3742 11.7633C12.7996 11.7633 13.2077 11.9323 13.5085 12.2332C13.8093 12.534 13.9784 12.942 13.9784 13.3675Z'
                      stroke='white'
                      strokeWidth='1.2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p
                  className={cn(
                    'mt-1 text-sm font-light text-white md:w-11/12 md:text-base'
                  )}
                >
                  Pay the event fee directly to the host before the game starts.
                </p>
              </div>
            </label>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className={cn(
              'w-full mt-8 py-4 bg-[#2B2B2B] text-white rounded-full font-medium hover:bg-[#2a2a2a] transition cursor-pointer text-lg'
            )}
          >
            Continue
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

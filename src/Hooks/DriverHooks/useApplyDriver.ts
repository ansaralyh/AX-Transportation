import { useMutation } from '@tanstack/react-query';
import { applyForDriver } from '../../Apis/driverApi';

export const useApplyDriver = () => {
  return useMutation({
    mutationFn: applyForDriver,
    onSuccess: () => {
      alert('Application submitted successfully!');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      alert(`Error: ${error.message || 'Submission failed'}`);
    },
  });
};

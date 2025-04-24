import { useMutation } from '@tanstack/react-query';
import { applyForDriver } from '../../Apis/driverApi';
import { toast } from 'react-toastify';

export const useApplyDriver = () => {
  return useMutation({
    mutationFn: applyForDriver,
    onSuccess: () => {
      toast.success("Application submitted successfully!");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const errorMessage =
        error instanceof Error ? error.message : "Form submission failed.";
      toast.error(errorMessage);
    },
  });
};

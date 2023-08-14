import { toast } from 'react-toastify';

export function successToast(message) {
 return function () {
  toast.success(message);
 };
}

export function failToast(message) {
 return function () {
  toast.error(message);
 };
}

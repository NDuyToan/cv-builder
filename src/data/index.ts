import { CVData } from '../types/cv';
import { cvVietnamese } from './cv-vi';
import { cvEnglish } from './cv-en';
import { cvPromax } from './cv-promax';

export { cvVietnamese, cvEnglish, cvPromax };

/**
 * Danh sách các profile CV hiện có.
 * Bạn có thể tạo thêm các file biến thể theo từng công ty (ví dụ: cv-company-a.ts)
 * và thêm vào mảng cvProfiles bên dưới để lựa chọn trên giao diện.
 */
export const cvProfiles: CVData[] = [
  cvPromax,
  cvVietnamese,
  cvEnglish,
];

export const defaultCV = cvPromax;


export interface FormData {
  address: string;
  email: string;
  contactNumber: string;
  countryCode: string;
}

export interface FormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface DataFormProps {
  formData: FormData;
}

export type NavItemProps = {
  children: React.ReactNode;
};
export type HeaderProps = {
  onSignInClick: () => void;
};

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface PopupProps {
  showPopup: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

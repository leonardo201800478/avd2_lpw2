export type Copa = {
  id: string;
  campeao: string;
  ano: string;
  sede: string;
};

export type FormProps = {
  addCopa: (newCopa: Copa) => void;
};

export type CopaProps = {
  deleteCopa: (copaId: string) => void;
  showCopa: (copaId: Copa) => void;
};

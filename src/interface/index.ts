export interface UnsplashImage {
  id: string;
  created_at: string;
  urls: {
    regular: string;
  };
}

export interface CardProps {
  image: {
    id: string;
    urls: {
      regular: string;
    };
    created_at: string;
  };
  onDelete: (id: string) => void;
}

export interface CardSheetProps {}

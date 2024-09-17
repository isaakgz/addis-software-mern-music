import { useEffect } from "react";

interface UseTitleProps {
  title: string;
}

const useTitle = ({ title }: UseTitleProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;

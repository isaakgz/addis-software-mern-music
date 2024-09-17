import { Outlet, useNavigate } from "react-router-dom";
import Toast from "../../components/Toast/Toast";
import WellcomeCard from "../../components/WellcomeCard/WellcomeCard";
import { CardWrapper, FormWrapper, PageContainer } from "./AuthpageStyles";
import { useAppSelector } from "../../store";
import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";

function AuthPage() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useTitle({ title: "Auth" });

  //if user is logged in, redirect to the home page
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <PageContainer>
      <Toast />
      <CardWrapper>
        <WellcomeCard />
      </CardWrapper>
      <FormWrapper>
        <Outlet />
      </FormWrapper>
    </PageContainer>
  );
}

export default AuthPage;

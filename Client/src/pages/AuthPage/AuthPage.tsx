import { Outlet, useNavigate } from "react-router-dom";
import Toast from "../../components/Toast/Toast";
import WellcomeCard from "../../components/WellcomeCard/WellcomeCard";
import { CardWrapper, FormWrapper, PageContainer } from "./AuthpageStyles";
import { useAppSelector } from "../../store";
import { useEffect } from "react";

function AuthPage() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  //if user is logged in, redirect to the home page
  useEffect(() => {
    if (user && localStorage.getItem("user")) {
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

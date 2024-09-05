import AuthForm from "../../components/AuthForm/AuthForm";
import WellcomeCard from "../../components/WellcomeCard/WellcomeCard";
import { CardWrapper, FormWrapper, PageContainer } from "./AuthpageStyles";

function AuthPage() {
  return (
    <PageContainer>
      <CardWrapper>
        <WellcomeCard />
      </CardWrapper>
      <FormWrapper>
        <AuthForm />
      </FormWrapper>
    </PageContainer>
  );
}

export default AuthPage;

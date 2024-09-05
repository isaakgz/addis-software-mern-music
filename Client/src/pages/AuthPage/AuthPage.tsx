import styled from "@emotion/styled";
import AuthForm from "../../components/AuthForm/AuthForm";
import WellcomeCard from "../../components/WellcomeCard/WellcomeCard";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  width: 100%;
  flex-wrap: nowrap;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden; 

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    gap: 0;
    height: 100vh;
  }
`;

const CardWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AuthPage() {
  return (
    <PageContainer>
      <CardWrapper>
        <WellcomeCard />
      </CardWrapper>
      <FormWrapper>
        <AuthForm formType="register" />
      </FormWrapper>
    </PageContainer>
  );
}

export default AuthPage;

import styled from "@emotion/styled";

interface MusicFormProps {
  title: string;
}
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 668px) {
    padding: 0 15px 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #f0f2f5ef;
  padding: 20px;
  box-shadow: 0 0 10px #ced1d4;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 668px) {
    width: 100%;
  }

  input {
    padding: 10px;
    margin: 0 0 10px 0;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid #ced1d4;
    width: 30vw;
    height: 30px;
    background-color: #f0f2f5ef;
    &:focus {
      outline: none;
      border-bottom: 0.5px solid #0078d4;
    }
  }
  h2 {
    margin: 0 0 10px 0;
    color: #0f1011;
    text-align: center;
  }
  button {
    padding: 15px 10px;
    border-radius: 5px;
    border: none;
    background-color: #0078d4;
    color: white;

    width: 100px;
    cursor: pointer;
    &:hover {
      background-color: #005a9e;
    }
  }
`;

function MusicForm({ title = "Add Your Song" }: MusicFormProps) {
  return (
    <FormContainer>
      <InputContainer>
        <h2>{title}</h2>
        <form>
          <input id="songName" type="text" placeholder="Song Name" />

          <div>
            <input type="text" placeholder="Artist Name" />
          </div>
          <div>
            <input type="text" placeholder="Album Name" />
          </div>
          <div>
            <input type="text" placeholder="Genre" />
          </div>
          <button>Add</button>
        </form>
      </InputContainer>
    </FormContainer>
  );
}

export default MusicForm;

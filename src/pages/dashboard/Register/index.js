import {
  Box,
  Container,
} from "@material-ui/core";
import RegisterForm from "components/forms/RegisterForm";

const Register = () => {

  const onSubmit = () => {
    
  };
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height="100vh"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <RegisterForm
          onSubmit={onSubmit}
          initialValues={{}}
        />
      </Container>
    </Box>
  );
};

export default Register;
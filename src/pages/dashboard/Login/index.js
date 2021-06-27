import {
    Box,
    Container,
} from "@material-ui/core";
import LoginForm from "components/forms/LoginForm";

const Login = () => {

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
                <LoginForm
                    onSubmit={onSubmit}
                    initialValues={{}}
                />
            </Container>
        </Box>
    );
};

export default Login;
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
    Box,
    Button,
    Link,
    TextField,
    Typography
} from "@material-ui/core";

const LoginForm = ({
  initialValues,
  onSubmit
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
        password: Yup.string().max(255).required("Password is required")
      })}
      onSubmit={onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography
              align="center"
              variant="h2"
            >
              Login
            </Typography>
          </Box>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={4}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign in now
            </Button>
          </Box>
          <Box mt={2}>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Don&apos;t have an account?
              {" "}
              <Link
                component={RouterLink}
                to="/admin/register"
                variant="body1"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;

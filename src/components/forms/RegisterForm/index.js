import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    FormHelperText,
    Link,
    TextField,
    Typography
} from "@material-ui/core";

const RegisterForm = ({
  onSubmit,
  initialValues
}) => {
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
            firstName: Yup.string().max(255).required("First name is required"),
            lastName: Yup.string().max(255).required("Last name is required"),
            password: Yup.string().max(255).required("password is required"),
            policy: Yup.boolean().oneOf([true], "This field must be checked")
          })
        }
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
                color="textPrimary"
                variant="h2"
                align="center"
              >
                Create new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                align="center"
              >
                Use your email to create new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(touched.firstName && errors.firstName)}
              fullWidth
              helperText={touched.firstName && errors.firstName}
              label="First name"
              margin="normal"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.lastName && errors.lastName)}
              fullWidth
              helperText={touched.lastName && errors.lastName}
              label="Last name"
              margin="normal"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              variant="outlined"
            />
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
            <Box
              alignItems="center"
              display="flex"
              ml={-1}
            >
              <Checkbox
                checked={values.policy}
                name="policy"
                onChange={handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body1"
              >
                I have read the
                {" "}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                  underline="always"
                  variant="h6"
                >
                  Terms and Conditions
                </Link>
              </Typography>
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>
                {errors.policy}
              </FormHelperText>
            )}
            <Box mt={2}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                type="submit"
                variant="contained"
              >
                Sign up now
              </Button>
            </Box>
            <Box mt={2}>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Have an account?
                {" "}
                <Link
                  component={RouterLink}
                  to="admin/login"
                  variant="body1"
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </form>
        )}
    </Formik>
  );
};

export default RegisterForm;

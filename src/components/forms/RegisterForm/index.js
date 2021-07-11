import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { useIntl } from "react-intl";
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

  const intl = useIntl();

  const createAnAccountText = intl.formatMessage({
    id: "createAnAccountText",
    defaultMessage: "Create an account"
  });

  const useYourEmailText = intl.formatMessage({
    id: "useYourEmailText",
    defaultMessage: " Use your email to create new account"
  });

  const signUpNowText = intl.formatMessage({
    id: "signUpNowText",
    defaultMessage: "Sign up now"
  });

  const haveAnAccount = intl.formatMessage({
    id: "haveAnAccount",
    defaultMessage: "Have an account?"
  });

  const signInText = intl.formatMessage({
    id: "signInText",
    defaultMessage: "Sign in"
  });

  const termsAndConditions = intl.formatMessage({
    id: "termsAndConditions",
    defaultMessage: "Terms and Conditions"
  });
  
  const iHaveReadThe = intl.formatMessage({
    id: "iHaveReadThe",
    defaultMessage: "I have read the"
  });

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
                {createAnAccountText}
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                align="center"
              >
                {useYourEmailText}
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
                {iHaveReadThe}
                {" "}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="#"
                  underline="always"
                  variant="body1"
                >
                  {termsAndConditions}
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
                {signUpNowText}
              </Button>
            </Box>
            <Box mt={2}>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                {haveAnAccount}
                {" "}
                <Link
                  component={RouterLink}
                  to="admin/login"
                  variant="body1"
                >
                  {signInText}
                </Link>
              </Typography>
            </Box>
          </form>
        )}
    </Formik>
  );
};

export default RegisterForm;

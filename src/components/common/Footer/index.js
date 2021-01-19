import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "assets/images/logos/footer-logo.svg";

const useStyles = makeStyles(() => ({
    footer: {
        paddingBottom: 90,
        paddingTop: 90
    }
}));

const Footer = () => {
    const classes = useStyles();
    const date = new Date();

    return (
        <footer className={classes.footer}>
            <Container>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Logo />
                    <Box>
                        <Typography>
                            © {date.getFullYear()} Copyright
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;

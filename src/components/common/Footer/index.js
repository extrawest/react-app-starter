import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    footer: {
        marginTop: "auto",
        paddingBottom: 30,
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
                    justifyContent="center"
                    alignItems="center"
                >
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


import { Button, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PageLayout from "layouts/PageLayout";
import Greeting from "layouts/main/Greeting";
import { useAbility } from "@casl/react";
import { AbilityContext } from "permissions/Can";
import { toastr } from "react-redux-toastr";
import { useIntl } from "react-intl";

const Main = () => {
    const intl = useIntl();
    const ability = useAbility(AbilityContext);
    
    const superAdmin = ability?.can("manage", "all");
    
    return (
        <PageLayout>
            <Greeting />
            {superAdmin && intl.formatMessage({
                id: "greeting",
                defaultMessage: "Greeting!"
            })}
            <Button
                onClick={() => toastr.success("The title", "The message")}
                type="button">Toastr Success
            </Button>
            <br/>
            <Link
                component={RouterLink}
                to="/admin/login"
            >
                Login page
            </Link>
            <br/>
            <Link
                component={RouterLink}
                to="/admin/register"
            >
                Register page
            </Link>
        </PageLayout>
    );
};

export default Main;
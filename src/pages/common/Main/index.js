
import { Button } from "@material-ui/core";
import PageLayout from "layouts/PageLayout";
import Greeting from "layouts/main/Greeting";
import { useAbility } from "@casl/react";
import { AbilityContext } from "permissions/Can";
import { toastr } from "react-redux-toastr";

const Main = () => {
    const ability = useAbility(AbilityContext);
    
    const superAdmin = ability?.can("manage", "all");
    
    return (
        <PageLayout>
            <Greeting />
            {superAdmin && "Super admin text"}
            <Button
                onClick={() => toastr.success('The title', 'The message')}
                type="button">Toastr Success
            </Button>
        </PageLayout>
    );
};

export default Main;
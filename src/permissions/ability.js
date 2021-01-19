import { Ability, AbilityBuilder } from "@casl/ability";
import { store } from "redux/store";
import { roles } from "utils/types/roles";

// Defines how to detect object's type
function subjectName(item) {
  if (!item || typeof item === "string") {
    return item;
  }
  return item.__type;
}

const ability = new Ability([], { subjectName });

let currentAuth;
store.subscribe(() => {
  const prevAuth = currentAuth;
  currentAuth = store.getState().user?.data;
  if (prevAuth !== currentAuth) {
    ability.update(defineRulesFor(currentAuth));
  }
});

// Ability by user role
function defineRulesFor(user) {
  const { can, cannot, rules } = new AbilityBuilder();
  
  if (
    user.type_account === roles.ROLE_SUPER_ADMIN ||
    user.type_account === roles.ROLE_ADMIN
  ) {
    can( "manage", "all" );
  }

  if ( user.type_account === roles.ROLE_USER ) {
    cannot("manage", "all");
  }
  
  return rules;
}

export default ability;
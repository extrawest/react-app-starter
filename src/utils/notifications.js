import { toastr } from "react-redux-toastr";

const toastrOptions = {
  timeOut: 3000, // by setting to 0 it will prevent the auto close
  onCloseButtonClick: () => console.log("Close button was clicked"),
  showCloseButton: true, // false by default
  closeOnToastrClick: true, // false by default, this will close the toastr when user clicks on it
};

export const errorNotification = (message) => {
  toastr.error(null, message, toastrOptions);
};

export const successNotification = (message) => {
  toastr.error(null, message, toastrOptions);
};
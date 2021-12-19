import _ from "lodash";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Dinesh", "Manoharan"], "-");
  return element;
};

document.body.appendChild(component());

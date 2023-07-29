const inintialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAcc: "",
};

export default function customerReducer(state = inintialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAcc: action.payload.createdAcc,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAcc: new Date().toDateString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

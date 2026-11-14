const user = {
  name: "Utkarsh",
  address: {
    city: {
      name: "Jabalpur",
      area: {
        name: "Vijay Nagar",
        pincode: 482002,
      },
    },
  },
};

function propertyCheck(r1) {
  let result = r1.split(".");
  result.shift();

  let current = user;

  for (let key of result) {
    if (current[key]) {
        // console.log("current[key] ",current[key]);
      current = current[key];
    //   console.log("current",current);
    } else {
      return false;
    }
  }
  return true;
}

let r1 = "user.address.city";
//  let r2 = "user.address.city.five";
console.log(propertyCheck(r1));

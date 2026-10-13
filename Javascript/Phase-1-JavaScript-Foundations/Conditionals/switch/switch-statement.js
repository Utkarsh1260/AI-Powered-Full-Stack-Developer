
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Friday":
        console.log("Weekend coming!");
        break;

    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;

    default:
        console.log("Midweek day");
};
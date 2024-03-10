function isRestaurantOpen(hours: (string | string[])[]): boolean {
    const currentTime = new Date();

    const currentDay = (currentTime.getDay() + 6) % 7; // Monday at index 0 in DB

    const isOpen24Hours = typeof hours[currentDay] === "string" && hours[currentDay] === "Open 24 hours";

    return isOpen24Hours || Array.isArray(hours[currentDay]) ?
        (hours[currentDay][0] <= currentTime.toTimeString().slice(0, 5) && hours[currentDay][1] >= currentTime.toTimeString().slice(0, 5)) ||
        (hours[currentDay][1] < hours[currentDay][0] && (currentTime.toTimeString().slice(0, 5) <= hours[currentDay][1] || currentTime.toTimeString().slice(0, 5) >= hours[currentDay][0])) :
        false;
}

export default isRestaurantOpen;
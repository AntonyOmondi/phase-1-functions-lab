// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    
    if (pickupLocation > hqLocation){
        return pickupLocation - hqLocation;
    }
    else {
        return hqLocation - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation){
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination){

    if (start > destination){
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);

    if (distance < 400){
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}

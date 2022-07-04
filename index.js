function mapToNegativize(sourceArray){
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        let newNegative = sourceArray[i] * -1;
        newArray.push(newNegative);
    }

    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        let newValue = sourceArray[i];
        newArray.push(newValue);
    }

    return newArray;
}

function mapToDouble(sourceArray){
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        let doubledValue = sourceArray[i] * 2;
        newArray.push(doubledValue);
    }

    return newArray;
}

function mapToSquare(sourceArray){
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        let squaredValue = sourceArray[i] ** 2;
        newArray.push(squaredValue);
    }

    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }

    return total
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }

    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }

    return false
}
export const inputCheck = (side) => {
    const errors = []

    if(side === ""){
      return errors
    } else if(isNaN(side)){
      errors.push("Must Enter In a Numeric Value")
    } else if(side <= 0){
      errors.push("Must enter a Value Greater Than 0")
    }

    return errors
}

export const validateSides = (side1, side2, side3) => {
    let results

    if(side1 !== side2 && side2 !== side3 & side3 !== side1){
        results = "Scalene"
      }else if(side1 === side2 && side2 === side3 && side3 === side1){
        results = "Equilateral"
      }else{
        results = "Isoceles"
      }

      return results
}
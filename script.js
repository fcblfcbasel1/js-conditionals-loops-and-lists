function example() {
    let input = read()
    if (input.length === 0) {
        print("Keine Eingabe vorhanden...")
    } else {
        print(input)
    }
}


function aufgabe_01() {
    let upperBound = parseInt(read())

    let n = upperBound

    for(n = 0; n < upperBound; n++) {
        print(n * 2)
    }
}

function aufgabe_02() {
    let upperBound = parseInt(read())
    let n = upperBound

    for(n = 0; n < upperBound; n = n + 2){
        print(n)
    }

}

function aufgabe_03() {
    let upperBound = parseInt(read())
    let n = upperBound

    for(n = 0; n < upperBound / 2; n++){
        print(n)
    }
}


function aufgabe_04() {
    let upperBound = parseInt(read())
    let n = upperBound

    if(n <= 0){
        for(n = upperBound; n <= 0; n++){
            print(n)
        }
    }
    else if(n >= 0){
        for(n = upperBound; n >= 0; n--){
            print(n,)
            
        }
    }
   else {
    print(0)
   }
}
function solution(str, ending){
    // TODO: complete
    var letras = str.split('')
    var letrasfim = ending.split('')
    var numletras = str.length
    var numletrasfim = ending.length
    var cont = -1
    for (var n =1;n<=numletrasfim;n++) {
      if (letras.at(cont) != letrasfim.at(cont)) {
        return false
        }
      cont = cont -1
    }

    return true}

    console.log(solution('abcde', 'cde'))
    console.log(solution('abcde', 'abc'))

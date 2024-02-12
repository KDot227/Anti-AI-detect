function obfuscate() {
    var input = document.getElementById("before").value;
    var output = document.getElementById("after");
    var checkbox_special_spaces = document.getElementById("special-spaces");
    var checkbox_special_characters = document.getElementById("special-characters");

    if (checkbox_special_characters.checked) {
        var obfuscatedInput = obfuscate_characters(input);
    } else {
        var obfuscatedInput = input;
    }

    if (checkbox_special_spaces.checked) {
        var result = "";
        for (var i = 0; i < obfuscatedInput.length; i++) {
            var characters = ['​​​​​', '​​', '​​​'];
            var random = Math.floor(Math.random() * characters.length);
            result += obfuscatedInput.charAt(i) + characters[random];
        }
        output.value = result;
    } else {
        output.value = obfuscatedInput;
    }
}

function obfuscate_characters(essay) {
    const char_dict = {
        "a": "а",
        "b": "b",
        "c": "ϲс",
        "d": "dԁ",
        "e": "ее",
        "f": "f",
        "g": "ɡց",
        "h": "h",
        "i": "iіі",
        "j": "jј",
        "k": "k",
        "l": "l",
        "m": "m",
        "n": "nոո",
        "o": "οо",
        "p": "pр",
        "q": "q",
        "r": "r",
        "s": "sѕ",
        "t": "t",
        "u": "սս",
        "v": "ꮩ",
        "w": "wԝ",
        "x": "xх",
        "y": "yу",
        "z": "z",
    };

    const char_dict_capitals = {
        "A": "AΑА",
        "B": "BΒВ",
        "C": "CС",
        "D": "D",
        "E": "EЕΕЕ",
        "F": "FϜᖴ",
        "G": "GԌԌᏀ",
        "H": "HНHΗНᎻᕼ",
        "I": "IІ",
        "J": "JЈͿЈ",
        "K": "KΚКᏦᛕKⲔꓗ",
        "L": "L",
        "M": "MΜϺМ",
        "N": "N",
        "O": "OООO",
        "P": "PР",
        "Q": "Q",
        "R": "R",
        "S": "SЅ",
        "T": "T",
        "U": "U",
        "V": "VѴ",
        "W": "W",
        "X": "XХ",
        "Y": "Y",
        "Z": "ZΖ",
    };

    const char_dict_numbers = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6б",
        "7": "7𝟽",
        "8": "8৪",
        "9": "9",
        "0": "0",
    };

    let obfuscatedEssay = '';

    for (const char of essay) {
      if (char.match(/[a-zA-Z]/)) {
        if (char === char.toUpperCase()) {
          obfuscatedEssay += get_random_char(char_dict_capitals[char]);
        } else {
          obfuscatedEssay += get_random_char(char_dict[char]);
        }
      } else if (char.match(/\d/)) {
        obfuscatedEssay += get_random_char(char_dict_numbers[char]);
      } else {
        obfuscatedEssay += char;
      }
    }
    
    return obfuscatedEssay;
}

function get_random_char(dictionary) {
    const keys = Object.keys(dictionary);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return dictionary[randomKey];
}

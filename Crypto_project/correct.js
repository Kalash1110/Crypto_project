// ParticlesJS Config.

var Hybrid = (function () {
  function encrypt(str, keyword) {
    //Vigenere Encyrption Part
    key = keyword;

    key = key.split("");
    if (str.length <= key.length) {
      key = keyword;
    } else {
      let temp = key.length;
      for (let i = 0; i < str.length - temp; i++) {
        key.push(key[i % key.length]);
      }
      key = key.join("");
    }

    let cipher_text_vigenere = "";

    for (let i = 0; i < str.length; i++) {
      // converting in range 0-25
      let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

      // convert into alphabets(ASCII)
      x += "A".charCodeAt(0);

      cipher_text_vigenere += String.fromCharCode(x);
    }

    // //POLYBIUS ENCRYPTION PART:-
    let str1 = cipher_text_vigenere;
    let final_cipher = "";
    var matrix = new Array(5);

    for (var i = 0; i < matrix.length; i++) {
      matrix[i] = [];
    }
    var h = 0;
    var s = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        matrix[i][j] = s[h++];
      }
    }
    for (let k = 0; k < str1.length; k++) {
      // converting in range 0-25
      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          if (matrix[i][j] == str1[k])
            final_cipher = final_cipher + (j + 1) + (i + 1);
        }
      }
      if (str1[k] == "J") final_cipher = final_cipher + "42";
    }
    let enctext = final_cipher;

    return enctext;
  }

  function decrypt(encrypted_text, key) {
    //Polybius decryption
    let orig_text = "";
    console.log(key);
    var matrix = new Array(5);

    for (var i = 0; i < matrix.length; i++) {
      matrix[i] = [];
    }
    var h = 0;
    var s = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        matrix[i][j] = s[h++];
      }
    }

    let Decrypt_phase1 = "";
    for (let k = 0; k < encrypted_text.length; k = k + 2) {
      let idx1 = parseInt(encrypted_text[k]);
      let idx2 = parseInt(encrypted_text[k + 1]);
      idx1 = idx1 - 1;
      idx2 = idx2 - 1;
      char = matrix[idx2][idx1];
      Decrypt_phase1 = Decrypt_phase1 + char;
    }

    //Viegenre decryption
    str1 = Decrypt_phase1;
    keyword = key;
    key = key.split("");
    if (str1.length <= key.length) {
      key = keyword;
    } else {
      let temp = key.length;
      for (let i = 0; i < str1.length - temp; i++) {
        key.push(key[i % key.length]);
      }
      key = key.join("");
    }

    for (let i = 0; i < Decrypt_phase1.length; i++) {
      // converting in range 0-25
      let x =
        (Decrypt_phase1[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

      x += "A".charCodeAt(0);
      orig_text += String.fromCharCode(x);
    }

    return orig_text;
  }
  return {
    encrypt: function (text, key) {
      return encrypt(text, key);
    },
    decrypt: function (text, key) {
      return decrypt(text, key);
    },
  };
})();

(function () {
  var $key = document.getElementById("key");
  var $palintext = document.getElementById("palintext");
  var $encryptedtext = document.getElementById("encryptedtext");

  var $btnEncript = document.getElementById("btn-encript");
  var $btnDecript = document.getElementById("btn-decript");
  var $btn_clear_1 = document.getElementById("clear_one");
  var $btn_clear_2 = document.getElementById("clear_two");

  $btnEncript.addEventListener("click", function () {
    var text = Hybrid.encrypt($palintext.value, $key.value);
    $encryptedtext.value = text;
  });
  $btn_clear_2.addEventListener("click", function () {
    $encryptedtext.value = "";
  });
  $btn_clear_1.addEventListener("click", function () {
    $palintext.value = "";
  });

  $btnDecript.addEventListener("click", function () {
    var text = Hybrid.decrypt($encryptedtext.value, $key.value);
    $palintext.value = text;
  });
})();

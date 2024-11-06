function encodeToRot13(str) {
    const strEncode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const strCode =   'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    const arr = str.split('');
    for (let i = 0; i < str.length; i += 1) {
      const num = strEncode.indexOf(arr[i]);
      if (num >= 0) {
        arr[i] = strCode[i];
      }
    }
    console.log(str, arr.join(''));
    return arr.join('');
  }

  encodeToRot13('hello');
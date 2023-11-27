// MD5 HASHING FUNCTION

// Runtime: O(n) 

// STEP 1: Padding
// Extra bits are added to the array to make the final length
// 64 bit short of 512.

// STEP 2: Appending
// The remaining 64-bits are covered by first converting the original
// input into 64-bit form, and adding/appending them to the padded form
// so that the total size of the message is 512 (or a modulo of 512).

// STEP 3: Applying the non-linear functions over a loop
// The 512-bit message is broken into chunks of 16 blocks where each block
// is a 32-bit message/hash. The buffers or registers are initialized here
// (at the beginning) and used in tandem with the non-linear functions to further
// encrypt the message, for 16 rounds. Thus the total rounds are 64 (same as the
// number of K values). Each such blocks being 32-bit can be representive of a 
// "word". Each loop is a several step process of applying non-linear functions
// on the register, along with addition of the words and applying shift (bitwise)
// for every iteration. These processes make it mathematically tedious to reverse 
// engineer any encrypted message.

// STEP 4: Conversion to Hexadecimal
// The following code converts the results of the main loop (which are numerical values)
// to hexidecimal values and returns the final hash value of the string.

//// -------------------------------------MD5 HASH FUNCTION------------------------------------------////

// The main loop for the hashing function, which takes in a string of arbitary 
// length and outputs a 128-bit hash.
// If salt is set to true and no string is provided as salt, the function generates a random
// string of length 10 and adds to the original message. If provided, the function will add
// the randomString to the original message before making the hash.
export const MD5 = (string, salt=false, randomString=null) => {

    // The following code converts the results of the main loop (which are numerical values)
    // to hexidecimal values and returns the final hash value of the string.
    function M(d) {
        let _, m = "0123456789ABCDEF", f = "";
        for (let r = 0; r < d.length; r++) {
            _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
        }
        return f;
    }

    // Converting the input string 32-bit word.
    function X(d) {
        let _ = Array(d.length >> 2)
        for (let m = 0; m < _.length; m++) {
            _[m] = 0;
        }
        for (m = 0; m < 8 * d.length; m += 8) {
            _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
        }
        return _;
    }

    // Converts 32-bit words to string values. 
    function V(d) {
        let _ = ""
        for (let m = 0; m < 32 * d.length; m += 8) {
            _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
        }
        return _;
    }

    // The main loop of 64 rounds total, applied on 16 blocks of 32-bit words
    // which were subdivided from the original 512 (or a number divisible by 512)
    // for the rounds.
    function Y(d, _) {
        d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
        let m = 1732584193, f = -271733879, r = -1732584194, i = 271733878
        for (let n = 0; n < d.length; n += 16) {
            let h = m,
                t = f,
                g = r,
                e = i;
            f = md5_ii(
                f = md5_ii(
                    f = md5_ii(
                        f = md5_ii(
                            f = md5_ii(
                                f = md5_hh(
                                    f = md5_hh(
                                        f = md5_hh(
                                            f = md5_hh(
                                                f = md5_gg(
                                                    f = md5_gg(
                                                        f = md5_gg(
                                                            f = md5_gg(
                                                                f = md5_ff(
                                                                    f = md5_ff(
                                                                        f = md5_ff(
                                                                            f = md5_ff(
                                                                                f, r = md5_ff(
                                                                                    r, i = md5_ff(
                                                                                        i, m = md5_ff(
                                                                                            m, f, r, i, d[n + 0], 7, -680876936)
                                                                                            , f, r, d[n + 1], 12, -389564586)
                                                                                            , m, f, d[n + 2], 17, 606105819)
                                                                                            , i, m, d[n + 3], 22, -1044525330)
                                                                                            , r = md5_ff(
                                                                                                r, i = md5_ff(
                                                                                                    i, m = md5_ff(
                                                                                                        m, f, r, i, d[n + 4], 7, -176418897)
                                                                                                        , f, r, d[n + 5], 12, 1200080426)
                                                                                                        , m, f, d[n + 6], 17, -1473231341)
                                                                                                        , i, m, d[n + 7], 22, -45705983)
                                                                                                        , r = md5_ff(
                                                                                                            r, i = md5_ff(
                                                                                                                i, m = md5_ff(
                                                                                                                    m, f, r, i, d[n + 8], 7, 1770035416)
                                                                                                                    , f, r, d[n + 9], 12, -1958414417)
                                                                                                                    , m, f, d[n + 10], 17, -42063)
                                                                                                                    , i, m, d[n + 11], 22, -1990404162)
                                                                                                                    , r = md5_ff(
                                                                                                                        r, i = md5_ff(
                                                                                                                            i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), 
                                                                                                                            f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), 
                                                                                                                            i, m, d[n + 15], 22, 1236535329), r = md5_gg(
                                                                                                                                r, i = md5_gg(
                                                                                                                                    i, m = md5_gg(
                                                                                                                                        m, f, r, i, d[n + 1], 5, -165796510), 
                                                                                                                                        f, r, d[n + 6], 9, -1069501632), 
                                                                                                                                        m, f, d[n + 11], 14, 643717713), 
                                                                                                                                        i, m, d[n + 0], 20, -373897302), 
                                                                                                                                        r = md5_gg(
                                                                                                                                            r, i = md5_gg(
                                                                                                                                                i, m = md5_gg(
                                                                                                                                                    m, f, r, i, d[n + 5], 5, -701558691), 
                                                                                                                                                    f, r, d[n + 10], 9, 38016083), 
                                                                                                                                                    m, f, d[n + 15], 14, -660478335), 
                                                                                                                                                    i, m, d[n + 4], 20, -405537848), 
                                                                                                                                                    r = md5_gg(
                                                                                                                                                        r, i = md5_gg(
                                                                                                                                                            i, m = md5_gg(
                                                                                                                                                                m, f, r, i, d[n + 9], 5, 568446438), 
                                                                                                                                                                f, r, d[n + 14], 9, -1019803690), 
                                                                                                                                                                m, f, d[n + 3], 14, -187363961), 
                                                                                                                                                                i, m, d[n + 8], 20, 1163531501), 
                                                                                                                                                                r = md5_gg(
                                                                                                                                                                    r, i = md5_gg(
                                                                                                                                                                        i, m = md5_gg(
                                                                                                                                                                            m, f, r, i, d[n + 13], 5, -1444681467), 
                                                                                                                                                                            f, r, d[n + 2], 9, -51403784), 
                                                                                                                                                                            m, f, d[n + 7], 14, 1735328473), 
                                                                                                                                                                            i, m, d[n + 12], 20, -1926607734), 
                                                                                                                                                                            r = md5_hh(
                                                                                                                                                                                r, i = md5_hh(
                                                                                                                                                                                    i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), 
                                                                                                                                                                                    f, r, d[n + 8], 11, -2022574463), 
                                                                                                                                                                                    m, f, d[n + 11], 16, 1839030562), 
                                                                                                                                                                                    i, m, d[n + 14], 23, -35309556), 
                                                                                                                                                                                    r = md5_hh(
                                                                                                                                                                                        r, i = md5_hh(
                                                                                                                                                                                            i, m = md5_hh(
                                                                                                                                                                                                m, f, r, i, d[n + 1], 4, -1530992060), 
                                                                                                                                                                                                f, r, d[n + 4], 11, 1272893353), 
                                                                                                                                                                                                m, f, d[n + 7], 16, -155497632), 
                                                                                                                                                                                                i, m, d[n + 10], 23, -1094730640), 
                                                                                                                                                                                                r = md5_hh(
                                                                                                                                                                                                    r, i = md5_hh(
                                                                                                                                                                                                        i, m = md5_hh(
                                                                                                                                                                                                            m, f, r, i, d[n + 13], 4, 681279174), 
                                                                                                                                                                                                            f, r, d[n + 0], 11, -358537222), 
                                                                                                                                                                                                            m, f, d[n + 3], 16, -722521979), 
                                                                                                                                                                                                            i, m, d[n + 6], 23, 76029189), 
                                                                                                                                                                                                            r = md5_hh(
                                                                                                                                                                                                                r, i = md5_hh(
                                                                                                                                                                                                                    i, m = md5_hh(
                                                                                                                                                                                                                        m, f, r, i, d[n + 9], 4, -640364487), 
                                                                                                                                                                                                                        f, r, d[n + 12], 11, -421815835), 
                                                                                                                                                                                                                        m, f, d[n + 15], 16, 530742520), 
                                                                                                                                                                                                                        i, m, d[n + 2], 23, -995338651), 
                                                                                                                                                                                                                        r = md5_ii(
                                                                                                                                                                                                                            r, i = md5_ii(
                                                                                                                                                                                                                                i, m = md5_ii(
                                                                                                                                                                                                                                    m, f, r, i, d[n + 0], 6, -198630844), 
                                                                                                                                                                                                                                    f, r, d[n + 7], 10, 1126891415), 
                                                                                                                                                                                                                                    m, f, d[n + 14], 15, -1416354905), 
                                                                                                                                                                                                                                    i, m, d[n + 5], 21, -57434055), 
                                                                                                                                                                                                                                    r = md5_ii(
                                                                                                                                                                                                                                        r, i = md5_ii(
                                                                                                                                                                                                                                            i, m = md5_ii(
                                                                                                                                                                                                                                                m, f, r, i, d[n + 12], 6, 1700485571), 
                                                                                                                                                                                                                                                f, r, d[n + 3], 10, -1894986606), 
                                                                                                                                                                                                                                                m, f, d[n + 10], 15, -1051523), 
                                                                                                                                                                                                                                                i, m, d[n + 1], 21, -2054922799), 
                                                                                                                                                                                                                                                r = md5_ii(
                                                                                                                                                                                                                                                    r, i = md5_ii(
                                                                                                                                                                                                                                                        i, m = md5_ii(
                                                                                                                                                                                                                                                            m, f, r, i, d[n + 8], 6, 1873313359), 
                                                                                                                                                                                                                                                            f, r, d[n + 15], 10, -30611744), 
                                                                                                                                                                                                                                                            m, f, d[n + 6], 15, -1560198380), 
                                                                                                                                                                                                                                                            i, m, d[n + 13], 21, 1309151649), 
                                                                                                                                                                                                                                                            r = md5_ii(
                                                                                                                                                                                                                                                                r, i = md5_ii(
                                                                                                                                                                                                                                                                    i, m = md5_ii(
                                                                                                                                                                                                                                                                        m, f, r, i, d[n + 4], 6, -145523070), 
                                                                                                                                                                                                                                                                        f, r, d[n + 11], 10, -1120210379), 
                                                                                                                                                                                                                                                                        m, f, d[n + 2], 15, 718787259), 
                                                                                                                                                                                                                                                                        i, m, d[n + 9], 21, -343485551), 
                                                                                                                                                                                                                                                                        m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e))
        }
        return Array(m, f, r, i);
    }

    // Performing the required bitwise operations during the main loop.
    function md5_cmn(d, _, m, f, r, i) {
        return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
    }

    // Non-Linearity functions, where bitwise manipulations are done in order to
    // induce randomness into the hash function.
    function md5_ff(d, _, m, f, r, i, n) {
        return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
    }
    function md5_gg(d, _, m, f, r, i, n) {
        return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
    }
    function md5_hh(d, _, m, f, r, i, n) {
        return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
    }
    function md5_ii(d, _, m, f, r, i, n) {
        return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
    }

    // A bitwise addition operation
    function safe_add(d, _) {
        let m = (65535 & d) + (65535 & _);
        return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
    }

    // A bitwise left rotation operration
    function bit_rol(d, _) {
        return d << _ | d >>> 32 - _;
    }

    // A generate a random string if salt is equal to true
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    // Handle salt and randomString parameters
    if (salt && randomString == null) {
        string += generateRandomString(10);
        let r = M(V(Y(X(string), 8 * string.length)));
        return r.toLowerCase();
    }
    else if (salt) {
        string += randomString;
        let r = M(V(Y(X(string), 8 * string.length)));
        return r.toLowerCase();
    }
    else if (!salt && randomString != null) {
        console.log ("Paramter 'salt' not set to true!");
    }
    else {
        let r = M(V(Y(X(string), 8 * string.length)));
        return r.toLowerCase();
    }
};

//// -----------------------------------------------------------------------------------------------////
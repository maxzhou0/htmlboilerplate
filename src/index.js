console.log("a1bc33d");

function x() {
    let [a, b, c] = [1, 2, 3];
    let d = {
        a,
        b,
        c
    };
    let e = {
        ...d
    };
    return e;
}
export function Game (btn){
    const blocks = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ]

let i = 0;
for (;i<blocks.length;i++){
    const [a,b,c] = blocks[i];
    if( btn[a] && btn[a] === btn[b] && btn[a] === btn[c]){
        return {
            winner : btn[a],
            block  : blocks[i],
        }
    }

}

return {
    winner : null,
    block  : null,
}

}

const makeEmoji = function(data) {
    let sholl = [];
    let tp = data;
    // console.log(tp)
    let starts = tp.indexOf('[');
    let ends = tp.indexOf(']');
    if(starts === -1||ends === -1) {
        return data
    }
    function moon() {
        let start = tp.indexOf('[');
        let end = tp.indexOf(']');
        if(start !== 0) {
            sholl.push(tp.slice(0, start));
        }
        sholl.push(tp.slice(start,end+1));
        tp = tp.slice(end+1, tp.length+1);
        if(tp !== '') {
            moon()
        }
    }
    moon();
    return sholl
}

export default makeEmoji
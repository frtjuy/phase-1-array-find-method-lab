// code your solution here
function superbowlWin(record) {
    for (const wins of record) {
        if (wins.result === "W") {
            return(wins.year);
        };
    };
};


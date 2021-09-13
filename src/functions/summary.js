const data = {
    "CHR": [
        {"judge": "Nightmare", "grade": 0},
        {"min":1, "judge": "Horrible", "grade": 0},
        {"min":2, "judge": "Normal", "grade": 0},
        {"min":4, "judge": "Good", "grade": 0},
        {"min":7, "judge": "Great", "grade": 1},
        {"min":9, "judge": "Excellent", "grade": 2},
        {"min":11, "judge": "Godlike", "grade": 3},
    ],
    "MNY": [
        {"judge": "Nightmare", "grade": 0},
        {"min":1, "judge": "Horrible", "grade": 0},
        {"min":2, "judge": "Normal", "grade": 0},
        {"min":4, "judge": "Good", "grade": 0},
        {"min":7, "judge": "Great", "grade": 1},
        {"min":9, "judge": "Excellent", "grade": 2},
        {"min":11, "judge": "Godlike", "grade": 3},
    ],
    "SPR": [
        {"judge": "Nightmare", "grade": 0},
        {"min":1, "judge": "Horrible", "grade": 0},
        {"min":2, "judge": "Normal", "grade": 0},
        {"min":4, "judge": "Good", "grade": 0},
        {"min":7, "judge": "Great", "grade": 1},
        {"min":9, "judge": "Excellent", "grade": 2},
        {"min":11, "judge": "Godlike", "grade": 3},
    ],
    "INT": [
        {"judge": "Nightmare", "grade": 0},
        {"min":1, "judge": "Horrible", "grade": 0},
        {"min":2, "judge": "Normal", "grade": 0},
        {"min":4, "judge": "Good", "grade": 0},
        {"min":7, "judge": "Great", "grade": 1},
        {"min":9, "judge": "Excellent", "grade": 2},
        {"min":11, "judge": "Godlike", "grade": 3},
    ],
    "STR": [
        {"judge": "Nightmare", "grade": 0},
        {"min":1, "judge": "Horrible", "grade": 0},
        {"min":2, "judge": "Normal", "grade": 0},
        {"min":4, "judge": "Good", "grade": 0},
        {"min":7, "judge": "Great", "grade": 1},
        {"min":9, "judge": "Excellent", "grade": 2},
        {"min":11, "judge": "Godlike", "grade": 3},
    ],
    "AGE": [
        {"judge": "Nightmare", "grade": 0},
        {"min":20, "judge": "Horrible", "grade": 0},
        {"min":50, "judge": "Normal", "grade": 0},
        {"min":60, "judge": "Good", "grade": 0},
        {"min":70, "judge": "Great", "grade": 1},
        {"min":80, "judge": "Excellent", "grade": 2},
        {"min":90, "judge": "Godlike", "grade": 3},
    ],
    "SUM": [
        {"judge": "Nightmare", "grade": 0},
        {"min":41, "judge": "Horrible", "grade": 0},
        {"min":50, "judge": "Normal", "grade": 0},
        {"min":60, "judge": "Good", "grade": 0},
        {"min":80, "judge": "Great", "grade": 1},
        {"min":100, "judge": "Excellent", "grade": 2},
        {"min":110, "judge": "Godlike", "grade": 3},
        {"min":120, "judge": "Legendary", "grade": 3},
    ]
}

function summary(type, value) {
    let length = data[type].length;
    while(length--) {
        const {min, judge, grade} = data[type][length];
        if(min==void 0 || value >= min) return {judge, grade};
    }
}

export { summary };
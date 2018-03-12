export class Exam {
    public id: string;
    
    constructor(
        public questions: Question[]
    ){}
}

export class Question {
    public id: string;

    constructor(
        public type: number,
        public options: Option[]
    ){}
}

export class Option {
    public id: string;

    constructor(
        public text: string, 
        public isAnswer:boolean 
    ){}
}
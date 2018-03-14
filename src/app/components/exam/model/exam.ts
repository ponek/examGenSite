export class Exam {
    id: string;
    questions: Question[]
}

export class Question {
    id: string;
    type: number;
    options: Option[];
}

export class Option {
    public id: string;
    public text: string;
    public isAnswer:boolean;
}
export class Exam {
    id: string;
    questions: Question[]
}

export class Question {
    id: string;
    type: number;
    text: string;
    options: Option[];
}

export class Option {
    id: string;
    selected: boolean;
    text: string;
    isAnswer: boolean;
}
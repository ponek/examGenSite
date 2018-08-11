export class Exam {
    id: string;
    questions: Question[]
}

export class Question {
    id: string;
    type: number;
    text: string;
    wrongAnswerComment: string;
    options: Option[];
}

export class Option {
    id: string;
    selected: boolean;
    text: string;
    isAnswer: boolean;
}

export class ExamAnswer {
    id: string;
    questions: Question[];
}
    
export class ExamResult {
    id: string;
    correctTotal: number;
    wrongTotal: number;
    isExpiredExam: boolean;
}
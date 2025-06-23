interface iOption {
    option: string;
    text: string;
}

export default interface Question {
    id: number;
    question: string;
    options: Array<iOption>;
    correct: string;
}
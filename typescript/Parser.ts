class Parser{
    private current_lexeme: Lexeme;
    private lexer: Lexer;
    private grammatical_functions: { [id: string] : Function};

    constructor(grammar_text: string){
        this.grammatical_functions = ParserGenerator.GenerateGrammaticalFunctions(grammar_text);
    }

    private fatal(error: string): void{
        alert(error);
    }

    private check(type: string): boolean {
        print('check');
        return this.current_lexeme.type === type;
    }
    private advance(): void {
        print('advance');
        this.current_lexeme = this.lexer.lex();
    }
    private match(type: string): void {
        print('match');
        this.matchNoAdvance(type);
        this.advance();
    }
    private matchNoAdvance(type: string ): void {
        if (!this.check(type)){
            this.fatal("syntax error");
        }else{
            print(type);
        }
    }

    public parse(program_text: string): void {
        this.lexer = new Lexer(program_text);
        this.current_lexeme = this.lexer.lex();
        var i: number = 0;
        print(this.statement);
        while (this.current_lexeme.type != END_OF_INPUT){
            print("number of statements: " + i);
            this.statement();
            this.current_lexeme = this.lexer.lex();
            i++;
        }
    }

    private statement(): void{
        this.grammatical_functions["statement"]();
    }
}
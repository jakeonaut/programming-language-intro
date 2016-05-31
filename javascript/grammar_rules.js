var opt_newline = (NEWLINE && opt_newline) || _empty_;
var op0 = NOT || BITWISE_NOT;
var op1 = exponent;
var op2 = TIMES || divided_by || MOD;
var op3 = PLUS || MINUS;
var op4 = BITWISE_AND;
var op5 = BITWISE_XOR;
var op6 = BITWISE_OR;
var op7 = AND;
var op8 = OR;
var exponent = EXPONENT || (TO && THE);
var divided_by = DIVIDED_BY || (DIVIDED && BY);
var primary = num_primary || bool_primary || str_primary || var_primary ||
    list_primary || dict_primary || func_primary || new_obj_primary ||
    expression;
var num_primary = NUMBER || (MINUS && NUMBER) || (LOG && NUMBER);
var bool_primary = BOOLEAN || (NOT && bool_primary) ||
    (primary && comparator && primary);
var str_primary = STRING;
var var_primary = VARIABLE || obj_variable || var_func_call || obj_func_call;
var obj_variable = VARIABLE && VARIABLE;
var list_primary = OBRACKET && opt_list_body && CBRACKET;
var dict_primary = OBRACE && opt_dict_body && CBRACE;
var func_primary = DEF && opt_var && opt_with_def && block;
var expression = (primary && opt_expression_op_rhs) ||
    (OPAREN && expression && CPAREN);
var opt_expression = expression || _empty_;
var opt_expression_op_rhs = (op0 && expression) || (op1 && expression) ||
    (op2 && expression) || (op3 && expression) ||
    (op4 && expression) || (op5 && expression) ||
    (op6 && expression) || (op7 && expression) ||
    (op8 && expression) || _empty_;
var opt_var = VARIABLE || _empty_;
var var_func_call = CALL && VARIABLE && opt_with_call;
var obj_func_call = CALL && VARIABLE && VARIABLE && opt_with_call;
var opt_with_def = WITH && VARIABLE && (opt_with_def_continuation ||
    IS && expression && opt_with_default_continuation);
var opt_with_def_continuation = (opt_newline && COMMA && opt_newline && VARIABLE &&
    opt_with_def_continuation) || (COMMA && opt_newline && normal_assignment &&
    opt_with_default_continuation) || _empty_;
var opt_with_default_continuation = (opt_newline && COMMA && opt_newline &&
    normal_assignment && opt_with_default_continuation) || _empty_;
var opt_with_call = WITH && primary && opt_with_call_continutation;
var opt_with_call_continutation = (opt_newline && COMMA && opt_newline && primary &&
    opt_with_call_continutation) || _empty_;
var list_body = primary && opt_list_continuation;
var opt_list_body = list_body || _empty_;
var opt_list_continuation = (opt_newline && COMMA && opt_newline && list_body) ||
    _empty_;
var dict_body = normal_assignment && opt_dict_continuation;
var opt_dict_body = dict_body || _empty_;
var opt_dict_continuation = (opt_newline && COMMA && opt_newline && dict_body) ||
    _empty_;
var assignment_statement = assignment && statement_end;
var assignment = VARIABLE && opt_var && assignment_op && expression;
var normal_assignment = VARIABLE && IS && expression;
var assignment_op = IS || PLUS_EQUALS || MINUS_EQUALS || TIMES_EQUALS ||
    DIVIDED_BY_EQUALS || EXPONENT_EQUALS || MOD_EQUALS;
var if_statement = (IF && boolean && block && opt_else);
var opt_else = (ELSE && (if_statement || block)) || _empty_;
var boolean = (primary && comparator && primary) || (NOT && boolean) || BOOLEAN;
var comparator = GREATER_THAN || GREATER_THAN_EQUAL || LESS_THAN ||
    LESS_THAN_EQUAL || EQUAL_TO || NOT_EQUAL_TO;
var while_statement = (WHILE && boolean && block);
var block = opt_newline && DO && opt_newline && statement_list && opt_newline &&
    END && opt_newline;
var print_statement = PRINT && primary && statement_end;
var func_def_statement = func_primary && statement_end;
var class_def_statement = class_primary && statement_end;
var class_primary = CLASS && opt_var && opt_extends && START && class_body && END;
var opt_extends = (EXTENDS && VARIABLE) || _empty_;
var class_body = (NEWLINE && class_body) || (member_def && class_body) ||
    (method_def && class_body) || (init_def && class_body) || _empty_;
var init_def = WHEN && CREATED && opt_with_def && block;
var member_def = MY && normal_assignment;
var method_def = opt_static && func_primary;
var opt_static = STATIC || _empty_;
var new_obj_primary = NEW && VARIABLE && opt_with_call;
var statement = if_statement || while_statement || print_statement ||
    assignment_statement || func_def_statement || class_def_statement ||
    (opt_expression && statement_end);
var statement_end = PERIOD || NEWLINE || END_OF_INPUT;
var statement_list = statement || statement_list || _empty_;

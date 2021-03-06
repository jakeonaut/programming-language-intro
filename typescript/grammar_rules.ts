var opt_newline = (NEWLINE && opt_newline) || _empty_;

//levels of precedence (high -> low)
var op_one_param = MINUS || NOT || BITWISE_NOT || LOG;

var op_two_params = exponent || TIMES || divided_by ||
         MOD || PLUS || MINUS || LESS_THAN || LESS_THAN_EQUAL || GREATER_THAN ||
         GREATER_THAN_EQUAL || EQUAL_TO || NOT_EQUAL_TO || BITWISE_AND ||
         BITWISE_XOR || BITWISE_OR || AND || OR;

var exponent = EXPONENT || (TO && THE);
var divided_by = DIVIDED_BY || (DIVIDED && opt_by);
//"12 divided 3" is valid in google search
var opt_by = BY || _empty_;

/********************* PRIMARIES ******************************************/
var primary = NUMBER || BOOLEAN || STRING || var_primary || var_func_call ||
              list_primary || dict_primary || func_primary || new_obj_primary;

var opt_my = MY || _empty_;

var var_primary = opt_my && VARIABLE && opt_obj_access;

var opt_obj_access = (APOSTROPHE_S && VARIABLE && opt_obj_access) || _empty_;

var opt_var = VARIABLE || _empty_;

var var_func_call = CALL && var_primary && opt_with_call;

var opt_with_call = WITH && expression && opt_list_continuation;

var list_primary = OBRACKET && opt_list_body && CBRACKET;

var list_body = expression && opt_list_continuation;

var opt_list_body = list_body || _empty_;

var opt_list_continuation = (opt_newline && COMMA && opt_newline && list_body) ||
                            _empty_;

var dict_primary = OBRACE && opt_dict_body && CBRACE;

var dict_body = normal_assignment && opt_dict_continuation;

var opt_dict_body = dict_body || _empty_;

var opt_dict_continuation = (opt_newline && COMMA && opt_newline && dict_body) ||
                            _empty_;

/******************************************************************************/

var func_primary = opt_static && DEF && opt_var && opt_with_def && block;

var event_handler_primary = WHEN && CREATED && opt_with_def && block;

        var opt_static = STATIC || _empty_;

var opt_with_def = (WITH && parameter_def) || _empty_;

var parameter_def = VARIABLE && ((IS && expression &&
                    opt_with_default_continuation) || opt_with_def_continuation);

var opt_with_def_continuation = (opt_newline && COMMA && opt_newline && parameter_def) || _empty_;

var opt_with_default_continuation = (opt_newline && COMMA && opt_newline &&
             normal_assignment && opt_with_default_continuation) || _empty_;

var new_obj_primary = NEW && VARIABLE && opt_with_call;

/**************************************************************************/
var expression = (primary && opt_expression_op_rhs) ||
                 (op_one_param && expression) ||
                 (OPAREN && expression && CPAREN);

var opt_expression = expression || _empty_;

var opt_expression_op_rhs = (op_two_params && expression) ||  _empty_;

/**************************************************************************/

var assignment_statement = assignment && statement_end;

//opt_var allows for setting object members
var assignment = var_primary && assignment_op && expression;

var normal_assignment = VARIABLE && IS && expression;

var assignment_op = IS || PLUS_EQUALS || MINUS_EQUALS || TIMES_EQUALS ||
                    DIVIDED_BY_EQUALS || EXPONENT_EQUALS || MOD_EQUALS;

/**************************************************************************/

var if_statement = (IF && expression && block && opt_else);

var opt_else = (ELSE && (if_statement || block)) || _empty_;

var while_statement = (WHILE && expression && block);

var block = opt_newline && ((DO && opt_newline && statement_list && opt_newline &&
            END) || statement);

var print_statement = PRINT && expression && statement_end;

var expression_statement = expression && statement_end;

/**************************************************************************/

var class_def_statement = class_primary && statement_end;

var class_primary = CLASS && opt_var && opt_extends && block;

var opt_extends = (EXTENDS && var_primary) || _empty_;

/**************************************************************************/

var import_statement = IMPORT && VARIABLE && opt_as && statement_end;

var global_statement = GLOBAL && VARIABLE && statement_end;

var opt_as = AS && VARIABLE;

var statement =  if_statement || while_statement || print_statement ||
                 assignment_statement || expression_statement || class_def_statement ||
                 import_statement || global_statement;

var statement_end = PERIOD || NEWLINE || END_OF_INPUT;

var statement_list = (statement && statement_list) || _empty_;

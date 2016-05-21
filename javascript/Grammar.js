var operator = PLUS || TIMES || MINUS || DIVIDED_BY;
var primary = NUMBER || (OPAREN && expression && CPAREN) || (VARIABLE && assignment_rhs_or_opt_func_call_rhs);
var expression = (primary && opt_expression_operation_rhs);
var opt_expression_operation_rhs = (operator && expression) || _empty_;
var opt_expression = expression || _empty_;
var assignment_rhs = (IS && expression);
var assignment_rhs_or_opt_func_call_rhs = assignment_rhs || opt_func_call_rhs;
var opt_func_call_rhs = (OPAREN && opt_list && CPAREN) || _empty_;
var opt_list = list || _empty_;
var list = primary || (primary && COMMA && list);
var if_statement = (IF && boolean && block && opt_else);
var boolean = (primary && comparator && primary) || (NOT && boolean) || BOOLEAN;
var comparator = GREATER_THAN || GREATER_THAN_EQUAL || LESS_THAN || LESS_THAN_EQUAL || EQUAL_TO || NOT_EQUAL_TO;
var opt_else = (ELSE && block) || _empty_;
var while_statement = (WHILE && boolean && block);
var block = (DO && statement_list && END);
var statement_list = statement || statement_list || _empty_;
var statement = (opt_expression && statement_end) || if_statement || while_statement;
var statement_end = NEWLINE || PERIOD;

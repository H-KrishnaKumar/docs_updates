# Conditions in detail


| Condition's name | Description | 
| --- | --- | 
|  ALL  | Keeps all the lines 
| EQUAL  |  Valid lines: those whose *attribute_name* is equal to *condition_value*
|  NOT EQUAL  |  Valid lines: those whose *attribute_name* is not equal to *condition_value*
|  IN  | Valid lines: those whose *attribute_name* is in the list *condition_values*
| NOT IN  | Valid lines: those whose *attribute_name* is not in the list *condition_values*
| LTE  |  Valid lines: those whose *attribute_name* is lower or equal to *condition_value*
|  LT  | Valid lines: those whose *attribute_name* is lower than *condition_value*
| GTE  | Valid lines: those whose *attribute_name* is higher or equal to *condition_value*
| GT  | Valid lines: those whose *attribute_name* is higher than *condition_value*
| REGEXP  | Valid lines: those whose *attribute_name* corresponds to the regexp *condition_value* - Example : ^([0-9]{4})
| NOT REGEXP  | Valid lines: those whose *attribute_name* does not correspond to the *regexp condition_value*
| BETWEEN  | Valid lines: those whose *attribute_name* is between *condition_values[0]* and *condition_values[1]*
| NOT BETWEEN  | Valid lines: those whose *attribute_name* is not between *condition_values[0]* and *condition_values[1]*
| OR  | Valid lines: those whose one of the values contained in *condition_values* is not empty (empty, null, False, 0)
| AND  | Valid lines: those whose all values contained in *condition_values* are not empty (empty, null, False, 0)
| IS NULL| 
| IS NOT NULL| 
| IS INT | 
| IS NOT INT | 
|  IS DATE | 
|  IS NOT DATE | 
|  IS DEC | 
| IS NOT DEC | 
|  IS NUM | 
|  IS NOT NUM | 



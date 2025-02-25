# DPE and Data Manager Blueprint Rules

## Rule format

A rule applies to each line independently and allows several things.

If a condition is specified, the rule will apply only under certain conditions expressed in condition and condition_value(s).

If an action is filled, the action on each line will be performed, otherwise, it is considered to be a filtering rule. (keep)

###	Fields

| Attribute name | Required | Example | Comment |
| --- | --- | --- | --- |
| attribute\_name | If format is list : Yes - If format is object : no | ca\_ttcdate.. |   |
| condition | No (=ALL) | EQUAL
IN | Cf 1.2 |
| condition\_value | Yes except if condition = [IN, NOTIN, ALL] | 1
« Categorie1 » |   |
| condition\_values | Yes if condition = [IN , NOTIN] | [« ca\_ttc »,2,3][« categorie » ] |   |
| action | Non | keep concat | Cf 1.3 |
| action\_value | Yes if action = [default, split] | 1
« Categorie1 » |   |
| action\_values | Yes excepti if action =
[default, split, action\_error, keep, skip] | [« ca\_ttc »,2,3][« categorie » ] |   |
| else\_value | If condition is not met, will replace value by else\_value | « ca2 »  |   |

### Conditions List

If no *condition* is filled, the one set by default will be ALL, and allows any line

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


### Actions List
If no *action* nor *condition* is filled, then we consider it to be a **default action**. 
Otherwise, if no action is filled and there is one *condition*, the action by default is *keep*. 
The action applies only to lines that respond to the rule defined by *condition*. 

- *keep*: Keep the line
- *skip*: Skip the line
- *default*:  
Replace value by *action\_value*  
For dates, there is:
  - $today renvoie yyyy-mm-dd
  - $now renvoie yyyy-mm-dd hh:ii:ss
  - $yesterday renvoie yyyy-mm-dd
- *regexp\_replace*:  
Replace the value corresponding to regexp *action\_values[0]* by *action\_values[1]*
- *replace*:  
Replace the value corresponding to *action\_values[0]* by *action\_values[1]*
- *substring / substr*:  
  - If *action\_values[0]* \&gt;= 0: 
Starts at *action\_values[0]*th character
  - Sinon si *action\_values[0]* \&lt; 0:  
Only takes into account *action\_values[0]* last characters
  - If *action\_values[1]* filled:  
The 2nd figure represents the max number of characters wanted
- *date\_replace*:  
Replace the date format *action\_values[0]* by *action\_values[1]*  
Examples for *action\_values*:
  - [&quot;%d/%m/%Y&quot;,&quot;%Y-%m-%d&quot;]
  - List of jockers in appendix 2.1
- *add*:  
Add several fields or hard numbers, automatically detecting if for each value of *action\_values* it is an attribute available in the line, otherwise it is considered to be a number. Example for *action\_values*
  - [«ca\_ht », « taxes »]
  - [« nb\_clics »,1 ]
- *sub: Substract *action\_values[0]* to all the other data present in *action\_values*
- *mul*: Multiply *action\_values[0]* by *action\_values[1]*
- *div*: Divide *action\_values[0]* by *action\_values[1]*
- *mod*: Modulo *action\_values[0]* by *action\_values[1]*
- *concat*: Concatenate one or several fields with hard strings. Each element of *action\_values* detects if it is the name of a column available in the line, if not we consider it to be a string of hard characters
 - Example for action\_values:
    - [« site\_name«, » -», « country«  ]
    - [« civilite «, » name», « lastname «  ]
- *ceil*: Rounded up *action\_value*
- *floor*: Rounded down *action\_value*
- *disaggregate / split*:  
Used to create multiple lines if a field contains multiple values ​​that should be splitted in each separate line.
There can only be one *disaggregate* rule per DPE action
This rule will always apply automatically last.
Split the field on the character *action\ _value*
For each split element, only non-empty values ​​are kept
- *action\_error*: Leads to an error in the action (and consequently consider that all the lines are false) 
- *Stop\_workflow*: Stop the workflow


## Appendice
### Dates Jokers
| **Directive** | **Meaning** | **Example** |
| --- | --- | --- |
| %w | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.  | 0, 1, ..., 6 |
| %d | Day of the month as a zero-padded decimal number. | 01, 02, ..., 31 |
| %m | Month as a zero-padded decimal number.   | 01, 02, ..., 12 |
| %y | Year without century as a zero-padded decimal number.  | 00, 01, ..., 99 |
| %Y | Year with century as a decimal number.  | 1970, 1988, 2001, 2013 |
| %H | Hour (24-hour clock) as a zero-padded decimal number.  | 00, 01, ..., 23 |
| %I | Hour (12-hour clock) as a zero-padded decimal number.  | 01, 02, ..., 12 |
| %p | Locale’s equivalent of either AM or PM. | AM, PM (en\_US);am, pm (de\_DE) |
| %M | Minute as a zero-padded decimal number. | 00, 01, ..., 59 |
| %S | Second as a zero-padded decimal number. | 00, 01, ..., 59 |
| %f | Microsecond as a decimal number, zero-padded on the left. | 000000, 000001, ..., 999999 |
| %z | UTC offset in the form +HHMMor -HHMM (empty string if the object is naive).  | (empty), +0000, -0400, +1030 |
| %Z | Time zone name (empty string if the object is naive). | (empty), UTC, EST, CST |
| %j | Day of the year as a zero-padded decimal number. | 001, 002, ..., 366 |
| %U | Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0. | 00, 01, ..., 53 |
| %W | Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0. | 00, 01, ..., 53 |
| %% | A literal &#39;%&#39; character. | % |




### Rules examples
```
[

    {
        "attribute_name": "date",
        "action": "date_replace",
        "action_values": ["%d/%m/%Y", "%Y-%m-%d"]
    }

]
```
```
[
    {
        "attribute_name":"year",
        "condition":"IN",
        "condition_values":["2015","2016"],
        "action":"add",
        "action_values":["year",1]
    }

]
```
```
[
    {
        "attribute_name":"year",
        "condition":"LT",
        "condition_value":"2015",
        "action":"default" ,
        "action_value:"2015"
    }
]
```
```
[
    {
          "action": "default",
          "action_value": "$today",
          "attribute_name": "date"
    }
]
```
```
[
    {
          "action": "sub",
          "action_values": [
            "temp_min",
            273.15
          ],
          "attribute_name": "temp_min"
     }
]
```
```
[
    {
          "action": "date_replace",
          "action_values": [
            "%a %b %d %H:%M:%S +0000 %Y",
            "%Y-%m-%d %H:%M:%S"
          ],
          "attribute_name": "statuses_created_at"
    }
]
```


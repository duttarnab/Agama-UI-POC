# Agama Keywords, Purpose/usage

| Keywords | Purpose/usage |    Input |  Output |     
|   ------  |    --------    | --------    | :--------:    |
| `Basepath` | header declaration: *specifies the directory where the assets of the flow reside* e.g `Basepath "mydir"` |    string |  / | 
| `Call` | Java interaction e.g `Call io.jan.as.service.AuthenticationService#class` |     string |  / | 
| `Configs` | header declaration |  any |  / | 
| `Finish` | termination: *marks the flow ending* |  any |  / | 
| `Flow` | header declaration e.g `Flow com.gluu.example` by convention |  string |  / | 
| `Inputs` | header declaration |   string  |  / | 
| `Iterate over` | loop *used to traverse the items of a string, list, or the keys of a map* |   string, list, map |  any | 
| `Log` | logging *e.g* `Log "done!"` *will append the text Done! to the flow's log.*|   any |  any | 
| `Match ... to` | conditionals *is a construct similar to C/Java switch*|   any |  / | 
| `Otherwise` | conditional *often used with the `when` keyword synonymous to `else` in JS and other languages, can also be used for default case in a `Match ... to` expression* |   expression |  / | 
| `Override templates` | web interaction |   strings |  / | 
| `Quit` | conditionals and loops |   / |  / | 
| `Repeat` | loops: e.g `Repeat n times max` *where n is a number e.g 3 to repeat the block maximum 3 times*|   unsigned int, expression |  / | 
| `RFAC` (Redirect and Fetch at callback) | web interaction e.g. `RFAC "https://login.twitter.com/?blah..&boo=..."`|   string |  / | 
| `RRF` (Rendered, Reply, Fetch) | web interaction: *used to send a response to the user's browser: it takes the path to a template e.g hello/index.ftlh and injects a value into it*|   string |  / | 
| `seconds` | header declaration |   / |  / | 
| `times max` | *used with repeat* |   / |  / | 
| `Timeout` | header declaration: often used with the keyword  `seconds` e.g `Timeout 100 seconds` |   unsigned int |  / | 
| `Trigger` | subflow calls e.g `Trigger io.jans.flow.example`| string: flow path |  / | 
| `using` | loop: e.g `Iterate over arr using i` |   any |  any | 
| `When` | conditional *often used with an operator* e.g. `when obj.success is true` do something in the block. Here `is` is the operator|   expression |  / | 

#

| Operators |
|   -----  | 
| `and` |  
| `is` |
| `is not` |
| `or` |

#

| Special literals |
|   -----  | 
| `true` |  
| `false` |
| `null` |

#

| Core Data types | e.g |
|   -----  |   -------    |
| `string` |  "Agama\n" | 
| `boolean` |   true, false | 
| `numbers` |    10, 23 | 
| `null` |    null | 
| `list` |    [ 1, 2, 3 ] |
| `maps` |    { brand: "Ford", model: 1963, overhaulsIn: [ 1979, 1999 ] } |